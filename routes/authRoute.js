import express from "express";
import {
  authController,
  loginController,
} from "../controllers/authController.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", authController);

// LOGIN || POST
router.post("/login", loginController);

export default router;
