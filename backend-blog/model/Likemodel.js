const mongoose = require("mongoose");
const likeschema = new mongoose.Schema({
    blogid: {
        type: String
    },
    like: {
        type: Array,
        default: []
    }


})

const Likemodel = mongoose.model("Likes", likeschema);
module.exports = Likemodel