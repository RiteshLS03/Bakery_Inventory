const mysql2 = require("mysql2");

const mysqlPool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "Ls03@1234",
  database: "cake_inventory",
});

module.exports = mysqlPool;
