import sequelize from "../config/database.js";
import { models } from "../models/index.js";

const { User } = models
const createFacebookAccount = async (data) => {
    const { name, id, picture, access_token, email } = data;
    try {
        const result = await sequelize.transaction(async (t) => {
            const user = await User.create({
                userID: id.toString(),
                userName: name,
                email,
                avatar: picture.url,
                access_token
            })
            return {
                isSuccess: true,
                user
            }
        })
        return result
    } catch (error) {
        console.log(error)
        return {
            isSuccess: false,
            error
        }
    }
}



export const authDatabase = {
    createFacebookAccount
}