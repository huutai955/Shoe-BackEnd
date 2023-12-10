import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const Product = sequelize.define("Product", {
    productID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Sử dụng UUIDV4 để tạo UUID tự động
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
})


const Size = sequelize.define("Size", {
    sizeID: {
        type: DataTypes.DECIMAL(3, 1),
        primaryKey: true
    }
})



const ProductSize = sequelize.define("ProductSize", {
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
})


Product.belongsToMany(Size, { through: ProductSize });
Size.belongsToMany(Product, { through: ProductSize });



export {
    Product,
    Size,
    // ProductSize
}