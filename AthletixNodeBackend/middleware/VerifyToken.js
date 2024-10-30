require("dotenv").config();
const jwt = require("jsonwebtoken");
const { sanitizeUser } = require("../utils/SanitizeUser");

exports.verifyToken = async (req, res, next) => {
  try {
    // Extract the token from request cookies
    const token = req.cookies?.token;

    // Return 401 response if token is missing
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication token missing. Please log in." });
    }

    // Verify the token using the secret key
    const decodedInfo = jwt.verify(token, process.env.SECRET_KEY);

    // Check if decoded info contains expected fields
    if (decodedInfo?._id && decodedInfo?.email) {
      req.user = sanitizeUser(decodedInfo); // sanitize user data before setting in req
      return next();
    }

    // Respond with invalid token message if the payload is incorrect
    return res
      .status(401)
      .json({ message: "Invalid token. Please log in again." });
  } catch (error) {
    console.error("Token verification error:", error);

    // Handle token expiration and invalid token errors
    if (error instanceof jwt.TokenExpiredError) {
      return res
        .status(401)
        .json({ message: "Session expired. Please log in again." });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json({ message: "Invalid token. Please log in again." });
    }

    // Handle any other errors as an internal server error
    return res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
};
