require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo.js");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;
const db = process.env.DB;

app.use("/api", require("./routes"));
app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});

dbConnect();
