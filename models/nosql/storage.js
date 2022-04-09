const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const storageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    fileName: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
StorageScheme.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("storage", storageSchema);
