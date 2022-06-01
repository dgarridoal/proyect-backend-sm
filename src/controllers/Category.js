const categoryModel = require("../models/category");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    if (!categories) {
      return res.status(400).json({
        status: false,
        message: "No se han encontrado categorias",
      });
    }
    return res.status(200).json({
      status: true,
      categories,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al obtener las categorias",
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    if (!category) {
      return res.status(400).json({
        status: false,
        message: "No se ha encontrado la categoria",
      });
    }
    return res.status(200).json({
      status: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al obtener la categoria",
    });
  }
};

const createCategory = async (req, res) => {
  try {
    const { nombre } = req.body;
    const newCategory = new categoryModel({nombre});
    await newCategory.save();
    if (!newCategory) {
      return res.status(400).json({
        status: false,
        message: "No se ha podido crear la categoria",
      });
    }
    return res.status(200).json({
      status: true,
      category: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al crear la categoria",
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const category = await categoryModel.findByIdAndUpdate(id, {nombre}, {
      new: true,
    });
    if (!category) {
      return res.status(400).json({
        status: false,
        message: "No se ha encontrado la categoria",
      });
    }
    return res.status(200).json({
      status: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al actualizar la categoria",
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    if (!category) {
      return res.status(400).json({
        status: false,
        message: "No se ha encontrado la categoria",
      });
    }
    return res.status(200).json({
      status: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al eliminar la categoria",
    });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
