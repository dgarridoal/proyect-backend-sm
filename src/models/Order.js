const { Schema, model } = require("mongoose");

const orderSchema = Schema(
  {
    orderItems: [
      {
        idProducto:{
            type: String,
       },
        nombre: {
          type: String,
        },
        cantidad: {
          type: Number,
        },
        precio: {
          type: Number,
        },
        img: {
          type: String,
        },
      },
    ],
    nroItems:{
        type: Number,
    },
    total:{
        type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "Orden",
  }
);
orderSchema.method("toJSON", function () {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
module.exports = model("Orden", orderSchema);
