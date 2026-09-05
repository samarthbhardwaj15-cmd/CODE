// const catme = require('cat-me');
// console.log(catme());
const express = require("express");
const app = require("./src/app")
const app  = express()
app.use(express.json());
// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});


