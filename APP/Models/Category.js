const { Schema, model } = require("mongoose");

const categorySchema = Schema(
  {
    nombre: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Categories", categorySchema);
