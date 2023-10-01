import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "antd";

function VerificationComponent({ itemToBeVerified, handlerFunction }) {
  const [verified, setVerified] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Create a FormData object to send the file
      const formData = new FormData();
      formData.append('aadharImage', selectedFile);

      // Make a POST request to your API endpoint
      axios.post('http://localhost:5000/api/verify', formData)
        .then((response) => {
          // Handle the response from the server here
          console.log('Server Response:', response.data);
          alert(response.data.message);
          setVerified(true);
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error:', error);
          alert(error);
        });

      // Reset the selected file
      setSelectedFile(null);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 mb-2">
      <div className="flex flex-row">
      
      <p className="my-auto text-xl font-semibold">{itemToBeVerified + ": "}</p>

      {
        verified ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="w-8 h-8 ml-2 text-green-500">
        <path fill-rule="evenodd" d="M8.293 13.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7z"/>
    </svg> : <div>
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg"
          className="py-2 px-4 ml-2 border rounded"
          onChange={handleFileChange}
          />
        <button 
        onClick={handleUpload}
        className="ml-2 bg-blue-500 text-white px-2 rounded-lg hover:bg-blue-600">
          Upload Document
        </button>
        </div>
      }
      
        </div>
    </div>
  );
}

export default VerificationComponent;
