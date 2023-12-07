import express from "express";
import { body } from 'express-validator';
import { userController } from "../controllers/index.js";

const router = express.Router();


router.get('/', userController.getallUser)


router.get('/:id', userController.getDetailUser)


router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    userController.userLogin)

router.post('/register', userController.userRegister)



export default router