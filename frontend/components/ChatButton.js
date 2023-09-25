import React from "react";
import { useState, useEffect } from "react";
import Chatbox from "./Chatbox";
const ChatButton = props => {
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
                    lawyer={props.username}
                    style={{ zIndex: "5", position: "absolute", left: "0px" }}
                    io={props.io}
                    onClose={closeChatbox}
                />
            )}
        </div>
    );
};

export default ChatButton;
