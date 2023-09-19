// LetterByLetterCard.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import chatbot from "../public/chatbot.jpg";

function LetterByLetterCard({ text }) {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayText(prevText => prevText + text.charAt(index));
                setIndex(index + 1);
            }
        }, 10); // Adjust the delay (in milliseconds) between letters

        return () => {
            clearInterval(timer);
        };
    }, [text, index]);

    return (
        <div className="w-full mx-auto py-4 px-8 flex items-center bg-white rounded-lg shadow-lg">
            <Image src={chatbot} width={60} height={60}></Image>
            <p className="text-md text-black">{displayText}</p>
        </div>
    );
}

export default LetterByLetterCard;
