const express=require("express")
const { adduser,userlogin} = require("../controller/usercontroller")
const { addblog ,allblog,singleblog,deletesingleblog,editsignleblog,catagory} = require("../controller/blogcontroller")

const router=express.Router()

router.post("/adduser",adduser)
router.post("/userlogin",userlogin)
router.post("/addblog",addblog)
router.get("/getallblog",allblog)
router.get("/SingleAuthorAddedBlog/:id",singleblog)
router.delete("/delete/:id",deletesingleblog)
router.patch("/edit/:id",editsignleblog)
router.get("/catagory/:catagory",catagory)

module.exports=router
