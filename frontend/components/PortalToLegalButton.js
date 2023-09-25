// // LetterByLetterCard.js
// import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useEffect, useState } from "react";


function parseTags(responseText) {
    const regex = /\$tos\$([^$]*)\$spec\$([^$]*)?\$end\$/;
    const match = responseText.match(regex);
    if (match) {
        const typeOfService = match[1].trim().split(',');
        const specialization = match[2] ? match[2].trim().split(',') : [];
        return { typeOfService, specialization };
    }
    return { typeOfService: [], specialization: [] };
}


function PortalToLegalButton({ text }) {
    const [selectedTags, setSelectedTags] = useState({ typeOfService: [], specialization: [] });

    function handleClick() {

        // Parse the tags and set selectedTags
        const tags = parseTags(text);
         // takes you to the lawyer page
        // window.location.href = "http://localhost:3000/lawyers";
        const newWindow = window.open('http://localhost:3000/lawyers', '_self');
    
        // Send data to the new window using postMessage
        newWindow.postMessage(tags.typeOfService, '*');
    };
    return (
        <div className="w-full mx-auto py-4 px-8 flex items-center bg-white rounded-lg shadow-lg">
            <button
                onClick={handleClick}
                className="bg-blue-700 rounded-lg font-semibold p-2 mt-2 mx-auto">
                Go To Suggested Legal Services
            </button>
        </div>
    );
}

export default PortalToLegalButton;
