var mysql = require("mysql2");
var db = mysql.createConnection({
  host: "10.42.96.3",
  user: "root",
  password: "1234",
  database: "user",
});
db.connect();

module.exports = db;
