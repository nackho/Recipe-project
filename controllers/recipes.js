const Recipe = require("../models/recipe");

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    edit,
    update,

};

function index(req, res) {
    Recipe.find({}, function(err, recipes){
        res.render('recipes/index', {
            title: 'All Recipes',
            recipes
        })
    })
}
        
function newRecipe(req, res) {
    res.render("recipes/new", {title: "New Recipe"})
}

function create(req, res) {

    let imageUploadFile;
    let uploadPath;
    let newImageName;
      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function(err){
        if(err) return res.satus(500).send(err);
      })

    const recipe = new Recipe({
        image: newImageName,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        method: req.body.method
    });
    recipe.save(function(err) {
        if (err) return res.redirect("/recipes/new");
        res.redirect("/recipes");
    })
}

function show(req,res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render("recipes/show", { title: "Recipe", recipe })
    })
}

function edit(req, res) {
    Recipe.findById({_id: req.params.id}, function(err, recipe) {
        res.render("recipes/edit", { title: "Recipe", recipe })
    })
}

function update(req, res) {
    Recipe.findById(req.params.id, (err, recipe)=>
    { req.body.new = true; recipe = req.body; recipe.save();
        res.redirect(`/recipes/${req.params.id}`)
        }) 
    }


    
  
