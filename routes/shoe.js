import express from 'express'
import { shoeController } from '../controllers/index.js'
const router = express.Router();


router.get("/", shoeController.createNewShoe)


export default router