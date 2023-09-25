import React, { useState, useEffect } from "react";
import Userlist from "@/components/Userlist";
import Header from "@/components/Header";
import { MessageList, Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import { Button } from "@mui/material";
import CircularIndeterminate from "@/components/Loader";
import axios from "axios";
import { message } from "antd";

function Chats() {
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(null);
    const [users, setUsers] = useState([]);

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
    const [messageHash, setMessageHash] = useState({});

    const fetchMessages = async username => {
        const response = await axios.get(
            `http://localhost:5000/chat/lawyer/${username}`,
        );
        const chats = response.data.chats;
        const hash = {};
        for (let i of chats) {
            const rec = i.sender == username ? i.receiver : i.sender;
            if (hash[rec]) {
                hash[rec].push(i);
            } else {
                hash[rec] = [i];
            }
        }
        let users = Object.keys(hash);
        users.sort();
        users = users.map(user => {
            return {
                name: user,
                message: hash[user][hash[user].length - 1].text,
                time: hash[user][hash[user].length - 1].createdAt,
            };
        });
        setUsers(users);
        setMessageHash(hash);
        setLoaded(true);
    };

    const handleSendMessage = async () => {
        let username = localStorage.getItem("username");
        // socket.emit("CHAT_MESSAGE", { username, message: inputText });
        if (inputText.trim() !== "") {
            try {
                const response = await axios.post(
                    "http://localhost:5000/chat/",
                    { sender: username, receiver: active, text: inputText },
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

    useEffect(() => {
        let username = localStorage.getItem("username");
        let messages = messageHash[active];
        if (messages) {
            messages.sort(function (a, b) {
                return a.createdAt < b.createdAt;
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
        } else {
            setMessages([]);
        }
    }, [active]);

    useEffect(() => {
        fetchMessages(localStorage.getItem("username"));
    }, []);

    if (!loaded) return <CircularIndeterminate />;
    return (
        <>
            <Header />
            <div className="flex justify-center bg-white text-black">
                <div className="w-10/12 lg:w-9/12 xl:w-8/12">
                    <div className="grid grid-cols-12 gap-4">
                        {/* UserList (4 columns) */}
                        <div className="col-span-4 bg-gray-200 ">
                            <div className="bg-gray-100">
                                <h1 className="font-semibold text-2xl ml-2">
                                    Chats
                                </h1>
                                <div className="bg-black h-0.5"></div>
                            </div>
                            {/* UserList content */}
                            <Userlist
                                users={users}
                                setActive={setActive}
                                active={active}
                            />
                        </div>

                        {/* MessageList (8 columns) */}
                        {active ? (
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
                                        onChange={e =>
                                            setInputText(e.target.value)
                                        }
                                        rightButtons={
                                            <Button
                                                variant="contained"
                                                className="text-white bg-slate-800 hover:text-white"
                                                onClick={handleSendMessage}>
                                                Send
                                            </Button>
                                        }
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className=""></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chats;
