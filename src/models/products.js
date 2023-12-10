import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const Products = sequelize.define("Product", {
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



export default Products