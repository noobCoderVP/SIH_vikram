// src/SearchPage.js
import Header from "@/components/Header";
import CircularIndeterminate from "@/components/Loader";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import LawyerCard from "../components/LawyerCard";

export default function LawyerSearch() {
    // Assuming you have a list of available tags in an array called 'availableTags'
    const typeOfService = [
        "Lawyer",
        "Notary",
        "Paralegal",
        "Arbitrator",
        "Mediator",
    ];
    const specialization = [
        "Commercial",
        "Corporate",
        "Criminal",
        "Civil",
        "Litigation",
        "Family",
        "Accident",
        "Insurance",
        "Banking",
        "Claims",
        "Supreme Court",
        "High Court",
        "District Court",
        "Form",
        "Stampduty",
        "Dispute",
    ];

    const [selectedTypeOfService, setSelectedTypeOfService] = useState([]);
    const [selectedSpecialization, setSelectedSpecialization] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Function to handle Type of Service selection
    const handleTypeOfServiceChange = (_, newValue) => {
        setSelectedTypeOfService(newValue);
    };

    // Function to handle Specialization selection
    const handleSpecializationChange = (_, newValue) => {
        setSelectedSpecialization(newValue);
    };

    const [selectedSortOption, setSelectedSortOption] = useState("rating,desc");

    const handleSortChange = e => {
        setSelectedSortOption(e.target.value);
    };

    // Define the options for sorting
    const sortOptions = [
        { label: "Rating: High to Low", value: "rating,desc" },
        { label: "Rating: Low to High", value: "rating,asc" },
        { label: "Price: High to Low", value: "tier,desc" },
        { label: "Price: Low to High", value: "tier,asc" },
    ];

    const [lawyerData, setLawyerData] = useState([]); // Example data for LawyerCards

    const fetchLawyerData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/lawyer/all",
            );
            setLawyerData(response.data.data);
        } catch (error) {
            console.log(error);
        }
        setLoaded(true);
    };

    const loadDataFromLocalStorage = () => {

        const selectedTypeOfServiceTags = localStorage.getItem("selectedTypeOfService");
        const selectedSpecializationTags = localStorage.getItem("selectedSpecialization");
        if (selectedTypeOfServiceTags) {
            const typeOfService = JSON.parse(selectedTypeOfServiceTags);
            setSelectedTypeOfService(typeOfService);
            console.log("tos", typeOfService, selectedTypeOfService);
            localStorage.removeItem("selectedTypeOfService");
        }

        if (selectedSpecializationTags) {
            const specialization = JSON.parse(selectedSpecializationTags);
            setSelectedSpecialization(specialization);
            console.log("spec", specialization, selectedSpecialization);
            localStorage.removeItem("selectedSpecialization");
        }

        if (selectedTypeOfServiceTags || selectedSpecializationTags) return true;
        else return false;
    };

    const [shouldRunEffect, setShouldRunEffect] = useState(false);

    // Check your condition and update shouldRunEffect accordingly
    useEffect(() => {
        const conditionMet = loadDataFromLocalStorage();
        if (conditionMet) {
            // Set shouldRunEffect to true when the condition is met
            console.log("setting flag true");
            setShouldRunEffect(true);
        }
        else fetchLawyerData();
    }, []);

    useEffect(() => {

        if (shouldRunEffect) {
            console.log("spec", selectedSpecialization);
            console.log("tos", selectedTypeOfService);

            if (selectedTypeOfService.length > 0 || selectedSpecialization.length > 0) {
                console.log("calling search please");
                handleSearch();
            }
            setLoaded(true);
            setShouldRunEffect(false);
        }
    }, [shouldRunEffect]);



    const handleSearch = () => {
        console.log(selectedTypeOfService);
        console.log(selectedSpecialization);
        console.log("Sort Option:", selectedSortOption);
        // Ensure selectedSpecialization is an array
        const selectedSpecializationArray = Array.isArray(selectedSpecialization)
            ? selectedSpecialization
            : [selectedSpecialization];

        // Construct the API query URL
        const apiUrl = `http://localhost:5000/api/search?tos=${selectedTypeOfService}&spec=${selectedSpecializationArray.join(',')}&sort=${selectedSortOption}`;

        // Make the API request using axios.get
        axios
            .get(apiUrl)
            .then(response => {
                // Handle the API response here
                console.log("API Response:", response.data);
                setLawyerData(response.data.lawyers);
            })
            .catch(error => {
                // Handle any errors that occur during the API call
                console.error("API Error:", error);
            });
    };

    if (!loaded) {
        return <CircularIndeterminate />;
    }

    return (
        <>
            <Head>
                <title>Lawyers</title>
            </Head>
            <Header />
            <div className="min-h-screen bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl text-black text-center font-semibold mb-8">
                        Find a Lawyer
                    </h2>
                    <div className="flex items-center border-white pb-2 mb-4">
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={typeOfService}
                            getOptionLabel={option => option}
                            className="w-full p-0 border-none bg-transparent text-black placeholder-gray placeholder-opacity-50"
                            value={Array.isArray(selectedTypeOfService) ? selectedTypeOfService : []}
                            onChange={handleTypeOfServiceChange}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Find a Legal Service Provider for all your Needs!"
                                    placeholder="Begin Typing or Use the Dropdown to Select"
                                />
                            )}
                        />

                        {selectedTypeOfService.length > 0 && (
                            <Autocomplete
                                multiple
                                id="specialization-tags-outlined"
                                options={specialization}
                                getOptionLabel={option => option}
                                className="w-full p-0 border-none bg-transparent text-black placeholder-gray placeholder-opacity-50 bg-red-100"
                                value={Array.isArray(selectedSpecialization) ? selectedSpecialization : []}
                                onChange={handleSpecializationChange}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Select Specialization"
                                        placeholder="Begin Typing or Use the Dropdown to Select"
                                    />
                                )}
                            />

                        )}
                        <div className="ml-auto flex space-x-2">
                            {/* Sorting Dropdown */}
                            <select
                                className="bg-white text-blue-500 px-3 py-1 rounded-md hover:bg-blue-100"
                                value={selectedSortOption}
                                onChange={handleSortChange}>
                                {sortOptions.map(option => (
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            className="ml-2 bg-white text-blue-500 px-4 py-2 mr-2 rounded-md hover:bg-blue-100"
                            onClick={handleSearch}>
                            Search
                        </button>
                    </div>

                    {/* Lawyer Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lawyerData.map(lawyer => (
                            <LawyerCard
                                key={lawyer._id} // Use a unique identifier from your data as the key
                                lawyer={lawyer} // Pass the lawyer data as a prop
                                renderButton={true}
                            />
                        ))}
                    </div>

                    {/* Pagination (You can replace this with a pagination library) */}
                    <div className="flex justify-center mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                            Previous
                        </button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
