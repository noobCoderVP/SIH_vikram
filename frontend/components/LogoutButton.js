import React, { useEffect } from "react";

const LogoutButton = () => {
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-full transition duration-300">
                Log Out
            </div>
        </div>
    );
};

export default LogoutButton;
