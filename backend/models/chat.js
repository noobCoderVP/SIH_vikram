import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
    {
        sender: {
            type: String,
            required: true,
        },
        receiver: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
            minLength: 5,
        },
        case: {
            type: String,
        },
        isSeen: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

const Chat = mongoose.model("chat", chatSchema);

export default Chat;
