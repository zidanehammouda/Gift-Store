const Category = require('../model/Category')


const getAllCategories = async (req,res) => {
    try {
        const categories = await Category.find({})
        res.json(categories)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server error"
        })
    }
}

const getCategoryById = async (req,res,next) => {
    let category
    try {
        category = await Category.findOne({
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

    res.category = category
    next()
}

const postNewCategory = async (req,res) => {
    try {
        const category = new Category({
            id : Math.floor((Math.random()*9999)), 
            title : req.body.title
        })
        const newCategory = await category.save()
        res.status(201).send("done")

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server error"
        })
    }
}



module.exports = {
    getAllCategories,
    getCategoryById,
    postNewCategory }