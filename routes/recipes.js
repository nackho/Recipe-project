const express = require("express");
const router = express.Router();
const recipesCtrl = require("../controllers/recipes");
const isLoggedIn = require("../config/auth");

router.get("/", isLoggedIn, recipesCtrl.index);
router.get("/new", isLoggedIn, recipesCtrl.new);
router.post("/", recipesCtrl.create);
router.get("/:id", isLoggedIn, recipesCtrl.show);
router.get("/:id/edit", isLoggedIn, recipesCtrl.edit)
router.put("/:id", recipesCtrl.update)
router.delete("/:id", recipesCtrl.delete)

module.exports = router;