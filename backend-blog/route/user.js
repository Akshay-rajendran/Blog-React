const express=require("express")
const { adduser,userlogin} = require("../controller/usercontroller")
const { addblog ,allblog,singleblog,deletesingleblog,editsignleblog,catagory,AuthorFullBlog} = require("../controller/blogcontroller")
const { addcomment,getcomment } = require("../controller/CommentController")
const { Likes,getlike } = require("../controller/LikeController")

const router=express.Router()

router.post("/adduser",adduser)
router.post("/userlogin",userlogin)
router.post("/addblog",addblog)
router.get("/getallblog",allblog)
router.get("/SingleAuthorAddedBlog/:id",singleblog)
router.delete("/delete/:id",deletesingleblog)
router.patch("/edit/:id",editsignleblog)
router.get("/catagory/:catagory",catagory)
router.post("/addcomment",addcomment)
router.get("/getcomments/:id",getcomment)
router.get("/authorfullblog/:id",AuthorFullBlog)
router.post("/likes",Likes)
router.get("/getlike",getlike)

module.exports=router
