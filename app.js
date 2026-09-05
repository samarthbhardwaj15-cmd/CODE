const express = require("express");
const multer = require('multer');
const uploadFile = require("./services/storage.service")
const postModel = require("./model/post.model")
const app  = express();
app.use(express.json());
// const noteModel = require("./models/note.model")
// const notes = [];

// app.post('/notes', (req, res) => {b   
//     notes.push(req.body);
//     res.status(201).json({
//         message: "note created successfully",
//         note: req.body
//     // console.log(req.body);    
//     }); 
// });
// app.get('/notes', (req, res) => {
//     res.status(200).json({
//         message: "notes fetched succesfully",
//         notes: notes
//     });
// });
// app.delete('/notes/:index', (req, res) => {
//     const index = req.params.index /* 1 */
//     delete notes[index] 
//     res.status(200).json({
//         message: "note deleted successfully"
//     })
// })
// app.patch("/notes/:index", (req, res) => {
//     const index = req.params.index
//     const description = req.body.description

//     notes[ index ].description = description
//     res.status(200).json({ 
//         message: "note updated successfully"
//     })
// })
// app.post("notes", async (req, res) => {
//     const data = req.body
//     noteModel.create({
//         title: data.title,
//         description: data.description
//     })
//     res.status(201).json({ 
//         message: "Note created"
//     })
// })
// app.get('/notes', async (req, res) => {
//     const notes = await noteModel.findOne({
//                 title: "test_title"
//     })
//     res.status(200).json({
//         message: "notes fetched succesfully",
//         notes: notes
//     })
// });
// app.delete("/notes/:id", async (req, res) => { 
//     const id =  req.params.id
//     await noteModel.findOneAndDelete({ 
//         _id: id
//     })
//     res.status(200).json
// })
// app.patch("/notes/:id", async (req, res) => {
//     const id = req.params.id
//     const description = req.body.description

//     await noteModel.findOneAndDelete({ _id: id }, { description: description })

//     res.status(200).json({ 
//         message: "Note updated succesfully"
//     })
// })
const upload = multer({storage: multer.memoryStorage() })
app.post('/create-post', XMLHttpRequestUpload.single("image"), async(req, res) => {
    console.log(req.body);
    console.log(req.file);
    
    const result = await uploadFile(req.file.buffer)
    console.log(result);
})

module.exports = app;