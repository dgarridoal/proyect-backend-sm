require('dotenv').config();

const express= require('express');
const cors=require('cors');

const app = express();
const PORT=process.env.PORT || 3000;
const {bdConnect}=require('./Config/database');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + ''));
app.use(express.static('APP'));


bdConnect();
app.use('/api',require('./APP/Routes/index.js'));


app.listen(PORT,()=>{
    console.log('Server status ---> OK ', PORT);
});