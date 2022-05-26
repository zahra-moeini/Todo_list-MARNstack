const express=require("express");

const mongoose=require("mongoose");

require("dotenv").config();

const cors=require("cors");

const routes=require("./routes/ToDoRoures");

// const { type } = require("express/lib/response");

const app=express();
app.use(express.json())
app.use(cors())

app.use(routes)

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlparser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Mongodb connectd..."))
.catch((err)=>console.error(err));



app.listen(5000,()=>{
    console.log("App listen on port 5000!")
});