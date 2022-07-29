const Order = require("../models/Order");
const Product = require("../models/Product");

const payment = async (req, res) => {
  const { nroItems, total, orderItems } = req.body;

  const order = new Order({
    nroItems,
    total,
    orderItems,
  });

  order
    .save()
    .then(() => {
      orderItems.forEach(async (item) => {
        const product = await Product.findById(item.idProducto);
        product.stock = product.stock - item.cantidad;
        await product.save();
      });

      return res.status(200).json({
        staus: true,
        order,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: false,
        message: "Error al guardar la orden",
      });
    });
};

const getOrders = async (req, res) => {
  Order.find()
    .exec((err, orders) => {
      if (err) {
        return res.status(500).json({
          status: false,
          message: "Error al obtener las ordenes",
        });
      }
      return res.status(200).json({
        status: true,
        orders,
      });
    });
};

module.exports = { payment, getOrders };
