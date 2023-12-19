import express from "express";
import * as dotenv from 'dotenv'
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import { shoeRouter, authRouter } from './routes/index.js'
import { DataTypes } from "sequelize";
import https from 'https';
import cors from 'cors'
import fs from 'fs'
dotenv.config();
const options = {
    key: fs.readFileSync('localhost-key.pem'),
    cert: fs.readFileSync('localhost.pem'),
};
const app = express()
const PORT = process.env.PORT || 3001;

const server = https.createServer(options, app)

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("hello")
})

app.use('/api/v1/shoe', shoeRouter)
app.use('/api/v1/auth', authRouter)

server.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})