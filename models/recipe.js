const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    image: {
        type: String,
        required: true
    },
    title: { 
        type: String, 
        required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    ingredients: { 
        type: [String], 
        required: true 
    },
    method: { 
        type: [String], 
        required: true 
    }
});

module.exports = mongoose.model("Recipe", recipeSchema)