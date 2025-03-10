const mongoose = require('mongoose')

mongoose
    .connect(process.env.dbURi, {
        dbName: process.env.dbName,
    })
    .then(() => console.log('MongoDb connected successfully'))
    .catch((err) => console.log(err.message))

//event listeners that respond to ongoing changes in the connection state after the initial connection is established
mongoose.connection.on('connected', () => console.log('mongoDB connected'))
mongoose.connection.on('error', (err) => console.log(err.message))
mongoose.connection.on('disconnected', () => console.log('mongoDB disconnected'))

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})
