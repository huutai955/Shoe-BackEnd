import express from 'express'
import { models } from '../models/index.js';
import sequelize from '../config/database.js';
const { Product, Size } = models
// // import Product from '../models/products.js';
// // import Size from '../models/size.js';

const router = express.Router();


router.get('/', async (req, res) => {
    try {

        const result = await sequelize.transaction(async (t) => {

            const product = await Product.create({
                productName: 'Testing 2'
            }, { transaction: t })
            const size = await Size.create({
                ID: 5
            }, { transaction: t })

            return {
                product: product,
                size: size
            };
        });
        
        res.send("Success")

        // If the execution reaches this line, the transaction has been committed successfully
        // `result` is whatever was returned from the transaction callback (the `user`, in this case)

    } catch (error) {
        console.log(error)
        // If the execution reaches this line, an error occurred.
        // The transaction has already been rolled back automatically by Sequelize!
        res.send("Error")
    }
})



export default router