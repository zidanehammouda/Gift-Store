require('dotenv').config();

const CategoriesDummyData = require('../CategoriesDummyData')
const connectDB = require('./config/db')
const Category = require('./model/Category')

connectDB();

const importData = async () => {
    try {
        await Category.deleteMany({});
        await Category.insertMany(CategoriesDummyData)
        console.log("Categories imported successfuly")
        process.exit()
    } catch (error) {
        console.error("Error with importing categories")
        process.exit(1)
    }
}

importData();