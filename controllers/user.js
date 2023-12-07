import {  validationResult } from 'express-validator';


const getallUser = (req, res) => {
    res.send("Get all users")
}


const getDetailUser = (req, res) => {
    console.log(req.params.id)
    res.send(`Get user by id: ${req.params.id ? req.params.id : ''}`)
}

const userLogin = (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() })
    }
    res.send("Register Users")
}


const userRegister = (req, res) => {
    res.send("Get all users")
}


export const userController = {
    getDetailUser,
    getallUser,
    userLogin,
    userRegister
}