const express = require("express");
const router = express.Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const { search, searchAll } =require("../controllers/Search");

/**
 * Route: /search
 */

router.get("/:buscar", [], searchAll);
router.get("/one/:coleccion/:buscar", [], search);

module.exports = router;

