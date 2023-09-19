// Chatbox.js
import React, { useState } from "react";
import { MessageList, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Button } from "@mui/material";

const Chatbox = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");

    const handleSendMessage = () => {
        if (inputText.trim() !== "") {
            const newMessage = {
                position: "right",
                type: "text",
                text: inputText,
                date: new Date(),
            };

            setMessages([...messages, newMessage]);
            setInputText("");
        }
    };

    return (
        <div className="fixed bottom-0 left-0 mb-4 mr-4 max-w-xs w-full sm:max-w-md">
            <div className="bg-white rounded-lg shadow-lg">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-t-lg">
                    <div className="grid grid-cols-4">
                        <h2 className="col-span-3 text-xl font-semibold">
                            Chat with Lawyer
                        </h2>
                        <div className="justify-self-end">
                            <button
                                className="justify-self-end close-button"
                                onClick={onClose}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <MessageList
                        className="message-list h-48"
                        lockable={true}
                        toBottomHeight={"100%"}
                        dataSource={messages}
                    />
                    <div className="mt-1 flex">
                        <Input
                            placeholder="Type your message..."
                            className="border-solid border-gray-300 rounded-lg py-2"
                            multiline={false}
                            value={inputText}
                            onChange={e => setInputText(e.target.value)}
                            rightButtons={
                                <Button
                                    variant="contained"
                                    className="text-black hover:text-white"
                                    onClick={handleSendMessage}>
                                    Send
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;
