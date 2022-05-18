const express = require("express");
const router = express.Router();
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const { check } = require("express-validator");

/**
 * Ruta: /product
 */

router.get("/", [validarJWT, validarCampos], getAllProducts);

router.get("/:id", [validarJWT, validarCampos], getProductById);

router.post(
  "/",
  [
    validarJWT,
    check("categoria", "Debe ser una categoría existente").isMongoId(),
    validarCampos,
  ],
  createProduct
);

router.put("/:id", [validarJWT, validarCampos], updateProduct);

router.delete("/:id", [validarJWT, validarCampos], deleteProduct);

module.exports = router;
