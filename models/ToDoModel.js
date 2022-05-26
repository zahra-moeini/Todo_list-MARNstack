const mongosse=require("mongoose");

const todoSchema=new mongosse.Schema({
    Text:{
        type:String,
        required:true
    }
    
})