// src/SearchPage.js
import React, { useState , useEffect} from "react";
import LawyerCard from "../components/LawyerCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Head from "next/head";
import axios from 'axios';

export default function LawyerSearch() {
    // Assuming you have a list of available tags in an array called 'availableTags'
    const typeOfService = ["Lawyer", "Notary", "Paralegal", "Arbitrator", "Mediator"];
    const specialization = [
        "Commercial", "Corporate", "Criminal", "Civil", "Litigation", "Family", "Accident", "Insurance", "Banking", "Claims", "Supreme Court", "High Court", "District Court",
        "Form", "Stampduty", "Dispute"
    ];


    const [selectedTypeOfService, setSelectedTypeOfService] = useState([]);
    const [selectedSpecialization, setSelectedSpecialization] = useState([]);

    // Function to handle Type of Service selection
    const handleTypeOfServiceChange = (_, newValue) => {
        setSelectedTypeOfService(newValue);
    };

    // Function to handle Specialization selection
    const handleSpecializationChange = (_, newValue) => {
        setSelectedSpecialization(newValue);
    };

    const [selectedSortOption, setSelectedSortOption] = useState("rating,desc");

    const handleSortChange = (e) => {
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
    useEffect(() => {
        // Make the initial API request with no query parameters
        const apiUrl = 'http://localhost:5000/api/search';
    
        axios
          .get(apiUrl)
          .then((response) => {
            // Handle the API response here
            console.log('API Response:', response.data);
            setLawyerData(response.data.lawyers);
          })
          .catch((error) => {
            // Handle any errors that occur during the API call
            console.error('API Error:', error);
          });
      }, []); // Empty dependency array means this effect runs once when the component mounts
    const handleSearch = () => {

        console.log(selectedTypeOfService);
        console.log(selectedSpecialization);
        console.log("Sort Option:", selectedSortOption);
        // Construct the API query URL
        const apiUrl = `http://localhost:5000/api/search?tos=${selectedTypeOfService}&spec=${selectedSpecialization.join(',')}&sort=${selectedSortOption}`;

        // Make the API request using axios.get
        axios.get(apiUrl)
            .then((response) => {
                // Handle the API response here
                console.log('API Response:', response.data);
                setLawyerData(response.data.lawyers);
            })
            .catch((error) => {
                // Handle any errors that occur during the API call
                console.error('API Error:', error);
            });
        // In a real application, you would fetch lawyer data based on the search query.
        // For this example, let's use mock data.
        const mockLawyerData = [
            {
                id: 1,
                name: "Lawyer 1",
                description: "Description for Lawyer 1",
                imageUrl: "/face.jpg",
            },
            {
                id: 2,
                name: "Lawyer 2",
                description: "Description for Lawyer 2",
                imageUrl: "/face.jpg",
            },
            {
                id: 3,
                name: "Lawyer 3",
                description: "Description for Lawyer 3",
                imageUrl: "/face.jpg",
            },
            // Add more lawyer data as needed
        ];

        // setLawyerData(mockLawyerData);
    };

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
                            getOptionLabel={(option) => option}
                            className="w-full p-0 border-none bg-transparent text-black placeholder-gray placeholder-opacity-50"
                            value={selectedTypeOfService}
                            onChange={handleTypeOfServiceChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    label="Find a Legal Service Provider for all your Needs !"
                                    placeholder="Begin Typing or Use the Dropdown to Select"
                                />
                            )}
                        />
                        {selectedTypeOfService.length > 0 && (
                            <Autocomplete
                                multiple
                                id="specialization-tags-outlined"
                                options={specialization}
                                getOptionLabel={(option) => option}
                                className="w-full p-0 border-none bg-transparent text-black placeholder-gray placeholder-opacity-50 bg-red-100"
                                value={selectedSpecialization}
                                onChange={handleSpecializationChange}
                                renderInput={(params) => (
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
                                onChange={handleSortChange}
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
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
                        {lawyerData.map((lawyer) => (
                            <LawyerCard
                                key={lawyer._id} // Use a unique identifier from your data as the key
                                lawyer={lawyer} // Pass the lawyer data as a prop
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
