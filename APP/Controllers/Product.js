const productModel = require('../models/Product');
/**
 * Función que obtiene todos los productos
 * @param {*} req 
 * @param {*} res
 * @returns {object} productos 
 */
const getAllProducts = (req, res) => {
    try {
        productModel.find({}, (err, products) => {
            if (err) {
                res.status(500).send({
                    status: false,
                    message: 'Error al obtener los productos',
                });
            }
            res.status(200).json({
                ok: true,
                products
            });
        });    
    } catch (error) {
        res.status(500).send({ 
            status: false,
            message: 'Error al obtener los productos',
         }); 
    }

}
/**
 * Función que obtiene un producto por su id
 * @param {*} req 
 * @param {*} res 
 * @returns {object} producto
 */
const getProductById = (req, res) => {
    try {
        const { id } = req.params;
        productModel.findById(id, (err, product) => {
            if (err) {
                res.status(500).send({
                    status: false,
                    message: 'Error al obtener el producto',
                });
            }
            res.status(200).json({
                ok: true,
                product
            });
        });    
    } catch (error) {
        res.status(500).send({ 
            status: false,
            message: 'Error al obtener el producto',
         }); 
    }
}
/**
 * Función que crea un producto 
 * @param {*} req 
 * @param {*} res 
 * @returns {object} producto
 */
const createProduct = (req, res) => {
    try {
        const { body } = req;
        const product = new productModel(body);
        product.save((err, productStored) => {
            if (err) {
                res.status(500).send({
                    status: false,
                    message: 'Error al guardar el producto',
                });
            }
            res.status(200).json({
                ok: true,
                product: productStored
            });
        });    
    } catch (error) {
        res.status(500).send({ 
            status: false,
            message: 'Error al guardar el producto',
         }); 
    }
}
/**
 * Funcion que actualiza un producto
 * @param {*} req 
 * @param {*} res 
 * @returns {object} producto
 */
const updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        productModel.findByIdAndUpdate(id, body, { new: true }, (err, productUpdated) => {
            if (err) {
                res.status(500).send({
                    status: false,
                    message: 'Error al actualizar el producto',
                });
            }
            res.status(200).json({
                ok: true,
                product: productUpdated
            });
        });    
    } catch (error) {
        res.status(500).send({ 
            status: false,
            message: 'Error al actualizar el producto',
         }); 
    }
}
/**
 * Funcion que elimina un producto
 * @param {*} req 
 * @param {*} res 
 * @returns {object} producto
 */
const deleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        productModel.findByIdAndRemove(id, (err, productRemoved) => {
            if (err) {
                res.status(500).send({
                    status: false,
                    message: 'Error al eliminar el producto',
                });
            }
            res.status(200).json({
                ok: true,
                product: productRemoved
            });
        });    
    } catch (error) {
        res.status(500).send({ 
            status: false,
            message: 'Error al eliminar el producto',
         }); 
    }
}



module.exports = {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct}