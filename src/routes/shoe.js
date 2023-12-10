import express from 'express'
import { Product, Size } from '../models/products.js';

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const newProduct = await Products.create(req.body)
        console.log(newProduct)
        res.status(201).json({
            status: 'Success',
            data: newProduct
        })
    } catch (error) {
        console.log(error)
        res.send("Errors")
    }
})


router.get("/", async (req, res) => {
    const findProduct = Products.findOne({
        where: {
            productName: 'Testing'
        }
    })
    res.send("Hello World")
})


router.get("/createsize", async (req, res) => {
    const size = await Sizes.create({
        sizeID: 4,
        size: 4
    })
    res.send("Hello world")
})

// router.get('/createproductsize', async (req, res) => {
//     await ProductSizes.create({
//         productID: '329519fa-a17a-4eb9-afe2-3c06771e987a',
//         sizeID: 3.5,
//         price: 300
//     })
//     res.send('Create product size')
// })


// router.get('/getdetailproduct', async (req, res) => {
//     const product = await Products.findOne({
//         where: {
//             productID: "ccc735e3-44b3-4dbc-89ad-7a5aa3b15e80"
//         }
//     });
//     console.log(product)
//     res.send("Get detail product")
// })


router.get('/createproduct', async (req, res) => {
    const product = await Product.create({
        productName: "Testing 5",
        releaseDate: '2023-02-07'
    });
    const size = await Size.create({
        sizeID: 4
    })
    await product.addSizes(size, { through: { price: 300 } });


    res.send("Create product")
})

export default router