import sequelize from "../config/database.js"
import { authDatabase } from "../databases/index.js"
import axios from "axios"
import { models } from "../models/index.js"

const { User } = models
const loginWithFacebook = async (req, res) => {
    try {
        const response = await axios.get(`https://graph.facebook.com/v18.0/oauth/access_token?client_id=${process.env.FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.AUTH_LOGIN_HOST}&client_secret=${process.env.FACEBOOK_SECRET_ID}&code=${req.body.code}`)
        const userResponse = await axios.get(`https://graph.facebook.com/me?access_token=${response.data.access_token}`)
        const userDetail = await axios.get(`https://graph.facebook.com/${userResponse.data.id}?fields=id,name,email,picture&access_token=${response.data.access_token}`)
        const user = await User.findByPk(userDetail.data.id.toString());
        if (user) {
            return res.status(200).json({
                code: 200,
                status: "success",
                data: user
            })
        }
        const data = {
            ...userDetail.data,
            access_token: response.data.access_token
        }
        const responseDB = await authDatabase.createFacebookAccount(data)
        if (!responseDB.isSuccess) {
            return res.status(500).json({
                code: 500,
                status: "error",
                data: responseDB.error
            })
        }
        return res.status(200).json({
            code: 200,
            status: "success",
            data: responseDB
        })
    } catch (error) {
        return res.status(401).json({
            code: 401,
            status: "error",
            data: null
        })
    }
}

const getFacebookInfoAccount = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const userResponse = await axios.get(`https://graph.facebook.com/me?access_token=${token}`);
        const userFinded = await User.findByPk(userResponse.data.id.toString());
        return res.status(200).json({
            code: 200,
            status: "success",
            data: userFinded.dataValues
        })
    } catch (error) {
        return res.status(401).json({
            code: 401,
            status: "error",
            data: null
        })
    }
}


export const authController = {
    loginWithFacebook,
    getFacebookInfoAccount
}