import express from "express";

const router = express.Router();

router.post('/login', (req, res) => {
    console.log(req.body)
    res.status(200).json({
        data: "Hhee"
    })
})

export default router