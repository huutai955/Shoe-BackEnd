import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";



const Product = sequelize.define("Product", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    colorway: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    imagesURL: {
        type: DataTypes.JSON,
        allowNull: false
    }
})

const Size = sequelize.define("Size", {
    ID: {
        type: DataTypes.DECIMAL(4, 2),
        primaryKey: true
    }
})


const ProductSizes = sequelize.define("ProductSizes", {
    price: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false
    }
})



Product.belongsToMany(Size, { through: ProductSizes })
Size.belongsToMany(Product, { through: ProductSizes })

export const models = {
    Product,
    Size
}