require('dotenv').config();

const dummyData = require ('../dummy_data')
const connectDB = require('./config/db')
const Product = require('./model/Product')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(dummyData)
        console.log("Data import success")
        process.exit()
    } catch (error) {
        console.error("Error with importing data")
        process.exit(1)
    }
}

importData();