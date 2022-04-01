/**
 * Obtener todos los registros de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = (req, res) => {
  try {
    const data = ["Hola", "Mundo"];
    res.send({ data });
    console.log(`Hola Soy un track`);
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
const createItem = (req, res) => {};

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
