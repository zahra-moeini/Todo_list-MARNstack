const req = require("express/lib/request");
const res = require("express/lib/response");
const ToDoModel=require("../models/ToDoModel");
module.exports.getToDo=async(req,res)=>{
    const Todo=await ToDoModel.find();
    res.send(Todo);
}
module.exports.saveToDo=async(req,res)=>{
    const {text}=req.body;
    ToDoModel
    .create({text})
    .then(()=>res.set(201).send("Added successfully...."))
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo=(req,res)=>{
    const {_id}=req.body;

    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.set(201).send("Added Successfully ...."))
    .catch((err)=>console.log(err))
}

module.exports.updateToDo=(req,res)=>{
    const {_id,text}=req.body;

    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.set(201).send("Update successfully...."))
    .catch((err)=>console.log(err))
}