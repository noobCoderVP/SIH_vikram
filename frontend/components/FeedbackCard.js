// FeedbackCard.js
import React from "react";

const FeedbackCard = ({ name, rating, review, imageUrl }) => {
    // Helper function to create star icons
    const renderStars = () => {
        const starIcons = [];
        for (let i = 0; i < 5; i++) {
            starIcons.push(
                <span
                    key={i}
                    className={`text-2xl ${
                        i < rating ? "text-yellow-500" : "text-gray-300"
                    }`}>
                    ★
                </span>,
            );
        }
        return starIcons;
    };

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="flex items-center mb-2">
                    <div className="flex space-x-1">{renderStars()}</div>
                    <span className="ml-2 text-gray-600">{rating}/5</span>
                </div>
                <p className="text-xl font-semibold mb-2">{name}</p>
                <p className="text-gray-600">{review}</p>
            </div>
        </div>
    );
};

export default FeedbackCard;
