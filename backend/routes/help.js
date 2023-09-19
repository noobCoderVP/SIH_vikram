import { Router } from "express";
import Help from "../models/help.js";
import { connect, disconnect } from "../utils/connection.js";

const helpRouter = Router();

helpRouter.post("/", async (req, res) => {
    try {
        await connect();
        const { username, query } = req.body;
        const q = new Help({ username, query });
        await q.save();
        res.status(200).json({
            message: "Query submitted successfully!",
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

export default helpRouter;
