const jwt = require("jsonwebtoken");

const validarJWT = (req, res, next) => {
  try {
    const token = req.header("x-token");
    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "No hay token en la petición",
      });
    }

    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.id = id;

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }
};

module.exports = { validarJWT };
