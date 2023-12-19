import express from "express";
import * as dotenv from 'dotenv'
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import { shoeRouter, authRouter } from './routes/index.js'
import { DataTypes } from "sequelize";
dotenv.config();



const app = express()
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json())

app.use('/api/v1/shoe', shoeRouter)
app.use('/api/v1/auth', authRouter)


app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})