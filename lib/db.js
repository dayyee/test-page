var mysql = require("mysql2");
var db = mysql.createConnection({
  host: "34.64.223.46",
  user: "root",
  password: "1234",
  database: "user",
});
db.connect();

module.exports = db;
