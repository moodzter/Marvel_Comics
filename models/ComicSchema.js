const mongoose = require('mongoose')


const marvelSchema = new mongoose.Schema (
    {
        superhero: String, 
        img: String,
        author: String,
        releaseDate: String,
        description: String,
        rating: Boolean


    }
)

const Comics = mongoose.model ('comic', marvelSchema)

module.exports = Comics