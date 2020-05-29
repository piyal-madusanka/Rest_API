const express=require('express');
const router=express.Router();

const mongoose = require('mongoose');
const db="mongodb+srv://dbPiyal:pboss@event-4qzx8.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(db,(err) =>{
if(err){
    console.error('Error !'+err);
}else{
    console.log('Connected to mongodb');
}


});


router.get('/',(req,res)=>{
res.send("api rouuts");

});
module.exports=router;