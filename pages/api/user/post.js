import { pool } from "../../../lib/db";
import { v4 as uuidv4 } from "uuid";

export default async (req, res)=> {
    const uniqueID =uuidv4();
    console.log("req nom", req.body);
  try {
    var sql = "INSERT INTO posts VALUES('" +
    uniqueId +
    "','" +
    req.body.userid +
    "','"+req.body.description+"','"+req.body.budget+"','" +
    req.body.type +
    "','" +
    req.body.days +
    "','" +
    req.body.address +
    "')";
    pool.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        return res.send({
          status: "fail to get courses",
          message: "try again",
          errorMessage: err,
        });
      } else {
        return res.send({
          status: "successs",
          message: "successfully fetched courses",
          result: result,
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "fail",
      message: "try again",
      errorMessage: err,
    });
  }
};
