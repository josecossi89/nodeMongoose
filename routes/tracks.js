const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
} = require("../controllers/tracks");

const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItems);
router.delete("/:id", deleteItems);

module.exports = router;
