const express = require("express");
const router = express.Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const { search, searchAll } =require("../controllers/Search");

/**
 * Route: /search
 */

router.get("/:buscar", [validarJWT], searchAll);
router.get("/one/:coleccion/:buscar", [validarJWT], search);

module.exports = router;

