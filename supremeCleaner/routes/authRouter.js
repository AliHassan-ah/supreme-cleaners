import express from "express";
import {
  loginController,
  registerController,
  forgetPasswordController,
  ResetPasswordController,
} from "../controllers/authController.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";
//import { IsAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//User Registration
router.post("/register", registerController);

//User Login

router.post("/login", loginController);

router.post("/forgetpassword", forgetPasswordController);
router.post("/changepassword", ResetPasswordController);

//Test router
//router.get("/test", testController);
export default router;
