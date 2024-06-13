import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorised" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (error, payload) => {
    if (error) return res.status(403).json({ message: "Invalid Token" });
    req.userId = payload.id;
    req.isAdmin = payload.isAdmin;
  });

  next();
};
