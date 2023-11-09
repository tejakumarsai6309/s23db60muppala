const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
Brand: String,
Color: String,
Year: Number
})
module.exports = mongoose.model("vehicle",vehicleSchema)