import mongoose from "mongoose";

const documentSchema = mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
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

const Document = mongoose.model("document", documentSchema);

export default Document;
