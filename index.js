require('dotenv').config();

const express= require('express');
const cors=require('cors');

const app = express();
const PORT=process.env.PORT || 3000;
const {bdConnect}=require('./src/config/database');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname));
app.use(express.static('src'));


bdConnect();
app.use('/api/auth',require('./src/routes/Auth'));
app.use('/api/category',require('./src/routes/Category'));
app.use('/api/product',require('./src/routes/Product'));
app.use('/api/user',require('./src/routes/User'));


app.listen(PORT,()=>{
    console.log('Server status ---> OK ', PORT);
});