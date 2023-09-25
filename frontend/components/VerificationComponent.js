import React from 'react';

function VerificationComponent({ itemToBeVerified, handlerFunction }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 mb-2">
      <div className="flex flex-row">

      <p className="my-auto text-xl font-semibold">{itemToBeVerified + ": "}</p>
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
    </div>
  );
}

export default VerificationComponent;
