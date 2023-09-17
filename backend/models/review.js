import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        case: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 7,
        },
        comment: {
            type: String,
            minLength: 10,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Review = mongoose.model("review", reviewSchema);

export default Review;
