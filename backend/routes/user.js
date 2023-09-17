import express from "express";
import bcrypt from "bcryptjs";
import { connect, disconnect } from "../utils/connection.js";
import { createToken } from "../utils/auth.js";
import user from "../models/user.js";

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    try {
        const { username, password, email, name } = req.body;
        await connect();
        const u = await user.findOne({ username });

        if (u) {
            res.status(200).json({
                message: "User Already Exist!",
                status: false,
                data: {},
            });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newuser = new user({
            username,
            password: hashedPassword,
            email,
            name,
        });
        await newuser.save();
        res.status(200).json({
            message: "Registered successfully!",
            status: true,
            data: {},
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server", status: false });
        console.log(error);
    } finally {
        await disconnect();
    }
});

userRouter.post("/login", async (req, res) => {
    const { username, password } = req.body;
    await connect();
    const u = await user.findOne({ username });

    if (!u) {
        res.status(200).json({
            message: "User Does Not Exist!",
            status: false,
            data: {},
        });
        return;
    }

    const checkPassword = await bcrypt.compare(password, u.password);
    if (!checkPassword)
        return res
            .status(200)
            .json({ message: "Incorrect Password", status: false, data: {} });

    const token = createToken({ username, password });
    res.status(200).json({
        message: "Logged In Successfully!",
        data: { token },
        status: true,
    });
});

export default userRouter;
