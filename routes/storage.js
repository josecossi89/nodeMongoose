const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
} = require("../controllers/storage.js");

const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage.js");

router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
