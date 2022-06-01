const express = require("express");
const router = express.Router();
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");

const {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} = require("../controllers/Category");
const { check } = require("express-validator");

/**
 * Ruta: /category
 */

router.get("/", [validarJWT, validarCampos], getAllCategories);

router.get("/:id", [validarJWT, validarCampos], getCategoryById);

router.post(
  "/",
  [
    validarJWT,
    validarCampos,
    check("nombre", "Debe tener nombre la categoria").not().isEmpty(),
  ],
  createCategory
);

router.put(
  "/:id",
  [
    validarJWT,
    validarCampos,
    check("nombre", "Debe tener nombre la categoria").not().isEmpty(),
  ],
  updateCategory
);

router.delete("/:id", [validarJWT, validarCampos], deleteCategory);

module.exports = router;
