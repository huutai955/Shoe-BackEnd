import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Sizes from "./size.js";
import Products from "./products.js";


const ProductSizes = sequelize.define("ProductSizes", {
    productID: {
        type: DataTypes.UUID,
    },
    sizeID: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
})

export default ProductSizes