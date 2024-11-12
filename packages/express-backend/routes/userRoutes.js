import express from "express";
import { updateProfile } from "../controllers/profileControllers.js";

const router = express.Router();

router.put("/:userId/profile", updateProfile);

export default router;