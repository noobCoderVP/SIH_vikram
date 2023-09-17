import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

import userRouter from "./routes/user.js";

// dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// dotenv
dotenv.config();

// express
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.json({ hello: "world" });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

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
app.listen(PORT, () => {
    console.log(`Successfully listening on port ${PORT}!`);
});
