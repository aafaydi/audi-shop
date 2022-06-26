const{Schema, model} = require("mongoose")
const carschema = new Schema({
    carmodel: {
        type: String,
        required: true,
    },

    year: {
        type: String,
         required: true,
    },

    trimmodel: {
        type: String,
        required: true,
    },

    color: {
        type: String,
        required: true,
    },

    reserved: {
        type: Boolean,
        required: true,
        default: false
    },

    reseverdto: [{
    type: Schema.Types.ObjectId,
    ref:"User"
    }]
})
const Car = model("Car", carschema)

module.exports = Car