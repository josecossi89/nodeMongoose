const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
/**
 * Obtener todos los registros de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    console.log(`Corrected`);
    res.status(201).json({ data });
  } catch (error) {
    handleHttpError(res, `ERROR_GET_ITEMS`, 404);
  }
};

/**
 * Crear un nuevo registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, `ERROR_CREATE_ITEMS`, 403);
  }
};
/**
 * Obtener un detalle en particular de algun registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {
  try {
  } catch (error) {
    handleHttpError(res, `ERROR_GET_ITEM`, 500);
  }
};

/**
 * Actualizar un registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateItems = (req, res) => {};

/**
 * Eliminar un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItem, deleteItems, updateItems };
