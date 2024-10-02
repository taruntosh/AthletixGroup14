const express = require("express");
const router = express.Router();
const authController = require("../controllers/Auth");
const { verifyToken } = require("../middleware/VerifyToken");

router
  .post("/signup", authController)
  .post("/login", authController)
  .post("/verify-otp", authController)
  .post("/resend-otp", authController)
  .post("/forgot-password", authController)
  .post("/reset-password", authController)
  .get("/check-auth", verifyToken, authController)
  .get("/logout", authController);

module.exports = router;
