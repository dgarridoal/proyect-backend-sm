const userModel = require("../models/User");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const user = await userModel.findByIdAndUpdate(id, body, { new: true });

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Error al actualizar el usuario",
      });
    }

    return res.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: 'Error al actualizar el usuario',
    });
  }
};

module.exports = { updateUser };
