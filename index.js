require('dotenv').config();

const express= require('express');
const cors=require('cors');
const expressFileUpload = require('express-fileupload');

//Config
const app = express();
const PORT=process.env.PORT || 3000;
const {bdConnect}=require('./src/config/database');
bdConnect();


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname));
app.use(express.static('src'));
app.use(expressFileUpload());

//Routes
app.use('/api/auth',require('./src/routes/Auth'));
app.use('/api/category',require('./src/routes/Category'));
app.use('/api/product',require('./src/routes/Product'));
app.use('/api/user',require('./src/routes/User'));
app.use('/api/search',require('./src/routes/Search'));
app.use('/api/upload',require('./src/routes/upload'));

// Start server
app.listen(PORT,()=>{
    console.log('Server status ---> OK ', PORT);
});