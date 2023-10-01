// Chatbox.js
import React, { useState, useEffect } from "react";
import { MessageList, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Button } from "@mui/material";
import { message } from "antd";
import axios from "axios";

const Chatbox = ({ onClose, io, lawyer }) => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("");
    const [socket, setSocket] = useState(null);
    const [username, setUsername] = useState("unknown");

    const fetchMessages = async username => {
        const response1 = await axios.get(
            `http://localhost:5000/chat/user?sender=${username}&receiver=${lawyer}`,
        );
        const response2 = await axios.get(
            `http://localhost:5000/chat/user?sender=${lawyer}&receiver=${username}`,
        );
        let messages = [...response1.data.chats, ...response2.data.chats];
        messages.sort(function (a, b) {
            return a.createdAt > b.createdAt;
        });
        messages = messages.map(message => {
            if (message.sender == username)
                return {
                    position: "right",
                    type: "text",
                    text: message.text,
                    date: message.createdAt,
                };
            else
                return {
                    position: "left",
                    type: "text",
                    text: message.text,
                    date: message.createdAt,
                };
        });
        setMessages(messages);
    };

    useEffect(() => {
        let user = localStorage.getItem("username");
        setUsername(user);
        const socket = io("http://localhost:5000");
        fetchMessages(user);

        socket.on("CHAT_MESSAGE", msg => {
            const newMessage = {
                position: "left",
                type: "text",
                text: msg.message,
                date: new Date(),
            };
            setMessages([...messages, newMessage]);
        });

        setSocket(socket);
        // Socket.IO event listeners and other socket logic can be added here.

        return () => {
            // Disconnect the socket when the component unmounts.
            socket.disconnect();
        };
    }, []);

    const handleSendMessage = async () => {
        socket.emit("CHAT_MESSAGE", { username, message: inputText });
        if (inputText.trim() !== "") {
            try {
                const response = await axios.post(
                    "http://localhost:5000/chat/",
                    { sender: username, receiver: lawyer, text: inputText },
                );
                const newMessage = {
                    position: "right",
                    type: "text",
                    text: inputText,
                    date: new Date(),
                };
                setMessages([...messages, newMessage]);
                setInputText("");
            } catch (error) {
                message.error("Cannot send message!");
                console.log(error);
            }
        }
    };

    return (
        <div className="fixed bottom-0 left-0 mb-4 mr-4 max-w-xs w-full sm:max-w-md">
            <div className="bg-white rounded-lg shadow-lg">
                <div className="bg-gray-800 text-white py-2 px-4 rounded-t-lg">
                    <div className="grid grid-cols-4">
                        <h2 className="col-span-3 text-xl font-semibold">
                            Chat with {lawyer}
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
