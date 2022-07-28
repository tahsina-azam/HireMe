import { executeQuery } from "../../../lib/db";
import jwt from "jsonwebtoken";
export default async function (req, res) {
  if (req.method == "GET") {
    console.log("from api", req.cookies.user);
    const user = jwt.verify(req.cookies.user, process.env.SECRET);
    console.log(user.id);
    // const result = await executeQuery(
    //   " SELECT*FROM Profiles WHERE userID=(?)",
    //   [user.id]
    // );
    return res.send({ yo: "yo" });
  }
}
