import jwt from "jsonwebtoken";
import cookie from "cookie";
const settCookie = async (req, res, currentUser) => {
  const token = jwt.sign(
    {
      id: currentUser.userId,
      name: currentUser.name,
      email: currentUser.email,
      role: currentUser.role,
    },
    process.env.SECRET,
    { expiresIn: "12h" }
  );
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("user", token, {
      httpOnly: true,
      path: "/",
      maxAge: 12 * 3600,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
    })
  );
};
module.exports = { settCookie };
