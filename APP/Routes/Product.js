const express=require('express');
const router=express.Router();
const {validarJWT}=require('../middlewares/validar-jwt');
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct}=require('../controllers/product');

router.get('/',validarJWT,getAllProducts);

router.get('/:id',validarJWT, getProductById);
 
router.post('/',validarJWT,createProduct);

router.put('/:id',validarJWT,updateProduct);

router.delete('/:id',validarJWT,deleteProduct);

module.exports = router;