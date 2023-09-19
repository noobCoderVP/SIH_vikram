// src/SearchPage.js
import React, { useState } from 'react';
import LawyerCard from '../components/LawyerCard';

export default function AIResults(searchQueryProps = '') {
    const [searchQuery, setSearchQuery] = useState('');
    if (Object.keys(searchQueryProps).length != 0) {
        setSearchQuery(searchQueryProps);
    }   
    const [lawyerData, setLawyerData] = useState([]); // Example data for LawyerCards

    const handleSearch = () => {
        // In a real application, you would fetch lawyer data based on the search query.
        // For this example, let's use mock data.
        const mockLawyerData = [
            { id: 1, name: 'Lawyer 1', description: 'Description for Lawyer 1', imageUrl: '/face.jpg' },
            { id: 2, name: 'Lawyer 2', description: 'Description for Lawyer 2', imageUrl: '/face.jpg' },
            { id: 3, name: 'Lawyer 3', description: 'Description for Lawyer 3', imageUrl: '/face.jpg' },
            // Add more lawyer data as needed
        ];

        setLawyerData(mockLawyerData);
    };
    return (
        <>
            <div className="col-span-4 mb-4 mr-4 ml-4 p-6 bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-black text-xl font-semibold">Results</h2>
                    <div className="flex items-center border-b border-white pb-2 mb-4">
                        <input
                            type="text"
                            className="w-full px-2 py-1 outline-none bg-transparent text-black placeholder-gray placeholder-opacity-50"
                            placeholder="Enter your search query"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            className="ml-2 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>

                    {/* Lawyer Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lawyerData.map((lawyer) => (
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
};

