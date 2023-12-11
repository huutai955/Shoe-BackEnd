import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";



// const Product = sequelize.define("Product", {
//     productID: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//         defaultValue: DataTypes.UUIDV4, // Sử dụng UUIDV4 để tạo UUID tự động
//     },
//     productName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     releaseDate: {
//         type: DataTypes.DATE,
//         allowNull: false
//     }
// })

// const Size = sequelize.define("Size", {
//     sizeID: {
//         type: DataTypes.DECIMAL(3, 1),
//         primaryKey: true
//     }
// })

// const ProductSize = sequelize.define('ProductSize', {
//     price: {
//         type: DataTypes.DECIMAL(9, 2),
//         allowNull: false
//     }
// });

// Size.belongsToMany(Product, { through: ProductSize })
// Product.belongsToMany(Size, { through: ProductSize })


// export const model = {
//     Product,
//     Size
// }


const Product = sequelize.define("Product", {
    productName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Size = sequelize.define("Size", {
    ID: {
        type: DataTypes.INTEGER,
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