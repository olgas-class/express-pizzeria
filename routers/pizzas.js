const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizzaController");
const checkPizzaExists = require("../middlewares/checkPizzaExists");

// router.use(checkPizzaExists);

// API che serve per prendere tutte le pizze
// index - operazione dove leggiamo tutti i dati ---> read
router.get("/", pizzaController.index);

// show - operazione di lettura di dettagli di un solo elemento ---> read
// /pizzas/12
router.get("/:id", checkPizzaExists, pizzaController.show)

// create - operazione che crea un nuovo elemento nei dati
router.post("/", pizzaController.create);

// update - aggiornare i dati di una concreta pizza
router.put("/:id", checkPizzaExists, pizzaController.update)

// modify
router.patch("/:id", checkPizzaExists, pizzaController.modify)

// destroy
router.delete("/:id", checkPizzaExists, pizzaController.destory)

module.exports = router;