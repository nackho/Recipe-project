const Recipe = require("../models/recipe");

module.exports = {
    index,
    new: newRecipe,
    create,
    // show,
};

function index(req, res) {
    Recipe.find({}, function(err, food){
        res.render('recipes/index', {
            title: 'All Recipes',
            food
        })
    })
}
        
function newRecipe(req, res) {
    res.render("recipes/new", {title: "New Recipe"})
}

function create(req, res) {
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect("/recipes/new");
        res.redirect("/recipes");
    })
}
