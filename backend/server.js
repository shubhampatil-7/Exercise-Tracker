const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.send("This is Home page")
})

const uri = process.env.ATLAS_URI;
mongoose
    .connect(uri)
    .then(console.log('Mongodb Connected'))

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)


app.listen(port, () =>{
    console.log(`Listening on : localhost:${port}`)
})