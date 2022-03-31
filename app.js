require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;
const db = process.env.DB;

app.listen(port, () => {
  console.log(`Listening in port ${port}`);
});
