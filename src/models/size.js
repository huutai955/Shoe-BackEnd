import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Products from "./products.js";
import ProductSizes from "./productsizes.js";


const Sizes = sequelize.define("Size", {
    sizeID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    productName: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


export default Sizes