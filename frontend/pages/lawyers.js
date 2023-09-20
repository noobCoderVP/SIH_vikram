// src/SearchPage.js
import React, { useState } from "react";
import LawyerCard from "../components/LawyerCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Head from "next/head";

export default function LawyerSearch() {
    const [searchQuery, setSearchQuery] = useState("");

    const [lawyerData, setLawyerData] = useState([]); // Example data for LawyerCards

    const handleSearch = () => {
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

        setLawyerData(mockLawyerData);
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
                            freeSolo
                            type="text"
                            options={lawyerData}
                            className="w-full p-0 border-none bg-transparent text-black placeholder-gray placeholder-opacity-50"
                            placeholder="Enter your search query"
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    label="Enter your search query"
                                />
                            )}
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="ml-2 bg-white text-blue-500 px-4 py-2 mr-2 rounded-md hover:bg-blue-100"
                            onClick={handleSearch}>
                            Search
                        </button>

                        <div className="ml-auto flex space-x-2">
                            {/* Rating Dropdown */}
                            <select
                                className="bg-white text-blue-500 px-3 py-1 rounded-md hover:bg-blue-100"
                                onChange={e =>
                                    handleSort("rating", e.target.value)
                                }>
                                <option value="high-to-low">
                                    Rating: High to Low
                                </option>
                                <option value="low-to-high">
                                    Rating: Low to High
                                </option>
                            </select>

                            {/* Price Dropdown */}
                            <select
                                className="bg-white text-blue-500 px-3 py-1 rounded-md hover:bg-blue-100"
                                onChange={e =>
                                    handleSort("price", e.target.value)
                                }>
                                <option value="high-to-low">
                                    Price: High to Low
                                </option>
                                <option value="low-to-high">
                                    Price: Low to High
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Lawyer Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lawyerData.map(lawyer => (
                            <LawyerCard key={lawyer.id} {...lawyer} />
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
