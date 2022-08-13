const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
const { generarJwt } = require("../helpers/jwt");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email, password, confirmPassword, newPassword } =
      req.body;

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Error al actualizar el usuario",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        status: false,
        message: "La contraseña es incorrecta",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        status: false,
        message: "Las contraseñas no coinciden",
      });
    }

    if (!newPassword) {
      user.nombre = nombre;
      user.apellido = apellido;
      user.email = email;

      const userUpdate = await userModel.findByIdAndUpdate(id, user, {
        new: true,
      });

      return res.status(200).json({
        status: true,
        user: userUpdate,
      });
    } else {
      const salt = bcrypt.genSaltSync(10);
      const newPasswordHash = bcrypt.hashSync(newPassword, salt);
      user.nombre = nombre;
      user.apellido = apellido;
      user.email = email;
      user.password = newPasswordHash;

      const userUpdate = await userModel.findByIdAndUpdate(id, user, {
        new: true,
      });
      const token = await generarJwt(user.id);

      return res.status(200).json({
        status: true,
        user: userUpdate,
        token
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al actualizar el usuario",
    });
  }
};

module.exports = { updateUser };
