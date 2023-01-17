const express = require("express")
const postModel = require("../models/post")
const Router = express.Router()

// createPost
Router.post("/",async (req,res) =>{
const createPost = await new postModel(req.body)
try{
    const newPost = await createPost.save()
    res.status(200).json(newPost)
}catch(error){
    res.send(400).json(error)
}
    
})

// updatePost
Router.put("/:id",async(req,res) => {
    try{
        const getPost = await postModel.findById(req.params.id)
        // res.send(getPost)
        if(getPost.userId == req.body.userId){
            await getPost.updateOne({$set:req.body})
            res.status(200).json("post has been updated")
        }else{
            res.status(403).json("you can update only your post")
        }
    }catch(err){
        res.status(500).json(err)
    }
})

// Delete Post
 Router.delete("/:id",async(req,res) => {
    try{
        const getPost = await postModel.findById(req.params.id)
        if(getPost.userId == req.body.userId){
            await getPost.deleteOne()
            res.status(200).json("post has been delete")
        }else{
            res.status(403).json("you can delete only your post")
        }
    }catch(err){
        res.status(500).json(err)
    }

})   
// like a post
Router.put("/:id",async(req,res) => {
    
})
// // get a post
// Router.get("/",async(req,res) => {
    
// }
// // get timeline post
// Router.get("/",async(req,res) => {
    
// }

module.exports = Router
