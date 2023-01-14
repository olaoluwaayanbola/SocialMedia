const express = require("express")
const userModel = require("../models/users")
const Router = express.Router()

// Register User
Router.get("/register", async (req,res) => {
    const user = await new userModel({
        username:"jamesjordan775",
        email:"jamesjordan712@gmail.com",
        password:"12374ggx5"
    })
    await user.save()
    res.send("okkk")
})
module.exports = Router