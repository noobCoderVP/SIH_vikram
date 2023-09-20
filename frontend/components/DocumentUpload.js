import React, { useState } from 'react';

function DocumentUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle the file upload here (e.g., send it to the server).
      console.log('Uploading file:', selectedFile.name);
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
