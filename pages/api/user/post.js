import { v4 as uuidv4 } from "uuid";
import { executeQuery } from "../../../lib/db";

export default async (req, res)=> {
    const uniqueID =uuidv4();
    console.log("req nom", req.body);
  try {
    await executeQuery("INSERT INTO posts (pid,userid,description,budget,type,days,address) VALUES(?,?,?,?,?,?,?)", [
        uniqueID,
        req.body.userid,
        req.body.description,
        req.body.budget,
        req.body.type,
        req.body.time,
        req.body.address
      ]
    );
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "fail",
      message: "try again",
      errorMessage: err,
    });
  }
};
