import React from 'react';

function IncentiveProgress({ goal, requirements, progress }) {
  // Calculate the progress percentage
  const progressPercentage = (parseInt(progress));

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-black text-2xl font-semibold mb-2">Next Incentive</h2>
      <p className="text-gray-600 font-semibold mb-2">Requirement: {requirements}</p>
      <div className="relative">
        <div className="flex flex-col">
          <div className="relative">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                  {goal}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-teal-500 text-xs leading-none py-1 text-center text-white rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                >
                  {progressPercentage.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncentiveProgress;
