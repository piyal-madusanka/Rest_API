const express = require('express');
const bodyparser=require('body-parser');
const PORT= 3000;

const app=express();

app.use(bodyparser.json());
const api=require('./routs/api');
app.use('/api',api);

app.get('/',(req,res)=>{
res.send("hello fromserver");
})

app.listen(PORT,()=>{
    console.log("server is listerning at port "+PORT);
    
});