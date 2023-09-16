// components/Chatbot.js
import React, { useEffect } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  useEffect(() => {
    // Add your JavaScript code here
    const btn = document.getElementById("btn");

    btn.addEventListener('click', getResponse);

    async function getResponse() {
      var inputText = document.getElementById("input").value;
      const parentDiv = document.getElementById("chat-area");

      if (inputText === '') {
        return;
      }

      const question = document.createElement('div');
      question.innerHTML = inputText;
      question.classList.add("box");
      parentDiv.appendChild(question);

      document.getElementById("input").value = '';

      let res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({
          question: inputText
        })
      });

      const data = await res.json();
      if (data.message) {
        const answer = document.createElement('div');
        answer.innerHTML = data.message;
        answer.classList.add("box", "answer");
        parentDiv.appendChild(answer);
      }
    }
  }, []); // Empty dependency array to run this code once on component mount

  return (
    // <div>
    //   {/* Add the HTML code here */}
    // </div>
    <>
        <div id="chat-area">

        </div>

        <div className="submit-form">
            <div className="input">
                <textarea name="input" id="input" cols="40" rows="3"></textarea>
                <button id="btn">Submit</button>
            </div>    
        </div>
    </>  
  );
};

export default Chatbot;
