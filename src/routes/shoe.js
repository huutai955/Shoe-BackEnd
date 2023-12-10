import express from 'express'
import Products from '../models/products.js';
// import { shoeController } from '../controllers';
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const newProduct = await Products.create(req.body)
        console.log(newProduct)
        res.status(201).json({
            status: 'Success',
            data: JSON.stringify(newProduct)
        })
    } catch (error) {
        console.log(error)
        res.send("Errors")
    }
})


export default router