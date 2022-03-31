const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const PORT = 8000
let app = express()
app.use(cors())

const DB_URL = "mongodb+srv://masai:masaischool@cluster0.g0t1d.mongodb.net/tata1mg?retryWrites=true&w=majority"

const connect = () => {
    return mongoose.connect(DB_URL)
}

const checkupsModel = require("./checkups.schema")

app.get("/checkups", async(req, res) => {
    let data = await checkupsModel.find({})
    res.status(200)
    res.json(data)
})

const productsModel = require("./products.schema")

app.get("/products", async(req, res) => {
    let data = await productsModel.find({})
    res.status(200)
    res.json(data)
})

const cartModel = require("./cart.schema")

app.get("/cart", async(req, res) => {
    let data = await cartModel.find({})
    res.status(200)
    res.json(data)
})

app.listen(PORT, async () => {
    try {
        await connect()
        console.log(`listening on Port ${PORT}`);
    }
    catch(e) {
        console.log(e.message)
    }
})