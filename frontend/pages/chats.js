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
            <div className="flex gap-4 justify-center bg-white text-black">
                <Userlist users={users} />
                <div className="p-4 border-2 border-black">
                    <MessageList
                        className="message-list h-72"
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
                                    className="text-black hover:text-white">
                                    Send
                                </Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chats;
