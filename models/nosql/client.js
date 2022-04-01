const mongoose = require("mongoose");

const ClientScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("client", ClientScheme);
