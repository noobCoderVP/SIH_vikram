import React, { useState } from "react";
import Userlist from "@/components/Userlist";
import Header from "@/components/Header";
import { MessageList, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Button } from "@mui/material";

function Chats() {
    const users = [
        { name: "Vaibhav", message: "Hello" },
        { name: "Sarrah", message: "How are you?" },
        { name: "Sarrah", message: "How are you?" },
        { name: "Sarrah", message: "How are you?" },
        { name: "Sarrah", message: "How are you?" },
    ];
    const [messages, setMessages] = useState([
        {
            position: "right",
            type: "text",
            text: "Can you help me out with my case?",
            date: new Date(2023, 8, 18, 22, 13, 30),
        },
        {
            position: "left",
            type: "text",
            text: "Yes sure, what is your case related to?",
            date: new Date(2023, 8, 19, 22, 13, 30),
        },
    ]);
    const [inputText, setInputText] = useState("");
    return (
        <>
            <Header />
            <div className="flex justify-center bg-white text-black">
                <div className="w-10/12 lg:w-9/12 xl:w-8/12">
                    <div className="grid grid-cols-12 gap-4">
                        {/* UserList (4 columns) */}
                        <div className="col-span-4 bg-gray-200 ">
                            <div className="bg-gray-100">
                               <h1 className="font-semibold text-2xl ml-2">Chats</h1> 
                                <div className="bg-black h-0.5"></div>
                            </div>
                            {/* UserList content */}
                            <Userlist users={users} />
                        </div>

                        {/* MessageList (8 columns) */}
                        <div className="col-span-8 bg-gray-300 p-4">
                            {/* MessageList content */}
                            <MessageList
                                className="message-list h-96 max-h-screen overflow-y-scroll"
                                lockable={true}
                                toBottomHeight={"100%"}
                                dataSource={messages}
                            />
                            <div className="mt-1 flex">
                                <Input
                                    placeholder="Type your message..."
                                    className="border-solid border-gray-300 rounded-lg p-2"
                                    multiline={false}
                                    value={inputText}
                                    onChange={e => setInputText(e.target.value)}
                                    rightButtons={
                                        <Button
                                            variant="contained"
                                            className="text-white bg-slate-800 hover:text-white">
                                            Send
                                        </Button>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chats;
