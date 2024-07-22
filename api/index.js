import express from "express";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use(cookieParser());

app.listen(4507, () => {
    console.log("Server is running");
});