const express = require('express')
const cors = require('cors')
const connectDB = require('./database/db')
const dotenv = require('dotenv')
const morgan = require('morgan')

// *****************************

// Routes require here from routes directory

// *****************************


const app = express()
dotenv.config()
const PORT = process.env.PORT || 8000
connectDB(process.env.MONGODB_URL)

// app.use(cors())
app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        res.header({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods": "PUT, POST, PATCH, DELETE, GET"
        });
        return res.status(200).end()
    }
    next();
});
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(morgan('dev')) // app.use(morgan('common')) at the time of production

// *****************************

// app.use('/api, imported_route)

// *****************************

app.listen(PORT, () => {
    console.log(`server is listening...`)
})

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Marketify Server...")
})
