const express = require("express");
const router = express.Router();
const pizzasArray = require("../data");

// API che serve per prendere tutte le pizze
// index - operazione dove leggiamo tutti i dati ---> read
router.get("/", (req, res) => {
  const result = {
    pizze: pizzasArray,
    totale: pizzasArray.length
  }
  res.json(result);
});

// show - operazione di lettura di dettagli di un solo elemento ---> read
// /pizzas/12
router.get("/:id", (req, res) => {
  const pizzaID = req.params.id;
  res.json("Qui prelevo i dettagli di una singola pizza " + pizzaID);
})


// create - operazione che crea un nuovo elemento nei dati
router.post("/", (req, res) => {
  res.json("Qui aggiungo la nuova pizza ai miei dati");
});

// update - aggiornare i dati di una concreta pizza
router.put("/:id", (req, res) => {
  const pizzaID = req.params.id;
  res.json("Qui aggiorno tutti i dati di una pizza con id " + pizzaID);
})

// modify
router.patch("/:id", (req, res) => {
  const pizzaID = req.params.id;
  res.json("Qui aggiorno solo alcuni dati di una pizza con id " + pizzaID);
})

// destroy
router.delete("/:id", (req,res) => {
  const pizzaID = req.params.id;
  res.json("Qui cancello la pizza con id " + pizzaID);
})

module.exports = router;