import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function createToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "30d",
    });
    return token;
}

export function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        return decoded;
    } catch (error) {
        return null;
    }
}
