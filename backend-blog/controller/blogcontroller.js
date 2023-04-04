const blogModel = require("../model/blogmodel")

const addblog=async(req,res)=>{
    try {
        
        let blog=await blogModel.create(req.body)
        console.log("blog",blog);
        res.json({
            success:true,
            msg:"blog added"
        })
    
        
    } catch (error) {
       res.json({
        success:false,
        msg:"cannot post"
       }) 
    }
 }

 
 const allblog=async(req,res)=>{
    try {
       let allblog=await blogModel.find({})
       res.json({allblog})
    } catch (error) {
       res.json({success:false,
       msg:"cannot get all task"})
    }
    }   

const singleblog=async(req,res)=>{

    try {
        let singleblog=await blogModel.find({authorid:req.params.id})
        res.json({
            success:true,
            msg:"user added blogs",
            singleblog
        })
        
    } catch (error) {
        res.json({
            success:false,
            msg:"cant get user added blog"
        })
    }
}


      
module.exports={addblog, allblog,singleblog}