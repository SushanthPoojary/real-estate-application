import express from "express";
import { deleteUser, getAllUsers, getSpecificUser, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const usersRoute = express.Router();

usersRoute.get("/", getAllUsers);

usersRoute.get("/:id", verifyToken, getSpecificUser);

usersRoute.put("/:id", verifyToken, updateUser);

usersRoute.delete("/:id", verifyToken,  deleteUser);

export default usersRoute;