import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
    {
        case: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        stage: {
            type: String,
            required: true,
            default: 0,
        },
        dueDate: {
            type: Date,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

const Payment = mongoose.model("payment", paymentSchema);

export default Payment;
