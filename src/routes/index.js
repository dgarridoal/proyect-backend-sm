const express=require('express');
const router=express.Router();
const fs=require('fs');

const pathRouter=`${__dirname}`;

const fileExcludes=['index'];

const removeExtension=(fileName)=>{
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file)=>{

    const fileName=removeExtension(file);
    const skip=fileExcludes.includes(fileName);
    if (!skip) {
        router.use(`/${fileName}`,require(`./${fileName}`));
        console.log('Ruta cargada ---->', fileName);
    }

    
});

router.use('*',(req,res)=>{
   return res.status(404).send({error:'Route Not found'});
});




module.exports=router;