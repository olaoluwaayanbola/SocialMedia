const express = require("express")
const userModel = require("../models/users")
const Router = express.Router()

// Register User
Router.get("/register", async (req,res) => {
    try{
        const User = await new User({
        username:"james",
        email:"james@gmail.com",
        password:"12345"
    })}catch(err){
        console.log(err)
    }
    await User.save()
    res.send("ok")
})
module.exports = Router