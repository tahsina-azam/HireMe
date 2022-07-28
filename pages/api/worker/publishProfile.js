import { executeQuery } from "../../../lib/db";
export default function (req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    executeQuery(" INSERT INTO Profiles VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)", [
      req.body.id,
      req.body.fullName,
      req.body.description,
      req.body.contact,
      req.body.address,
      req.body.work,
      req.body.workDes,
      req.body.completion,
      req.body.amount,
    ]);
    return res.send(200);
  }
}
