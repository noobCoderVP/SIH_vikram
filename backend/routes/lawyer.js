import express from "express";
import lawyer from "../models/lawyer.js";

const lawyerRouter = express.Router();

lawyerRouter.post("/register", async (req, res) => {});

lawyerRouter.post("/login", async (req, res) => {});

export default lawyerRouter;
