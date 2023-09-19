import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connect() {
    await mongoose.connect(
        `mongodb://vaibhav:Vaibhav%40143@ac-p1f2jq8-shard-00-00.nm9w35r.mongodb.net:27017,ac-p1f2jq8-shard-00-01.nm9w35r.mongodb.net:27017,ac-p1f2jq8-shard-00-02.nm9w35r.mongodb.net:27017/nyaybazaar?ssl=true&replicaSet=atlas-di7g4w-shard-0&authSource=admin&retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    );
}

export async function disconnect() {
    await mongoose.disconnect();
}
