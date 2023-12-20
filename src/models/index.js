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


const User = sequelize.define("User", {
    userID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
    },
    hashPassword: {
        type: DataTypes.TEXT('long'),
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    access_token: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.STRING
    }
})

const Order = sequelize.define("Order")

const OrderProducts = sequelize.define("OrderProducts", {
    totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false
    }
})


Product.belongsToMany(Size, { through: ProductSizes })
Size.belongsToMany(Product, { through: ProductSizes })
Order.belongsToMany(Product, { through: OrderProducts })
Product.belongsToMany(Order, { through: OrderProducts })
User.hasMany(Order);
Order.belongsTo(User);
export const models = {
    Product,
    Size,
    User,
    Order
}