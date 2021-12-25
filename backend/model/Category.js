const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    
    id : String,
    title : String

})

module.exports = mongoose.model('Category',CategorySchema)