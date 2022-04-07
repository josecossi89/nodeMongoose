const express = require("express");
const { validatorCreateItem } = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
} = require("../controllers/tracks");
const customHeader = require("../middlewares/customHeader");
const router = express.Router();

router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);
router.get("/:id", getItem);
router.put("/:id", updateItems);
router.delete("/:id", deleteItems);

module.exports = router;
