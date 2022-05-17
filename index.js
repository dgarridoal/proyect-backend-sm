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
app.use('/api',require('./APP/Routes/index'));


app.listen(PORT,()=>{
    console.log('Server status ---> OK ', PORT);
});