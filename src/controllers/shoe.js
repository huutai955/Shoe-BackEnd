import { shoeDatabase } from "../databases/index.js"

const createNewShoe = async (req, res) => {
    const { imageList } = req.body
    const imageJSON = {}
    imageList.forEach((element, index) => {
        imageJSON[index] = element.url;
    });

    const response = await shoeDatabase.createNewShoe({
        ...req.body,
        imageJSON
    })
    if (response.isSuccess) {
        return res.status(201).json({
            status: 'Success',
            data: {
                product: response.product,
                size: response.sizeResponse
            }
        })
    } else {
        return res.status(500).json({
            status: 'Error',
            data: response.error
        })
    }
}

export const shoeController = {
    createNewShoe
}