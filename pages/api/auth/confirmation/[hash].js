import jwt from "jsonwebtoken";
import { executeQuery } from "../../../../lib/db";
import { settCookie } from "../../../../utils/settCookie";
export default async (req, res) => {
  if (req.method === "POST") {
    res.status(403).json({ msg: "dont have access" });
  }
  const { hash } = req.query;
  const user = jwt.verify(hash, process.env.EMAIL_SECRET);
  if (user) {
    const getUser = await executeQuery(
      "SELECT*FROM pendingUsers WHERE userId=(?)",
      [user.userId]
    );
    await executeQuery("DELETE FROM pendingUsers WHERE email=(?)", [
      user.email
    ]);
    await executeQuery("INSERT INTO users (userId,name,email,password,role,nid) VALUES(?,?,?,?,?,?)", [
      Date.now(),
      getUser[0].name,
      getUser[0].email,
      getUser[0].password,
      getUser[0].role,
      getUser[0].nid
    ]);
    const currentUser = {
      name: getUser[0].name,
      email: user.email,
      role: getUser[0].role,
    };
    settCookie(req, res, currentUser);
    if(getUser[0].role=="client"){
      res.redirect("/user");
    }
    else{
      res.redirect("/worker");
    }
    //res.redirect("/");
  }
};
