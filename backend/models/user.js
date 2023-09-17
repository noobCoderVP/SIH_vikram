import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            maxLength: 30,
        },
        password: {
            type: String,
            required: true,
            maxLength: 30,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        ratings: {
            type: [Number],
            default: 5.0,
        },
        occupation: String,
        dateOfBirth: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const User = mongoose.model("user", userSchema);

export default User;
