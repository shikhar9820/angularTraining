const express = require('express');
const app = express();
const router=express.Router();
const mongoose  = require('mongoose');
var studentRoutes = require("./routes/student");
const cors=require('cors');
app.use(cors());
const PORT = 9000;

app.use(express.json());
app.use(express.static('client'));

mongoose.connect('mongodb+srv://Shikhar:9350072588@cluster0.bcfzo.mongodb.net/data?retryWrites=true&w=majority',{ useNewUrlParser:true, useUnifiedTopology: true})
mongoose.connection.on('connected',()=>{console.log("conneted to mongodb ")
})
mongoose.connection.on('error',(err)=>{
    console.log("not connected",err)
}) 
app.use(studentRoutes);
//app.use(require('./controllers/router'))

app.listen(PORT,()=>{
    console.log("server is running on",PORT);
})