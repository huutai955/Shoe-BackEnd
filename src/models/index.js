import Products from "./products.js";
import ProductSizes from "./productsizes.js";
import Sizes from "./size.js";


Products.belongsToMany(Sizes, { through: ProductSizes });
Sizes.belongsToMany(Products, { through: ProductSizes });
