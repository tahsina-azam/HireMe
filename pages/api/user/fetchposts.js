import { executeQuery } from "../../../lib/db";

export default async (req, res)=> {  
    var post=[];
  try {
     post=await executeQuery("SELECT * FROM posts",
    );
   return res.send(post);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "fail",
      message: "try again",
      errorMessage: err,
    });
  }
};
