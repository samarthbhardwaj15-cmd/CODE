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
// const morgan = require('morgan')
// const index = express()
// const dbConnection = require('./db')
// const userModel = require('./use')

// index.use(morgan('dev'))

// index.use(express.json())
// index.use(express.urlencoded({ extended: true}))
// index.use(express.static("public"))

index.set("view engine", 'ejs'); 
// index.use((req, res, next) => {
//     console.log("this is middleware")
//     const a = 3
//     const b = 2
//     console.log(a + b)
//     return next()
    
// })
// index.get('/', (req, res) => {
//     res.render('index');
// //    res.send('Hello World')
// })
// index.get('/', 
//     (req, res, next) => {
//         const a = 5;
//         const b = 10;
//         console.log(a + b)

//         next()
//     }
//     , (req, res) => { 
//         res.render('index') 
//     }) 
// index.get('/about', (req, res)=>{
//     res.send('About page')
// })
// index.get('/index', (req, res) => {
//     res.render('index')
// })
// index.get('/get-form-data', (req, res) => {
//     console.log(req.query)
//     res.send('data received')
// })
// index.post('/register', async (req, res) => {

//     const { username, email, password } = req.body

//     const newUser = await userModel.create({
//         username: username,
//         email: email,
//         password: password
//     })
//     res.send('user register') //newUser
// })
// index.get('/get-users', (req, res) => {
//     userModel.findOne({
//         username: 'c'
//     }).then((user) => {
//         res.send(user)
//     })
// })
// index.get('/update-user', async (req, res) => {
//     await userModel.findOneAndUpdate({
//     userModel: 'a'
//     }, {
//     email: "c@c.com"
//     })
//     res.send("user update")
// })

// index.get('/delete-user', async (req, res) => {
//     await userModel.findOneAndUpdate({
//         username: "a"
//     })
//     res.send('user deleted')

// index.post('/get-form-data', (req, res) => {
//     console.log(req.body)
//     res.send('data received')
// })

// })
index.use('/user', userRouter)
index.listen(3000, () => {
    console.log("server is running on port 3000")
});

