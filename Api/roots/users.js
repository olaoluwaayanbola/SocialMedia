const express = require("express")
const User = require("../models/users")
const db = require("mongodb").Db
const bcrypt = require("bcrypt")
const Router = express.Router()

// update user
Router.put("/:id",async (req,res) => {
    // const data =  await User.findById(req.params.id)
    // const userInfo = await User.findById({id:req.params.id})    
    if(req.body.userId == req.params.id){
        console.log(req.body.password,"undefined")
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(500).json(err)
            }
        }
            try{
                // const getUser = await users.updateOne(req.body.userId,{$set:req.body})
                const getUser = await User.findByIdAndUpdate(req.body.userId,{
                    $set:req.body
                })
                res.status(200).json("Data base has been updated")
        }catch(err){
            console.log(err)
            return res.status(500).json(err)
        }
    }else{
        return res.status(403).json("cant update account")
    }
})
// delete user
Router.delete("/:id", async (req,res) => {
    if(req.body.userId == req.params.id || req.User.isAdmin){
        try{
            const getUserToDelete = await User.deleteOne(req.body.userId)
            res.status(200).send("User has been deleted")
        }catch(err){
            res.status(500).send(err)
        }
    }
})
// get a user
Router.get("/",async (req,res) => {
    if(req.body.userId == req.params.id || req.User.isAdmin){
        try{
            const getUserToDelete = await User.deleteOne(req.body.userId)
            res.status(200).send("User has been deleted")
        }catch(err){
            res.status(500).send(err)
        }
    }
})
module.exports = Router