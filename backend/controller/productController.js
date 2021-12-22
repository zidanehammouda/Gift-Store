const Product = require('../model/Product')


const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server error"
        })
    }
}

const getProductById = async (req,res,next) => {
    let product
    try {
        product = await Product.findOne({
            id : req.params.id
        })
        

    } catch (error) {
        if (product == null) {
            return res.status(404).json({
                message : "Product doesn't exist!"
            })
        }
        else {
            console.log(error)
        res.status(500).json({
            message : 'Server error'
        })
        }
        
    }

    res.product = product
    next()
}

const postNewProduct = async (req,res) => {
    try {
        const product = new Product({
            id : Math.floor((Math.random()*9999)), 
            name : req.body.name,
            category : req.body.category,
            quantity : req.body.quantity,
            brand : req.body.brand,
            image : req.body.image
        })
        const newProduct = await product.save()
        res.status(201).send("done")

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server error"
        })
    }
}



module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct }