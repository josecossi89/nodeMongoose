const express = require("express");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
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
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
/**
 * Eliminar un registro existente en particular
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
