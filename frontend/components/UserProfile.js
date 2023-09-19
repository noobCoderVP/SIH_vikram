// ProfilePage.js
import React from 'react';
import {ChatList} from 'react-chat-elements';
import { ChatItem } from 'react-chat-elements';

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

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
          {/* Placeholder profile picture */}
          <img
            src="/placeholder-profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-semibold">{userData.name}</h1>
          <p className="text-gray-500">{userData.email}</p>
          <p className="text-gray-500">{userData.phoneNumber}</p>
        </div>
      </div>

      {/* Chat Section - You can integrate your chat component here */}
      <ChatList
      className="chat-list bg-gray-100 p-4 rounded-lg border border-gray-300 shadow-md"
      dataSource={[
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

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Active Cases</h2>
        <ul>
          {activeCases.map((caseItem) => (
            <li key={caseItem.caseId} className="mb-2">
              <p className="text-lg font-semibold">{caseItem.caseName}</p>
              <p className="text-gray-500">{caseItem.caseStatus}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
