const mongoose = require('mongoose');

const bdConnect = ()=>{
    const DB_URI= process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    },
    (err,res)=>{
        if (!err) {
            console.log('Database status ----> OK');
        }else{
            console.log('Database status ----> ERROR');
        }
    }
    );
}

module.exports ={bdConnect};