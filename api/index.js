import express from "express";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import usersRoute from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json());
app.use("/api/auth", authRoute);
app.use(cookieParser());
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoutes);

app.listen(4507, () => {
    console.log("Server is running");
});