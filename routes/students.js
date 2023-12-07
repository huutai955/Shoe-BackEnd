import express from "express";

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Get all students")
})


router.get('/:id', (req, res) => {
    res.send(`Get student by id: ${req.params.id ? req.params.id : ''}`)
})




export default router