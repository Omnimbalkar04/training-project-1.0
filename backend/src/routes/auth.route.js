import express from "express";

const router = express.Router();

router.get("/signup", protectRoutes, signup);
router.get("/login", protectRoutes, login);
router.get("/logout", protectRoutes, logout);

export default router;