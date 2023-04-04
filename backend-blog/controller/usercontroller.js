const { userInfo } = require("os")
const userModel = require("../model/usermodel")
const bcrypt = require('bcrypt')


const adduser = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        let user = await userModel.create(req.body)
        console.log("user", user);


        res.json({
            success: true,
            message: "useradded"
        })
    } catch (error) {
        res.json({
            success: false,
            message: "try another username"
        })
        console.log(error);
    }

}


const userlogin = async (req, res) => {
    console.log(req.body.loginpassword, req.body.loginusername);
    try {
        let user = await userModel.findOne({ username: req.body.username })
        console.log("user", user);
        if (user) {
            const userpasswordcheck = await bcrypt.compare(req.body.password, user.password)

            if (userpasswordcheck) {
                res.json({
                    success: true,
                    msg: "logined",
                    user
                })
            } else {
                 res.json({
                    success:false,
                    msg:"not logined"
                 })
        }}else{
            res.json({
                success:false,
                msg:"not signin"
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "server error"
        })
    }
}



module.exports = { adduser, userlogin }