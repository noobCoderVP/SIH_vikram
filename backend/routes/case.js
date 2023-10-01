import { Router } from "express";
import Case from "../models/case.js";
import { connect, disconnect } from "../utils/connection.js";

const caseRouter = Router();

caseRouter.post("/register/", async (req, res) => {
    try {
        await connect();
        const q = new Case(req.body);
        await q.save();
        res.status(200).json({
            message: "Case registered successfully",
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

caseRouter.get("/:caseid", async (req, res) => {
    try {
        await connect();
        let caseid = req.params.caseid;
        const c = await Case.find({ caseid });
        res.status(200).json({
            details: c,
            message: "Case details retrieved successfully!",
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

export default caseRouter;
