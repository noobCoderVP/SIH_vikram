import { Router } from "express";
import Chat from "../models/chat.js";
import { connect, disconnect } from "../utils/connection.js";

const chatRouter = Router();

chatRouter.post("/", async (req, res) => {
    try {
        await connect();
        const { sender, receiver, text } = req.body;
        const q = new Chat({ sender, receiver, text });
        await q.save();
        res.status(200).json({
            message: "Message sent successfully",
            status: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            status: false,
        });
    } finally {
        await disconnect();
    }
});

chatRouter.get("/lawyer/:username", async (req, res) => {
    try {
        await connect();
        const chats = await Chat.find({
            $or: [
                { sender: req.params.username },
                { receiver: req.params.username },
            ],
        });
        res.status(200).json({
            chats,
            message: "Chats retrieved successfully!",
            status: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            status: false,
        });
    } finally {
        await disconnect();
    }
});

chatRouter.get("/user", async (req, res) => {
    try {
        await connect();
        const { sender, receiver } = req.query;
        const chats = await Chat.find({ sender, receiver });
        res.status(200).json({
            chats,
            message: "Chats retrieved successfully!",
            status: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            status: false,
        });
    }
});

export default chatRouter;
