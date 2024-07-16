import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const route = express.Router();

route.get("/register", register);

route.post("/login", login);

route.post("/loggout", logout);

export default route;