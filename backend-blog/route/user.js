const express=require("express")
const { adduser,userlogin} = require("../controller/usercontroller")
const { addblog ,allblog,singleblog} = require("../controller/blogcontroller")

const router=express.Router()

router.post("/adduser",adduser)
router.post("/userlogin",userlogin)
router.post("/addblog",addblog)
router.get("/getallblog",allblog)
router.get("/SingleAuthorAddedBlog/:id",singleblog)

module.exports=router
