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

const deletesingleblog=async(req,res)=>{
    try {
        let deleteblog=await blogModel.deleteOne({_id:req.params.id})
        res.json({
            success:true,
            msg:"single blog deleted ",
            deleteblog
        })
    } catch (error) {
        res.json({
            success:false,
            msg:"cannot dlete blog",
        

        })
        console.log(error);
        
    }

}

const editsignleblog=async(req,res)=>{
    try {
        await blogModel.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
        res.json({success:true,
            msg:"successfully update"}
            )
    } catch (error) {
        res.json({
            success: false,
            msg: "cant updated,something went wrong in server"
        })
    }
}
const catagory=async(req,res)=>{
    let response= await blogModel.find({catagory:req.params.catagory})
    try {

       res.json({
        success:true,
        message:"success",
        response
       })
      
        
        
    } catch (error) {
        res.json({
            success:false,
            msg:"couldnt get items"
        })
        console.log(error);
    }
}
const AuthorFullBlog=async(req,res)=>{
    try {
        let authorAllBlog=await blogModel.find({authorid:req.params.id})
        console.log( "full blogs of author", authorAllBlog);
        res.json({
            succes:true,
            msg:"get all blogs of a Author",
            authorAllBlog
        })
    } catch (error) {
        res.json({
            success:true,
            msg:"couldnt get Authors blogs "
        })
        console.log(error);
    }
}

      
module.exports={addblog, allblog,singleblog,deletesingleblog,editsignleblog,catagory,AuthorFullBlog}