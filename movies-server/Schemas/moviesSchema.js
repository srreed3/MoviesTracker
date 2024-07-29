const mongoose = require('mongoose')

//creating schemato defined structure
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
})

//create model using schema
const Movie = mongoose.model('Movie', movieSchema)

//export movie model for other files 
module.exports = Movie