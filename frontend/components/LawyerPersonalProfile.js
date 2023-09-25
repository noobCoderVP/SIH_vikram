// ProfilePage.js
import React from 'react';
import { ChatList } from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements';
import Header from './Header';
import IncentivesSection from './IncentivesSection';
import DocumentUpload from './DocumentUpload';
import VerificationComponent from './VerificationComponent';
import IncentiveProgress from './IncentiveProgress';
import CaseTable from './CaseTable';
import Link from 'next/link';
import PurchaseHistory from './PurchaseHistory';
function LawyerPersonalProfile() {
  // Placeholder user data
  const userData = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'johndoe@example.com',
  };

  // Placeholder active cases data
  const activeCases = [
    {
      caseId: 1,
      caseName: 'Personal Injury Case',
      caseStatus: 'In Progress',
    },
    {
      caseId: 2,
      caseName: 'Divorce Case',
      caseStatus: 'Pending',
    },
    // Add more active cases as needed
  ];

  const handleSubmit = () => {
    return null;
  }

  return (
    <>
      <Header />
      <div className="py-4 bg-gray-100">
        <div className="flex py-2 items-center mb-4 bg-gradient-to-r from-red-950 to-blue-950 rounded-lg shadow-lg">
          {/* <br classname="border-solid border-black"/> */}
          <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden">
            {/* Placeholder profile picture */}
            <img
              src="/placeholder-profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4 " >
            <h1 className="text-4xl text-white font-semibold">{userData.name}</h1>
            <p className="text-gray-500 text-lg">{userData.email}</p>
            <p className="text-gray-500 text-lg">{userData.phoneNumber}</p>
          </div>
        </div>
        <div className="h-0.5 mb-2 bg-black" />
        {/* Chat Section - You can integrate your chat component here */}
        <div className="grid grid-cols-7">

          <div className="col-span-4 m-4">
            <div className="mt-auto text-black">

              <h2 className="text-3xl font-semibold mb-2">Verify Yourself</h2>
              <VerificationComponent itemToBeVerified={"Aadhar Card"} />
              <VerificationComponent itemToBeVerified={"Law Degree"} />

            </div>
            <IncentivesSection />
            <IncentiveProgress goal="Receive 5% more recommendations" requirements="Have 10 solved cases with more than a 4 star rating" progress="50" />
          </div>

          <div className="col-span-3">
            <div className='flex flex-row bg-blue-700 rounded-lg shadow-lg p-2'>
              <Link href="/chats" className="text-white text-xl text-center font-semibold"> Go To Chats </Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
              <path d="M 40.960938 4.9804688 A 2.0002 2.0002 0 0 0 40.740234 5 L 28 5 A 2.0002 2.0002 0 1 0 28 9 L 36.171875 9 L 22.585938 22.585938 A 2.0002 2.0002 0 1 0 25.414062 25.414062 L 39 11.828125 L 39 20 A 2.0002 2.0002 0 1 0 43 20 L 43 7.2460938 A 2.0002 2.0002 0 0 0 40.960938 4.9804688 z M 12.5 8 C 8.3826878 8 5 11.382688 5 15.5 L 5 35.5 C 5 39.617312 8.3826878 43 12.5 43 L 32.5 43 C 36.617312 43 40 39.617312 40 35.5 L 40 26 A 2.0002 2.0002 0 1 0 36 26 L 36 35.5 C 36 37.446688 34.446688 39 32.5 39 L 12.5 39 C 10.553312 39 9 37.446688 9 35.5 L 9 15.5 C 9 13.553312 10.553312 12 12.5 12 L 22 12 A 2.0002 2.0002 0 1 0 22 8 L 12.5 8 z"></path>
              </svg>
            </div>


            <CaseTable />

            <PurchaseHistory />

          </div>
        </div>
      </div>
    </>
  );
}

export default LawyerPersonalProfile;
