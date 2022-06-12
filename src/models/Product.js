const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
   nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    stock:{
      type: Number,
      default:0
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
    img:{
      type: String,
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
