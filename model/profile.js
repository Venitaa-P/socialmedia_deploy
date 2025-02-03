const mongoose = require('mongoose')

const profileSchema = {
    username: {type: String, required:true},
    date: {type: Number, required:true},
    month: {type: String, required:true},
    year: {type: Number, required:true},
    gender: {type: String, required:true},
    profession: {type: String, required:true},
    bio: {type: String, required:true}
}
module.exports = mongoose.model("profile", profileSchema)