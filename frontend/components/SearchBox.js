import React from 'react';

const SearchBox = ({ updateSearched }) => {

    const handleClick = () => {
        // Perform an operation in the child component
        // Then, call the updateParentState function with the new value
        updateSearched(true); // Change parentState to true
      };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
                    Find the Perfect Lawyer
                </h1>
                <p className="text-white text-lg md:text-xl lg:text-2xl mb-6">
                    Get legal advice and representation tailored to your needs.
                </p>
                <div className="max-w-xl mx-auto">
                    <form>
                        <label id="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative flex">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <textarea type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 
                            border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Describe your problem and our AI will take care of the rest" rows="4" required />

                            <button onClick={handleClick} type="submit" class="right-2.5 text-white 
                            bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                            font-medium rounded-lg text-sm px-4 py-2 ml-2 mb-auto mt-auto dark:bg-slate-600 dark:hover:bg-blue-700 
                            dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SearchBox;