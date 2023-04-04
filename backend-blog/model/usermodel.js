const mongoose=require("mongoose"); 
const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        // required:true
    },
    password:{
        type:String,
        required:true,
        
    },
   
    
})

const usermodel=mongoose.model("userinfo",userschema);
module.exports=usermodel