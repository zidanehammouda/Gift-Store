const express = require('express')
const router = express.Router()

const {getAllProducts,getProductById} = require('../controller/productController')


router.get('/', getAllProducts)

router.get('/:id',getProductById)

module.exports = router;
