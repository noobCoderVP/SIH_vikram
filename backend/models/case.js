import mongoose from "mongoose";

const caseSchema = mongoose.Schema(
    {
        caseId: {
            type: String,
            required: true,
            unique: true,
        },
        title: { type: String, required: true },
        tags: [String],
        client: {
            type: String,
            required: true,
        },
        lawyer: {
            type: String,
            required: true,
        },
        cemail: String,
        lemail: String,
        description: String,
        documents: [mongoose.SchemaTypes.ObjectId],
        stage: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    },
);

const Case = mongoose.model("case", caseSchema);

export default Case;
