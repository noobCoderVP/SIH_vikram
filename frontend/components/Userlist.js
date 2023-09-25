import React from "react";
import { ChatList } from "react-chat-elements";

function Userlist({ users, setActive, active }) {
    return (
        <div
            className="text-black border-gray-300 shadow-md"
            style={{ minHeight: "300px" }}>
            {users.map(user => (
                <div>
                    <ChatList
                        className={
                            "chat-list " +
                            (active == user.name ? "bg-slate-500" : "")
                        }
                        onClick={() => setActive(user.name)}
                        dataSource={[
                            {
                                avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
                                alt: "kursat_avatar",
                                title: user.name,
                                subtitle: user.message,
                                date: user.time,
                                unread: 0,
                            },
                        ]}
                    />
                </div>
            ))}
        </div>
    );
}

export default Userlist;
