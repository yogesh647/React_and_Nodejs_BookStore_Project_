import express from "express";
import { signup, login,user } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", user);

export default router;