const express = require("express")
const User = require("../models/users")
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
            // const getUserToDelete = await User.deleteOne(req.params.id)
            const getUser = await User.findOneAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        }catch(err){
            return res.status(500).json(err)
        }
    }else{
        return res.status.json("You can allow deleteOne")
    }
})
// get a user
Router.get("/:id",async (req,res) => {
    try{
        const getUserToDelete = await User.findById(req.params.id)
        const {password,updatedAt,...other} = getUserToDelete._doc
        res.send(other)
        // res.status(200).json(getUserToDelete)
    }catch(err){
        res.status(500).send(err)
    }
})

// follow a user
Router.put("/:id/follow",async (req,res) => {
    if(req.params.id != req.body.userId){
        try{
            const getUser = await User.findById(req.params.id)
            const getCurrentUser = await User.findById(req.body.userId)
            if(!getUser.followers.includes(req.body.userId)){
                await getUser.updateOne({$push:{followers:req.body.userId}})
                await getCurrentUser.updateOne({$push:{following:req.params.id}})
            }else{
                res.status(200).json("you are already following")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You cant follow yourself")
    }
})

// unfollow a user
Router.put("/:id/unfollow",async (req,res) => {
    if(req.params.id != req.body.userId){
        try{
            const getUser = await User.findById(req.params.id)
            const getCurrentUser = await User.findById(req.body.userId)
            if(getUser.followers.includes(req.body.userId)){
                await getUser.updateOne({$pull:{followers:req.body.userId}})
                await getCurrentUser.updateOne({$pull:{following:req.params.id}})
            }else{
                res.status(200).json("you are already unFollowing this user")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You cant unFollow yourself")
    }
})

module.exports = Router