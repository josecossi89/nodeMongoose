const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
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
ClientScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("client", ClientScheme);
