const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    
    id : Number,
    name: String,
    category : String,
    quantity : Number,
    brand : String,
    image : String 

})

module.exports = mongoose.model('Product',ProductSchema)