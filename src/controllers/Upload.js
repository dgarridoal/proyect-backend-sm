const path = require("path");
const fs = require("fs");

const { v4: uuidv4 } = require("uuid");
const { actualizarImagen } = require("../helpers/upload-img");

const fileUpload = async (req, res) => {
  try {
    const { tipo, id } = req.params;

    const tiposValidos = ["admin", "products"];

    if (!tiposValidos.includes(tipo)) {
      return res.status(400).json({
        ok: false,
        message: "Error al subir archivo",
      });
    }

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        ok: false,
        message: "No se ha seleccionado ningún archivo",
      });
    }

    const { fileImg } = req.files;

    const nombreCortado = fileImg.name.split(".");
    const extensionFile = nombreCortado[nombreCortado.length - 1];

    const extensionesValidas = ["png", "jpg", "jpeg"];

    if (!extensionesValidas.includes(extensionFile)) {
      return res.status(400).json({
        ok: false,
        message: "Extensión de archivo no válida",
      });
    }

    const nombreArchivo = `${uuidv4()}.${extensionFile}`;

    const pathFile = `./uploads/${tipo}/${nombreArchivo}`;

    fileImg.mv(pathFile, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          ok: false,
          message: "Error al subir archivo",
        });
      }

      actualizarImagen(nombreArchivo, id, tipo);

      return res.status(200).json({
        ok: true,
        message: "Archivo subido correctamente",
        pathFile,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Error al subir el archivo",
    });
  }
};

const viewImage = async (req, res) => {
  try {
    const { tipo, pathImg } = req.params;

    const pathFile = path.join(__dirname, `../../uploads/${tipo}/${pathImg}`);

    if (fs.existsSync(pathFile)) {
      return res.sendFile(pathFile);
    }else{
        const pathFile = path.join(__dirname, `../../uploads/no-image.jpg`);
        return res.sendFile(pathFile);
    }
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Error al mostrar el archivo",
    });
  }
};

module.exports = { fileUpload, viewImage };
