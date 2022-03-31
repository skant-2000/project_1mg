const mongoose = require("mongoose")


const productsSchema = new mongoose.Schema({
    name: String,
    quantity: String,
    image: String,
    discount: Number,
    mrp: Number,
    sp: Number,
})

const productsModel = mongoose.model("wellbeing_nutritions", productsSchema)

module.exports =  productsModel;
