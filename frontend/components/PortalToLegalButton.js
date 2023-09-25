// // LetterByLetterCard.js
// import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useEffect, useState } from "react";
function handleClick(){
    const data = ["Lawyer"]

    // takes you to the lawyer page
    // window.location.href = "http://localhost:3000/lawyers";
    const newWindow = window.open('http://localhost:3000/lawyers', '_self');

    // Send data to the new window using postMessage
    newWindow.postMessage(data, '*');
}
function PortalToLegalButton({ text }) {
    return (
        <div className="w-full mx-auto py-4 px-8 flex items-center bg-white rounded-lg shadow-lg">
            <button
            onClick={handleClick} 
            className="bg-blue-700 rounded-lg font-semibold p-2 mt-2 mx-auto"> 
            Go To Legal Services 
            </button>
        </div>
    );
}

export default PortalToLegalButton;
