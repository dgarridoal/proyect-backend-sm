const fs = require("fs");

const productModel = require("../models/Product");
const userModel = require("../models/User");

const actualizarImagen = async (nombreArchivo, id, tipo) => {
    let pathViejo='';
  switch (tipo) {
    case "products":
      const product = await productModel.findById(id);
      if (!product) {
        return false;
      }
      pathViejo = `./uploads/products/${product.img}`;

      borrarImagen(pathViejo);

      product.img = nombreArchivo;

      await product.save();

      return true;

    case "admin":
      const user = await userModel.findById(id);
      if (!user) {
        return false;
      }
      pathViejo = `./uploads/admin/${user.img}`;
      borrarImagen(pathViejo);

      user.img = nombreArchivo;

      await user.save();

      return true;
    default:
      break;
  }
};

const borrarImagen = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

module.exports = { actualizarImagen };
