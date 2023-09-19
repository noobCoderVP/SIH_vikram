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
            maxLength: 100,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        tags: {
            type: [String],
            minLenth: 1,
        },
        tier: {
            type: String,
            // min: 1,
            // max: 5,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            default: 4,
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
        newsletter: Boolean,
        about: {
            type: String,
            maxLength: 200,
        },
        verified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

const Lawyer = mongoose.model("lawyer", lawyerSchema);

export default Lawyer;
