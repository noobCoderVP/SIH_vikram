import mongoose from "mongoose";

const incentiveSchema = mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            default: "cash",
        },
        lawyer: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
        },
        comment: {
            type: String,
            minLength: 10,
            maxLength: 200,
        },
    },
    {
        timestamps: true,
    },
);

const Incentive = mongoose.model("incentive", incentiveSchema);

export default Incentive;
