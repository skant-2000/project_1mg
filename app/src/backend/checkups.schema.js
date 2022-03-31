const mongoose = require("mongoose")


const checkupsSchema = new mongoose.Schema({
    name: String,
    tests: Number,
    mrp: Number,
    sp: Number,
    discount: Number,
})


const checkupsModel = mongoose.model("checkups", checkupsSchema)

module.exports =  checkupsModel;