const mongoose = require("mongoose")


const cartSchema = new mongoose.Schema({
    name: String,
    quantity: String,
    image: String,
    discount: Number,
    mrp: Number,
    sp: Number,
    form: String,
    numberOfItems: Number,
})

const cartModel = mongoose.model("carts", cartSchema)

module.exports =  cartModel;