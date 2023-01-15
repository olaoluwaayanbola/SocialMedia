const express = require("express")
const userModel = require("../models/users")
// Protects User Password
const bcrypt = require("bcrypt")
const Router = express.Router()

// Register User
Router.post("/register", async (req,res) => {
    try{
        // basic stringinify of data you are sending
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        
        //  generates new user with password
        const user = await new userModel({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })
        
        // save user and return user
        const newUser = await user.save()
        res.status(200).json(newUser)
    }catch(err){
        console.log(err)
    }
    res.send("Data has been sent to mongoDB")
})

// Login
Router.post("/login",async(req,res) => {
    try{
        const user = await userModel.findOne({
        email:req.body.email,
        // password:req.body.password
        })
        !user && res.status(404).json("user not found")
        // res.status(200).send("you can enter")
        const validPassword = await bcrypt.compare(req.body.password,user.password)
        !validPassword && res.status(404).send("Incorrect password")
        res.status(200).send(user)
        
    }catch(err){
        res.status(500).json(err)
    }  
})

module.exports = Router