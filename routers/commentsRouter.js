const express = require("express")

const router = express.Router()

const commentDb = require("../models/comments.model")

router.get("/", (req,res) => {
    commentDb
    .find()
    .then(comment => {
        res.status(200).json(comment)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Could not find your comment`})
    })
})

router.post("/", (req,res) => {
    const addComments = req.body
commentDb
    .add(addComments)
    .then(comments => {
        res.status(201).json(comments)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Could not add your comment`})
    })
})

router.put("/:id", (req,res) => {
    const { id } = req.params
    const changes = req.body

    commentDb
    .update(changes, id)
    .then(updateComment => {
        res.status(200).json(updateComment)
    })
    .catch(error => {
        res.status(500).json({errorMessage:`${error} Could not update your comment`})
    })
})

router.delete("/:id", (req,res) => {
    const { id } = req.params

    commentDb
    .remove(id)
    .then(delComment => {
        res.status(200).json(delComment)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:`${error} Could not remove your comment`})
    })
})




module.exports = router