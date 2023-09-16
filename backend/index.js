import express from "express";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

import openai from "openai";

const { Configuration, OpenAIApi } = openai;

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

// session
app.use(
    session({
        secret: "iamakey",
        resave: false,
        saveUninitialized: true,
        cookie: { path: "/", maxAge: 1000 * 60 * 60 * 24 * 10 },
    }),
);

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

// Configure OpenAI API
const openai_config = new OpenAIApi(new Configuration({
    apiKey: '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' // Replace with your OpenAI API key
}));

app.post('/chat', async (req, res)=> {   
    try {
      const resp = await openai_config.createChatCompletion({
        model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: req.body.question}
          ]  
      })           
          
      res.status(200).json({message: resp.data.choices[0].message.content})
    } catch(e) {
        res.status(400).json({message: e.message})
    }
  })