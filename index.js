// console.log('Hello');

// const catMe = require('cat-me')
// console.log(catMe());

// const http = require('http')

// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     // res.end('Hello world')
//     if (req.url == "/about") {
//         res.end("The about page")
//     }
//     if (req.url == "/profile") {
//         res.end("The profile page")
//     }
// })


const express = require('express');
const index = express()

app.set("view engine", 'ejs')
index.get('/', (req, res) => {
    res.send('Hello World')
})
index.get('/about', (req, res)=>{
    res.send('About page')
})
index.listen(3000)
