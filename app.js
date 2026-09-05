const express = require("express");
const noteModel = require("./models/note.model")
const app  = express();
app.use(express.json());
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
app.post("notes", async (req, res) => {
    const data = req.body
    noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({ 
        message: "Note created"
    })
})
module.exports = app