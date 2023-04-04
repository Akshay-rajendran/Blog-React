const express=require("express")
app=express()
const userrouter=require("./route/user")
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://database:123@cluster0.n3lgztl.mongodb.net/Blog?retryWrites=true&w=majority")
const cores=require("cors")
app.use(express.urlencoded({ extended: false }))
app.use(cores())
app.use(express.json())

app.use("/",userrouter)

 
app.listen(5000,(err,data)=>{
    if(err){
        console.log("server error,check listen");
    }else{
        console.log("server running at port 5000");
    }
})