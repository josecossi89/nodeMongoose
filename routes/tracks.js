const express = require("express");
const { validatorCreateItem } = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
} = require("../controllers/tracks");

const router = express.Router();

router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);
router.get("/:id", getItem);
router.put("/:id", updateItems);
router.delete("/:id", deleteItems);

module.exports = router;
