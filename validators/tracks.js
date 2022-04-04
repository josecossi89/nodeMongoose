const { check } = require("express-validator");

const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration.start").exists().notEmpty().isLength({ min: 0, max: 1 }),
  check("duration.end").exists().notEmpty().isLength({ min: 0, max: 1 }),
  check("mediaId").exists().notEmpty(),
];

module.exports = validatorCreateItem;
