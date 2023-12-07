import { shoeDatabase } from '../databases/index.js'

const createNewShoe = (req, res) => {
    shoeDatabase.getAllShoe()
    res.send("Hello shoe")
}

export const shoeController = {
    createNewShoe
}