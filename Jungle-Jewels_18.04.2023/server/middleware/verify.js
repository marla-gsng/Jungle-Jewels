import jwt from "jsonwebtoken";

const verify = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json("You need to Login");
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.json(err);
  }
};

export default verify;
