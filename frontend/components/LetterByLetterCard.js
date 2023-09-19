// LetterByLetterCard.js
import React, { useEffect, useState } from 'react';

function LetterByLetterCard({ text }) {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex(index + 1);
      }
    }, 5); // Adjust the delay (in milliseconds) between letters

    return () => {
      clearInterval(timer);
    };
  }, [text, index]);

  return (
    <div className="col-span-2 mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-black">Our AI's Response</h2>
      <p className="text-md text-black">{displayText}</p>
    </div>
  );
}

export default LetterByLetterCard;
