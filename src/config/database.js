import { Sequelize } from "sequelize";
import namespace from "../utils/cls.js";
Sequelize.useCLS(namespace);


const sequelize = new Sequelize('huutaidb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


export default sequelize