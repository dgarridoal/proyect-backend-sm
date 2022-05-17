const userModel = require("../models/user");

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    userModel.findOne({ email }, (err, user) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: "Error al obtener el usuario",
        });
      }
      if (!user) {
        res.status(400).send({
          status: false,
          message: "El usuario no existe",
        });
      }
      //TODO: ver el hash de la constraseña
      if (user.password !== password) {
        res.status(400).send({
          status: false,
          message: "El password es incorrecto",
        });
      }
      res.status(200).json({
        ok: true,
        user,
      });
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al obtener el usuario",
    });
  }
};
//TODO: arreglar el funcionamiento y agregar el hash de la contraseña
const register = (req, res) => {
  try {
    const { body } = req;
    const user = new userModel(body);
    user.save((err, userStored) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: "Error al guardar el usuario",
        });
      }
      res.status(200).json({
        ok: true,
        user: userStored,
      });
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al guardar el usuario",
    });
  }
};

const changePassword = (req, res) => {
  try {
    const { email, password } = req.body;
    userModel.findOne({ email }, (err, user) => {
      if (err) {
        res.status(500).send({
          status: false,
          message: "Error al obtener el usuario",
        });
      }
      if (!user) {
        res.status(400).send({
          status: false,
          message: "El usuario no existe",
        });
      }
      //TODO: ver el hash de la constraseña
      user.password = password;
      user.save((err, userStored) => {
        if (err) {
          res.status(500).send({
            status: false,
            message: "Error al guardar la contraseña del usuario",
          });
        }
        res.status(200).json({
          ok: true,
          user: userStored,
        });
      });
    });
  } catch (error) {
    res.status(500).send({
      status: false,
      message: "Error al cambiar la constraseña",
    });
  }
};
