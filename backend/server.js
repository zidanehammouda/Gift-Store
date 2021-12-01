require('dotenv').config()
var cors = require('cors');

const express = require('express')
const app = express()
const port = process.env.PORT || 8000

const productRoutes = require('./routes/productRoutes.js')

const connectDB = require('./config/db')
connectDB();

app.use(cors())
app.use(express.json())

app.use('/api/products',productRoutes)

app.listen(port, () => console.log(`listening on port ${port}!`))