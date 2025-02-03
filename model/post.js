const mongoose = require('mongoose')

const postSchema = {
    username: {type: String, required:true},
    postid: {type: Number, required:true},
    p_name: {type: String, required:true},
    captions: {type: String, required:true},
    
}
module.exports = mongoose.model("post", postSchema)