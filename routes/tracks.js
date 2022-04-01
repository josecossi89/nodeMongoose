const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const data = ["Hola", "Mundo"];
    res.send({ data });
    console.log(`Hola Soy un track`);
  } catch (error) {
    res.status(500).json({ message: `Error in line` });
  }
});

module.exports = router;
