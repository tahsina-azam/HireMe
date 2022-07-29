import { executeQuery } from "../../../lib/db";
import jwt from "jsonwebtoken";
export default async function (req, res) {
  if (req.method == "GET") {
    console.log("from api", req.cookies.user);
    const user = jwt.verify(req.cookies.user, process.env.SECRET);
    const result = await executeQuery(
      "SELECT*FROM Profiles WHERE userId=(?)",
      [user.id]
    );
    return res.send(result);
  }
}
