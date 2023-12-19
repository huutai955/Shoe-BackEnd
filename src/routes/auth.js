import axios from "axios";
import express from "express";
import * as dotenv from 'dotenv'
dotenv.config();

const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const response = await axios.get(`https://graph.facebook.com/v18.0/oauth/access_token?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.AUTH_LOGIN_HOST}&client_secret=${process.env.FACEBOOK_SECRET_ID}&code=${req.body.code}`)
        const userResponse = await axios.get(`https://graph.facebook.com/me?access_token=${response.data.access_token}`)
        const userDetail = await axios.get(`https://graph.facebook.com/${userResponse.data.id}?fields=id,name,email,picture&access_token=${response.data.access_token}`)
        return res.status(200).json({
            code: 200,
            status: "success",
            data: {
                ...userDetail.data,
                access_token: response.data.access_token
            }
        })
    } catch (error) {
        return res.status(401).json({
            code: 401,
            status: "error",
            data: null
        })
    }
})

router.get('/me', () => {
    
})


router.get('/callback', (req, res) => {
    console.log("hehe")
    res.send("callback")
})

export default router