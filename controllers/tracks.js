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
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, `ERROR_GET_ITEM`, 500);
  }
};

/**
 * Actualizar un registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (err) {
    handleHttpError(res, `ERROR_UPDATE_ITEM`, 403);
  }
};

/**
 * Eliminar un registro de la base de datos
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await tracksModel.deleteOne({ _id: id });
    res.send({ message: `${id} delete successfull` });
  } catch (err) {
    handleHttpError(res, `ERROR_DELETE_ITEM`, 403);
  }
};

module.exports = { getItems, getItem, createItem, deleteItem, updateItem };
