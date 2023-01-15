const express = require("express")
const User = require("../models/users")
const bcrypt = require("bcrypt")
const Router = express.Router()

// update user
Router.put("/:id",async (req,res) => {
    // const data =  await User.findById(req.params.id)
    // const userInfo = await User.findById({id:req.params.id})
    console.log(req.body.userId,req.params.id)
    
    // if(req.body.userId == req.params.id){
    //     console.log(req.body.password,"undefined")
        // if(req.body.password){
        //     try{
        //         const salt = await bcrypt.genSalt(10)
        //         req.body.password = await bcrypt.hash(req.body.password,salt);
        //     }catch(err){
        //         return res.status(500).json(err)
        //     }
        // }
        //     try{
        //         const user = await User.findById(req.params.id,{
        //         $set:req.body,
        //     })
        //     res.status(200).json(user)
        // }catch(err){
        //     return res.status(500).json(err)
        // }
    }else{
        return res.status(403).json("cant update account")
    }
})
// delete user
Router.get("/",(req,res) => {
    res.send('hello')
})
// get a user
Router.get("/",(req,res) => {
    res.send('hello')
})
module.exports = Router