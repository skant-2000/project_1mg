const mongoose = require("mongoose")


const productsSchema = new mongoose.Schema({
    name: String,
    quantity: String,
    image: String,
    discount: Number,
    mrp: Number,
    sp: Number,
})

const productsModel = mongoose.model("wellbeing_nutrition", productsSchema)

module.exports =  productsModel;
