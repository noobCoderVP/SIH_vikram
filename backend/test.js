import mongoose from "mongoose";
import { connect } from "./utils/connection.js";

async function test() {
    await connect();
    const userSchema = mongoose.Schema({
        name: String,
    });
    const User = mongoose.model("users", userSchema);
    const vaibhav = new User({ name: "Vaibhav" });
    vaibhav.save();
}

test();
