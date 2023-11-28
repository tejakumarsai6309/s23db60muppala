const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
Brand: String,
Color: String,
Year:  {
    type: Number,
    min: [1900, "Year must be greater than or equal to 1900"],
    max: [new Date().getFullYear(), "Year cannot be greater than the current year"]
  }
});
module.exports = mongoose.model("vehicle",vehicleSchema)

