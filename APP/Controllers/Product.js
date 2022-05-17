const productModel = require("../models/Product");

const getAllProducts = (req, res) => {
  try {
    productModel.find({}, (err, products) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: "Error al obtener los productos",
        });
      }
      res.status(200).json({
        ok: true,
        products,
      });
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al obtener los productos",
    });
  }
};

const getProductById = (req, res) => {
  try {
    const { id } = req.params;
    productModel.findById(id, (err, product) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: "Error al obtener el producto",
        });
      }
      res.status(200).json({
        ok: true,
        product,
      });
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al obtener el producto",
    });
  }
};

const createProduct = (req, res) => {
  try {
    const { body } = req;
    const product = new productModel(body);
    product.save((err, productStored) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: "Error al guardar el producto",
        });
      }
      res.status(200).json({
        ok: true,
        product: productStored,
      });
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al guardar el producto",
    });
  }
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    productModel.findByIdAndUpdate(
      id,
      body,
      { new: true },
      (err, productUpdated) => {
        if (err) {
          res.status(500).send({
            status: false,
            message: "Error al actualizar el producto",
          });
        }
        res.status(200).json({
          ok: true,
          product: productUpdated,
        });
      }
    );
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al actualizar el producto",
    });
  }
};

const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    productModel.findByIdAndRemove(id, (err, productRemoved) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: "Error al eliminar el producto",
        });
      }
      res.status(200).json({
        ok: true,
        product: productRemoved,
      });
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al eliminar el producto",
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
