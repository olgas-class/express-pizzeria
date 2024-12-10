const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/ingredientController");

router.get("/", ingredientController.index);

module.exports = router;