import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const ProductSize = sequelize.define("ProductSize", {
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
})

export default ProductSize