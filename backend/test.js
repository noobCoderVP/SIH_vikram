import mongoose from "mongoose";
import { connect } from "./utils/connection.js";

async function test() {
    await connect();
    const testSchema = mongoose.Schema({
        name: String,
    });
    const Test = mongoose.model("test", testSchema);
    const vaibhav = new Test({ name: "Vaibhav" });
    vaibhav.save();
}

test();
