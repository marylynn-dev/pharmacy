const express = require('express')
const morgan = require('morgan')
const errorHandler = require('./helpers/errors')

const app = express()

//middleware 
app.use(morgan('dev'))
app.use(express.json())

//routes
const userRouter = require('./routes/user')
const batchRouter = require('./routes/batch')
const medicationRouter = require('./routes/medication')
const supplierRouter = require('./routes/supplier')
const { verifyAccessToken } = require('./helpers/jwt')

app.use('/user', userRouter)

// Middleware for protected routes
app.use(verifyAccessToken);
app.use('/batch', batchRouter)
app.use('/medication', medicationRouter)
app.use('/supplier', supplierRouter)

//error handling middleware
app.use(errorHandler)

//enviroonment configuration
require('dotenv').config()

//database connection
require('./helpers/mongoDb')

const port = process.env.PORT
app.listen(port, () => console.log(`Server is listenning on port ${port}`))