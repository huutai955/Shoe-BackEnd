import express from 'express'
import { models } from '../models/index.js';
import sequelize from '../config/database.js';
import { shoeController } from '../controllers/shoe.js';
const { Product, Size } = models
// // import Product from '../models/products.js';

const router = express.Router();

router.post('/', shoeController.createNewShoe)






export default router