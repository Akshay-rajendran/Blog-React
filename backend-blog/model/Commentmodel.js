const mongoose=require("mongoose"); 
const commentschema=new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    blogid:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    dateposted:{
        type:String
    }
})

const Commentmodel=mongoose.model("Comments", commentschema);
module.exports=Commentmodel