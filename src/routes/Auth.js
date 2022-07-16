const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  login,
  register,
  updateUser,
  renewToken,
} = require("../controllers/Auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

/**
 * Ruta: /auth
 */

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").isEmail().not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  login
);

router.post(
  "/register",
  [
    check("email", "El email es obligatorio").isEmail().not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    validarJWT,
    validarCampos,
  ],
  register
);

router.put(
  "/update-user",
  [
    check("email", "El email es obligatorio").isEmail().not().isEmpty(),
    validarCampos,
  ],
  changePassword
);

router.get("/renew-token", [], renewToken);

module.exports = router;
