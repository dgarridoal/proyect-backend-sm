const express=require('express');
const router=express.Router();
const {check}=require('express-validator');

const { updateUser } = require('../Controllers/User');

router.put('update/:id',[
    check("email", "El email es obligatorio").not().isEmpty(),
],updateUser);


module.exports = router;