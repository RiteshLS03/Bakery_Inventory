const mysql2 = require("mysql2");

const mysqlConnection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Ls03@1234",
  database: "cake_inventory",
});

let connection = mysqlConnection.connect((err) => {
  if (err)
    console.log(
      "Failed to connect database. Error:" + JSON.stringify(err, undefined, 2)
    );
  else {
    console.log("Database connected successfully");
  }
});

module.exports = mysqlConnection;
