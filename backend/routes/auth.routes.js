import express from "express";
import { getme, login, logout, signUp } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getme);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);

export default router;
