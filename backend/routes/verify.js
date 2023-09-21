import multer from 'multer';
import express from "express";
import fs from 'fs';
import verifyAadharCard from '../utils/ocr.js';

import { connect } from "../utils/connection.js";

const verifyRouter = express.Router();

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

verifyRouter.post('/verify', upload.single('aadharImage'), async (req, res) => {
    // Ensure that a file was uploaded
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    // Get the uploaded file as a buffer
    const fileBuffer = req.file.buffer;

    // Create a temporary file to save the uploaded image
    const tempFile = `/tmp/${Date.now()}_aadhar.jpeg`;
    fs.writeFileSync(tempFile, fileBuffer);

    // Call the verifyAadharCard function to check the AadharCard
    const isVerified = await verifyAadharCard(tempFile);

    // Respond based on the verification result
    if (isVerified) {
        res.status(200).json({ message: 'AadharCard verified successfully' });
    } else {
        res.status(200).json({ message: 'AadharCard verification failed' });
    }

    // Delete the temporary file
    fs.unlink(tempFile, (err) => {
        if (err) {
            console.error('Error deleting temporary file:', err);
        }
    });
});

export default verifyRouter;
