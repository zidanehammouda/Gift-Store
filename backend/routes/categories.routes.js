const express = require('express')
const router = express.Router()

const {getCategoryById,getAllCategories,postNewCategory} = require('../controller/categoryController')


router.get('/', getAllCategories)



router.post('/',postNewCategory)



module.exports = router;