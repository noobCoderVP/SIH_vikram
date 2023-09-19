import mongoose from "mongoose";

const helpSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        query: {
            type: String,
            required: true,
        },
        image: String,
        resolved: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const Help = mongoose.model("help", helpSchema);

export default Help;
