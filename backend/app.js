import express from "express";
import cors from "cors";
import userRoute from "./routes/oracle.routes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"], // Include POST method
    credentials: true, // Include credentials (cookies) in the request
  })
);

app.use("", userRoute);

export default app;
