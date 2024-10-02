import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getChats, getChat, addChat, readChat } from "../controllers/chat.controller.js";

const chatsRoute = express.Router();

chatsRoute.get("/", verifyToken, getChats);
chatsRoute.get("/:id", verifyToken, getChat);
chatsRoute.post("/", verifyToken, addChat);
chatsRoute.put("/read/:id", verifyToken, readChat);

export default chatsRoute;