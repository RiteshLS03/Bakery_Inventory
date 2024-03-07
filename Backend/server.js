require("express-async-errors");
const express = require("express");
const db = require("./db");
const cors = require("cors");
/**const { json } = require("body-parser");*/

const app = express();
app.use(cors());

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).send("Something went wrong");
// });

// console.log(db.query("SELECT * FROM TABLE ingredients"));

app.get("/", (_, res) => {
  return res.json("From the backend side");
});

app.get("/ingredients", async (req, res) => {
  db.query("SELECT * FROM ingredients", (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
  //   res.send(data);
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
