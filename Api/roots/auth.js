const express = require("express")
const Router = express.Router()

Router.get("/",(req,res) => {
    res.send('hello')
})
module.exports = Router