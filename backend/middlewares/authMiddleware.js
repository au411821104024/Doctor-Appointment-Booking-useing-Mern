import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
      return res
        .status(401)
        .send({ message: "Authorization header missing", success: false });
    }

    // Extract token from "Bearer <token>"
    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .send({ message: "Token is missing", success: false });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
      if (err) {
        return res
          .status(403)
          .send({ message: "Token is not valid", success: false });
      }

      // Attach userId to request body for later use
      req.body.userId = decode.id;
      next();
    });
  } catch (error) {
    console.error("Authorization Middleware Error:", error.message);
    res.status(500).send({ message: "Internal server error", success: false });
  }
};

export default verifyToken;
