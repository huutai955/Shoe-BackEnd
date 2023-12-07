import express from "express";
import * as dotenv from 'dotenv'
import bodyParser from "body-parser";
import { shoeRouter, studentRouter, userRouter } from "./routes/index.js";

dotenv.config();


const app = express()
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json())

app.use('/users', userRouter)
app.use('/students', studentRouter)
app.use('/shoe', shoeRouter)


app.listen(PORT, () => {
    console.log("Hay nua")
})