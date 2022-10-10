const express = require("express");
const router = express.Router();
const recipesCtrl = require("../controllers/recipes");

module.exports = router;

router.get("/", recipesCtrl.index);
router.get("/new", recipesCtrl.new);
router.post("/", recipesCtrl.create);