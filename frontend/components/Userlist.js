import React from "react";
import { ChatList } from "react-chat-elements";

function Userlist({ users }) {
    return (
        <div className="w-72 border-2 border-slate-500">
            {users.map(user => (
                <div>
                    <ChatList
                        className="chat-list"
                        dataSource={[
                            {
                                avatar: "https://avatars.githubusercontent.com/u/80540635?v=4",
                                alt: "kursat_avatar",
                                title: user.name,
                                subtitle: user.message,
                                date: new Date(),
                                unread: 3,
                            },
                        ]}
                    />
                </div>
            ))}
        </div>
    );
}

export default Userlist;
