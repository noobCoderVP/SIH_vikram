// ProfilePage.js
import React from 'react';
import { ChatList } from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements';
import Header from './Header';
import IncentivesSection from './IncentivesSection';
import DocumentUpload from './DocumentUpload';

function UserProfile() {
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
        <div className="h-0.5 mb-2 bg-black"/>
        {/* Chat Section - You can integrate your chat component here */}
        <div className="grid grid-cols-7">

          <div className="col-span-4 m-4">
            <div className="mt-auto text-black">
              <h2 className="text-3xl font-semibold mb-4">Verify Yourself</h2>
              <div className="flex flex-row mb-4">
              <DocumentUpload />
              <p className="text-lg ml-4 my-auto"> Aadhar Verification </p>
              </div>
              <div className="flex flex-row">
              <DocumentUpload />
              <p className="text-lg ml-4 my-auto"> Degree Verification </p>
              </div>
            </div>
            <IncentivesSection />
          </div>

          <div className="col-span-3">
            <div className="flex flex-row bg-blue-500 rounded-lg p-2 shadow-lg">
            <p className="text-white font-semibold my-auto text-lg"> Check Your Cases: </p>
            <button
              onClick={handleSubmit}
              type="submit"
              class="text-white
                            bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                            font-medium rounded-lg text-sm px-4 py-2 ml-2 mb-auto mt-auto dark:bg-slate-600 dark:hover:bg-blue-700 
                            dark:focus:ring-blue-800">
              Cases
            </button>
            </div>
            <p className="text-black text-center font-semibold text-lg"> Chat </p>
            <ChatList
              className="chat-list bg-gray-100 p-4 text-black rounded-lg border border-gray-300 shadow-md"
              dataSource={[
                {
                  avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
                  alt: "kursat_avatar",
                  title: "Kursat",
                  subtitle: "Hi, how are you ?",
                  date: new Date(),
                  unread: 0,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
                  alt: "kursat_avatar",
                  title: "Kursat",
                  subtitle: "Hi, how are you ?",
                  date: new Date(),
                  unread: 0,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
                  alt: "kursat_avatar",
                  title: "Kursat",
                  subtitle: "Hi, how are you ?",
                  date: new Date(),
                  unread: 0,
                },
                {
                  avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
                  alt: "kursat_avatar",
                  title: "Kursat",
                  subtitle: "Hi, how are you ?",
                  date: new Date(),
                  unread: 0,
                },
              ]}
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
