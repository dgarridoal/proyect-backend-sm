const express = require('express');
const router = express.Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const { fileUpload, viewImage } = require("../controllers/Upload");
/**
 * Route: /upload
 */

router.put("/:tipo/:id", [], fileUpload);
router.get("/:tipo/:pathImg", [], viewImage);

module.exports = router;

