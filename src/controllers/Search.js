const productModel = require("../models/Product");
const categoryModel = require("../models/Category");

const searchAll = async (req, res) => {
  try {
    const { buscar } = req.params;
    const regex = new RegExp(buscar, "i");

    const [products, categories] = await Promise.all([
      productModel.find({ nombre: regex }),
      categoryModel.find({ nombre: regex }),
    ]);

    return res.status(200).json({
      ok: true,
      products,
      categories,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error inesperado al buscar",
    });
  }
};

const search = async (req, res) => {
  try {
    const { buscar, coleccion } = req.params;
    const regex = new RegExp(buscar, "i");

    let data = [];

    switch (coleccion) {
      case "products":
        data = await productModel
          .find({ nombre: regex })
          .populate("categoria", "nombre");
        return res.status(200).json({
          ok: true,
          data,
        });
      case "categories":
        data = await categoryModel.find({ nombre: regex });
        return res.status(200).json({
          ok: true,
          data,
        });
      default:
        return res.status(200).json({
          ok: false,
          data,
        });
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error inesperado al buscar",
    });
  }
};

module.exports = {
  search,
  searchAll,
};
