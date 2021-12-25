const express = require('express')
const router = express.Router()

const {getAllProducts,getProductById,postNewProduct} = require('../controller/productController')


router.get('/', getAllProducts)

router.get('/:id',getProductById,(req,res)=>{
    res.send(res.product)
})

router.post('/',postNewProduct)

router.delete('/:id',getProductById,async (req,res)=>{
    try {
        await res.product.remove()
        return res.status(410).json({
            message : "Product removed successfuly"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : 'Server error'
        })
        }    
        
    
})

router.put('/:id',getProductById, async (req,res)=>{
    if(req.body.id != null ) {
        res.product.id = req.body.id
    } 
    if(req.body.name != null ) {
        res.product.name = req.body.name
    }
    if(req.body.category != null ) {
        res.product.category = req.body.category
    }
    if(req.body.quantity != null ) {
        res.product.quantity = req.body.quantity
    }
    if(req.body.brand != null ) {
        res.product.brand = req.body.brand
    }
    if(req.body.image != null ) {
        res.product.image = req.body.image
    }
    try {
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)
    } catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
})

module.exports = router;
