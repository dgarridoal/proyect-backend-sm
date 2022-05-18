const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    codigoBarra: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    precioVenta: {
      type: Number,
      required: true,
    },
    precioCompra: {
      type: Number,
    },
    fechaVencimiento: {
      type: Date,
      required: true,
    },
    categoria: [
      {
        type: Schema.Types.ObjectId,
        ref: "Categoria",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "Producto",
  }
);
productSchema.method('toJSON', function() {
    const {_id,...object}=this.toObject();
    object.id=_id;
    return object;
});
module.exports = model("Producto", productSchema);
