import React from "react";
import { useState } from "react";
import Chatbox from "./Chatbox";
const ChatButton = () => {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);

    const openChatbox = () => {
        setIsChatboxOpen(true);
    };

    const closeChatbox = () => {
        setIsChatboxOpen(false);
    };
    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                onClick={openChatbox}>
                Initiate Chat
            </button>
            {isChatboxOpen && (
                <Chatbox
                    style={{ zIndex: "5", position: "absolute", left: "0px" }}
                    onClose={closeChatbox}
                />
            )}
        </div>
    );
};

export default ChatButton;
