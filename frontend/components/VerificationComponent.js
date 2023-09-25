import React from 'react';

function VerificationComponent({ itemToBeVerified, handlerFunction }) {
  let verified = true;
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
          onChange={handlerFunction}
          />
        <button className="ml-2 bg-blue-500 text-white px-2 rounded-lg hover:bg-blue-600">
          Upload Document
        </button>
        </div>
      }
      
        </div>
    </div>
  );
}

export default VerificationComponent;
