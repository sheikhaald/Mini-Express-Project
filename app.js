const express = require("express");
require("dotenv").config();
const connectDB = require("./database");
const routerbook = require("./api/books/router");

const app = express();

app.use(express.json());

// app.get((req, res) => {
//   res.send("Hello, Express!");
// });

connectDB();
app.use("/api", routerbook);

app.listen(8000, () => {
  console.log("port = 8000");
});
