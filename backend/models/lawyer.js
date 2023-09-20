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
        type_of_service_tag: {
            type: String,
            required: true,
        },
        specialization_tags: {
            type: [String],
            required: false,
        },
        tier: {
            type: Number,
            min: 1,
            max: 5,
        },
        rating: {
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
