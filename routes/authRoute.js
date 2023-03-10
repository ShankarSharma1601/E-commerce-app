import express from "express";
import {
  authController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", authController);

// LOGIN || POST
router.post("/login", loginController);

// Test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
