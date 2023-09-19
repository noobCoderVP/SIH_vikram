import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io";

import userRouter from "./routes/user.js";
import searchRouter from "./routes/search.js";

// dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// dotenv
dotenv.config();
// socket
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);
app.use("/api", searchRouter);

app.get("/", (req, res) => {
    res.status(200).json({ hello: "world" });
});

io.on("connection", socket => {
    // handling chats of users
    socket.on("CHAT_MESSAGE", msg => {
        io.emit("CHAT_MESSAGE", msg);
    });

    // handling messages related to a case
    socket.on("CASE_MESSAGE", msg => {
        io.emit("CASE_MESSAGE", msg);
    });
});

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    console.log(err);
    res.json({ message: "error" });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Successfully listening on port ${PORT}!`);
});
