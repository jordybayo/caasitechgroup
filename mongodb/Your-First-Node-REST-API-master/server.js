require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const cors = require("cors");
const bodyParser = require("body-parser");



const app = express()

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
// exceptions

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))