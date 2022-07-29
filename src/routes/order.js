
const express = require("express");
const router = express.Router();
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const { payment, getOrders} = require("../controllers/Order");

/**
 * Ruta: /order
 */

router.get("/", [validarJWT], getOrders);
router.post("/payment", [validarJWT, validarCampos], payment);

module.exports = router;