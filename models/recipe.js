const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {type: String, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    userName: String,
    userAvatar: String
  });

const recipeSchema = new Schema ({
    image: { type: String,required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: [String], required: true },
    method: { type: [String], required: true },
    reviews: [reviewSchema]
});

module.exports = mongoose.model("Recipe", recipeSchema)