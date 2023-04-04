const mongoose=require("mongoose"); 
const blogschema=new mongoose.Schema({
    blogname:{
        type:String,
        required:true,
        // unique:true
    },
    blogdiscription:{
        type:String,
        required:true
    },
    dateposted:{
        type:String,
        required:true,
        
    },
    authorid:{
        type:String,
        required:true
    
    },
    authorname:{
        type:String,
        required:true
    }   
    
})

const blogmodel=mongoose.model("Blog",blogschema);
module.exports=blogmodel