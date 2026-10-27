const mongoose = require("mongoose");
// const noteSchema = new mongoose.Schema({
//     title: String,
//     description: String,
// })
// const noteModel = mongoose.model("note", noteSchema)

const postSchema = new mongoose.Schema({
    title: String,
    caption: String,
})
const postModel = mongoose.model("post", postSchema)