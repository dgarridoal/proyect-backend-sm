require('dotenv').config();

const express= require('express');
const cors=require('cors');

const app = express();
const PORT=process.env.PORT || 3000;
const {bdConnect}=require('./Config/database');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));



bdConnect();
app.use('/api/auth',require('./APP/Routes/auth'));
app.use('/api/category',require('./APP/Routes/category'));
app.use('/api/product',require('./APP/Routes/product'));
app.use('/api/user',require('./APP/Routes/user'));


app.listen(PORT,()=>{
    console.log('Server status ---> OK ', PORT);
});