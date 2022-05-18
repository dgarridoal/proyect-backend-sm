const productModel = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find().populate('categoria', 'nombre');
    if (!products) {
      return res.status(400).json({
        status: false,
        message: "Error al obtener los productos",
      });
    }
    return res.status(200).json({
      status: true,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al obtener los productos",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id).populate('categoria', 'nombre');
    if (!product) {
      return res.status(400).json({
        status: false,
        message: "El producto no existe",
      });
    }
    return res.status(200).json({
      status: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al obtener el producto",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { body } = req;
    const product = new productModel(body);
    await product.save();
    if (!product) {
      return res.status(400).json({
        status: false,
        message: "Error al guardar el producto",
      });
    }
    return res.status(200).json({
      status: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al guardar el producto",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const product = await productModel.findByIdAndUpdate(id, body, {
      new: true,
    }).populate('categoria', 'nombre');
    if (!product) {
      return res.status(400).json({
        status: false,
        message: "Error al actualizar el producto",
      });
    }
    return res.status(200).json({
      status: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al actualizar el producto",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndRemove(id);
    if (!product) {
      return res.status(400).json({
        status: false,
        message: "Error al eliminar el producto",
      });
    }
    return res.status(200).json({
      status: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
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
