const express = require("express")
const postModel = require("../models/post")
const User = require("../models/users")
const Router = express.Router()

// createPost
Router.post("/", async (req, res) => {
    const createPost = await new postModel(req.body)
    try {
        const newPost = await createPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.send(400).json(error)
    }

})

// updatePost
Router.put("/:id", async (req, res) => {
    try {
        const getPost = await postModel.findById(req.params.id)
        // res.send(getPost)
        if (getPost.userId == req.body.userId) {
            await getPost.updateOne({ $set: req.body })
            res.status(200).json("post has been updated")
        } else {
            res.status(403).json("you can update only your post")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete Post
Router.delete("/:id", async (req, res) => {
    try {
        const getPost = await postModel.findById(req.params.id)
        if (getPost.userId == req.body.userId) {
            await getPost.deleteOne()
            res.status(200).json("post has been delete")
        } else {
            res.status(403).json("you can delete only your post")
        }
    } catch (err) {
        res.status(500).json(err)
    }

})
// like a post
Router.put("/:id/like", async (req, res) => {
    try {
        const getPost = await postModel.findById(req.params.id)
        if (!getPost.likes.includes(req.body.userId)) {
            await getPost.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json("Post has been liked")
        } else {
            await getPost.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("you've disliked")
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
// get a post
Router.get("/:id", async (req, res) => {
    try {
        // const getPost =  await postModel.findById(req.body.userId)
        const getPost = await postModel.findById(req.params.id)
        res.status(200).json(getPost)
    } catch (err) {
        res.status(200).json(err)
    }
})

// get timeline post
Router.get("/timeline/all", async (req, res) => {
    try {
        const getCurrentUser = await User.findById(req.body.userId)
        const usersPost = await postModel.find({ userId: getCurrentUser._id })
        res.send(getCurrentUser)
        // const friendPost = await Promise.all(
        //     getCurrentUser.following.map((friendId) =>{
        //         postModel.find({userId:friendId})
        //     })
        // )
        // res.status(200).json(usersPost.concat(...friendPost))
    } catch (err) {
        res.status(200).json(err)
    }
})

module.exports = Router