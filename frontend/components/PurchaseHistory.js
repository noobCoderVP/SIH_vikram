import React from 'react';

function PurchaseHistory({ desc }) {
  console.log(desc)
  return (
    <div className="bg-white mt-4 text-black rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Purchase History</h2>
      
      {/* Product/Consultation items */}
      <div className="space-y-4">
        {/* Individual purchased item */}
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-lg font-semibold">Consultation</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          </div>
          <span className="text-green-500 font-semibold">₹3000.0</span>
        </div>
        
        {/* Repeat the above structure for each purchased item */}
        
        {/* Example item 2
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
          
        </div>
        
        
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
   
        </div> */}
      </div>
    </div>
  );
}

export default PurchaseHistory;
