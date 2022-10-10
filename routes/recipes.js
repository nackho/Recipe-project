const express = require("express");
const router = express.Router();
const recipesCtrl = require("../controllers/recipes");

module.exports = router;

router.get("/", recipesCtrl.index);