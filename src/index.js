import express from "express";
import * as dotenv from 'dotenv'
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import { shoeRouter } from './routes/index.js'
import { DataTypes } from "sequelize";
import cors from 'cors'
dotenv.config();



const app = express()
const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1/shoe', shoeRouter)


app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})