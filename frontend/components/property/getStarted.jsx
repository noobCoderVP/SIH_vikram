import React from 'react';

export default function GetStarted() {
  return (
    <div className="block justify-center items-center h-screen">
      <img
        src="/property.jpg" // Replace with the correct path to your image
        alt="Property"
        className="max-w-full h-auto"
        style={{ maxWidth: '90%', height: 'auto' }}
      />
    </div>
  );
}
