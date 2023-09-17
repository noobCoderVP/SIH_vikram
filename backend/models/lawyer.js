import mongoose from "mongoose";

const lawyerSchema = mongoose.Schema(
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
        tags: {
            type: [String],
            required: true,
        },
        tier: {
            type: Number,
            min: 1,
            max: 5,
        },
        documents: {
            type: [mongoose.SchemaTypes.ObjectId],
            maxLength: 5,
        },
        experience: {
            type: Number,
            required: true,
            min: 0,
            max: 50,
        },
        about: {
            type: String,
            maxLength: 200,
        },
    },
    {
        timestamps: true,
    },
);

const Lawyer = mongoose.model("lawyer", lawyerSchema);

export default Lawyer;
