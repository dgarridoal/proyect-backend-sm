const { Schema, model } = require("mongoose");

const categorySchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "Categoria",
  }
);
categorySchema.method('toJSON', function() {
    const {_id,...object}=this.toObject();
    object.id=_id;
    return object;
});
module.exports = model("Categoria", categorySchema);
