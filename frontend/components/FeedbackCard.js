// FeedbackCard.js
import React from 'react';

const FeedbackCard = ({ name, rating, review, imageUrl }) => {
  // Helper function to create star icons
  const renderStars = () => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      starIcons.push(
        <span
          key={i}
          className={`text-2xl ${
            i < rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return starIcons;
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <div className="rounded-full overflow-hidden border-4 border-white absolute -top-8 left-2/4 transform -translate-x-2/4 w-24 h-24">
          <img
            src={imageUrl}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
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
