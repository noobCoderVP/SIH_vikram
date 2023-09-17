import mongoose from "mongoose";

const followerSchema = mongoose.Schema(
    {
        follower: {
            type: String,
            required: true,
        },
        followee: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Follower = mongoose.model("follower", followerSchema);

export default Follower;
