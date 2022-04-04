const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * Obtener todos los registros de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    console.log(`Corrected`);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ message: `Error in line` });
  }
};

/**
 * Obtener un detalle en particular de algun registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Crear un nuevo registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const fileData = {
    fileName: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
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
