const CommentModel=require("../model/Commentmodel")
const blogmodel = require("../model/blogmodel")


const addcomment=async(req,res)=>{
try {
    req.body.dateposted=new Date().toDateString()
    let add=await CommentModel.create(req.body)
    res.json({
        success:true,
        msg:"comment added",
        add
    })
} catch (error) {
    res.json({
        success:false,
        msg:"cannot add comment"
    })
    console.log(error);
}
}

const getcomment=async(req,res)=>{
    try {
        let comments=await CommentModel.find({blogid:req.params.id}).sort({$natural:-1})
        res.json({
            succes:true,
            msg:"comments",
            comments
        })
    } catch (error) {
        res.json({
            success:true,
            msg:"cannot get comments"
        })
    }
}

module.exports={
    addcomment,getcomment
}