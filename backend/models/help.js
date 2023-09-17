import mongoose from "mongoose";

const helpSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        query: {
            type: String,
            required: true,
        },
        image: String,
        resolved: Boolean,
    },
    { timestamps: true },
);

const Help = mongoose.model("help", helpSchema);

export default Help;
