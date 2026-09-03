const mongoose = require('mongoose')
// const connection = mongoose.connect('mongodb://0.0.0.0/men').then(() => {
//     console.log("connected to data base")    
// })
function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
}
module.exports = connection
