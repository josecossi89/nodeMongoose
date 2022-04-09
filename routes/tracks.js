const express = require("express");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItem,
  updateItems,
  deleteItems,
} = require("../controllers/tracks");
const customHeader = require("../middlewares/customHeader");
const router = express.Router();

/**
 * Obtener todos los registros
 */
router.get("/", getItems);
/**
 * Crear un nuevo registro
 */
router.post("/", validatorCreateItem, createItem);
/**
 * Obtener detalle de un registro en particular
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Actualizar un registro existente en particular
 */
router.put("/:id", updateItems);
/**
 * Eliminar un registro existente en particular
 */
router.delete("/:id", deleteItems);

module.exports = router;
