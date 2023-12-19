import sequelize from "../config/database.js";
import { models } from "../models/index.js";

const { Product, Size } = models
const createNewShoe = async (data) => {
    const { productName, brand, description, imageList, releaseDate, sizeWithPrice, colorway, imageJSON } = data;
    try {
        const result = await sequelize.transaction(async (t) => {
            const product = await Product.create({
                name: productName,
                colorway,
                releaseDate,
                brand,
                description,
                imagesURL: imageJSON
            })

            const sizeResponse = await Promise.all(sizeWithPrice.map(async (item) => {
                const size = await Size.findByPk(Number(item.size))
                if (size) {
                    await product.addSizes(size, { through: { price: Number(item.price) } })
                    return size.dataValues
                }
            }));
            return {
                isSuccess: true,
                product,
                sizeResponse
            }
        });
        return result
    } catch (error) {
        return {
            isSuccess: false,
            error
        }
    }

}

export const shoeDatabase = {
    createNewShoe
}