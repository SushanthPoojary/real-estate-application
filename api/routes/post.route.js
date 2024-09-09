import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { addPost, deletePost, getAllPosts, getPost, updatePost } from "../controllers/post.controller.js";

const postRoutes = express.Router();

postRoutes.get("/", getAllPosts);
postRoutes.get("/:id", verifyToken, getPost);
postRoutes.post("/", verifyToken, addPost);
postRoutes.put("/:id", verifyToken, updatePost);
postRoutes.delete("/:id", verifyToken, deletePost);

export default postRoutes;