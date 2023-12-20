import axios from "axios";
import express from "express";
import * as dotenv from 'dotenv'
import { authController } from "../controllers/index.js";
dotenv.config();

const router = express.Router();

router.post('/facebook/login', authController.loginWithFacebook)

router.get('/me/facebook', authController.getFacebookInfoAccount)


router.get('/callback', (req, res) => {
    console.log("hehe")
    res.send("callback")
})

export default router