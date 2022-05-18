const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { login, register, changePassword } = require("../Controllers/Auth");
const { validarCampos } = require("../middlewares/validar-campos");

/**
 * Ruta: /auth
 */

router.post("/login",[
  check("email", "El email es obligatorio").isEmail().not().isEmpty(),
  check("password", "El password es obligatorio").not().isEmpty(),
  validarCampos
], login);

router.post("/register", [
  check("email", "El email es obligatorio").isEmail().not().isEmpty(),
  check("password", "La contraseña es obligatoria").not().isEmpty(),
  validarCampos
], register);

router.post("/change-password",[
  check("email", "El email es obligatorio").isEmail().not().isEmpty(),
  check("password", "La contraseña es obligatoria").not().isEmpty(),
  check("newPassword", "La nueva contraseña es obligatoria").not().isEmpty(),
  validarCampos
], changePassword);

module.exports = router;
