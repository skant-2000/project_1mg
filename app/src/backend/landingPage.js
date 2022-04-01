const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const PORT = 8000
let app = express();
app.use(cors());
app.use(express.json());


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

app.post('/cart', async (req, res) => {
    console.log(req.body);
    const data = await cartModel.create(req.body);
    res.status(200).json(data);
});

app.delete("/cart/:id", async(req, res) => {
    const id = req.params.id;
    let data = await cartModel.findByIdAndDelete(id);
    res.status(200).json(data);
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