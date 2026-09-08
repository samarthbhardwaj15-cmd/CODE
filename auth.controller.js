const userModel = require("../models/user.model");
async function registerUser(req, res) {
    const { username, email, password, role =  } = req.body;
    
    const user = await userModel.create({
        username, email, password
    })
}
module.exports = { registerUser   }