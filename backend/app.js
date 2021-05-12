const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require('./auth/auth.routes'))

const PORT = config.get('port')



async function start(){
    try{
        mongoose.connect(config.get('mongoUri'), {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log('MongoDB connected')
    )
    app.listen(PORT, () => {
        console.log('Server started')
    })
    }
    catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}
start()