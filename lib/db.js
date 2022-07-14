const mysql = require("mysql");
export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: 3306,
  database: "hireme",
});
// pool.getConnections((err) => {
//   if (err) {
//     console.log("err");
//   }
//   console.log("connected to db");
// });
const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, values, (error, data) => {
        console.log(query);
        if (error) throw error;
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { executeQuery };
