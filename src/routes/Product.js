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
  actualizarStock,
} = require("../controllers/product");
const { check } = require("express-validator");

/**
 * Ruta: /product
 */

router.get("/", [validarJWT, validarCampos], getAllProducts);

router.get("/:id", [validarJWT, validarCampos], getProductById);

router.post("/", [validarJWT, validarCampos], createProduct);

router.put("/:id", [validarJWT, validarCampos], updateProduct);

router.delete("/:id", [validarJWT, validarCampos], deleteProduct);

router.put("/update-stock/:id", [validarJWT, validarCampos], actualizarStock);

module.exports = router;
