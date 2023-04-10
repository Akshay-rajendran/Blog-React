const LikeModel = require("../model/Likemodel")


const Likes = async (req, res) => {
    let likes = await LikeModel.findOne({ blogid: req.body.blogid })
    if (likes) {

        if (likes.like.includes(req.body.userid)) {
            res.json({
                success: true,
                msg: "you are already liked"
            })

        } else {
            let dolike = await LikeModel.findOneAndUpdate({ blogid: req.body.blogid }, { $push: { like: req.body.userid } })
            res.json({
                success: true,
                msg: "liked",
                dolike
            })
        }

    } else {
        let createlike = await LikeModel.create({ blogid: req.body.blogid, like: [req.body.userid] })
        res.json({
            success: true,
            msg: "created like",
            createlike
        })

    }

}


const getlike=async(req,res)=>{
 try {
    let likecount=await LikeModel.findOne({blogid:req.params.id})
    let count=likecount.like.length
    res.json({
        success:true,
        msg:"likes count",
        count
    })
 } catch (error) {
    res.json({
        success:false,
        msg:'couldnt get likes count'
    })
    console.log(error);
 }

}




module.exports = { Likes,getlike }