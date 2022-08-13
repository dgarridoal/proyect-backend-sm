const express = require("express");
const router = express.Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const { updateUser } = require("../controllers/User");

/**
 * Route: /user
 */

router.put("/update/:id", [validarJWT], updateUser);

module.exports = router;
