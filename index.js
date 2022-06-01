require('dotenv').config();

const express= require('express');
const cors=require('cors');

const app = express();
const PORT=process.env.PORT || 3000;
const {bdConnect}=require('./config/database');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + ''));
app.use(express.static('src'));


bdConnect();
app.use('/api',require('./src/routes/index.js'));


app.listen(PORT,()=>{
    console.log('Server status ---> OK ', PORT);
});