const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: String,
    source: String,
    description: String, 
    ingredients: [String],
    method: [String],
    tips: String
})

module.exports = mongoose.model("Recipe", recipeSchema)