import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "antd";

function DocumentUpload() {
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
    <div>
      <input
        type="file"
        accept=".pdf, .jpg, .jpeg"
        onChange={handleFileChange}
      />
      <button className="text-white 
                            bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                            font-medium rounded-lg text-sm px-4 py-2 ml-2 mb-auto mt-auto dark:bg-slate-600 dark:hover:bg-blue-700 
                            dark:focus:ring-blue-800"
        onClick={handleUpload}>
        Upload</button>

      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
}

export default DocumentUpload;
