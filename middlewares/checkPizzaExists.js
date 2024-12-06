const pizzasArray = require("../data");

const checkPizzaExists = (req, res, next) => {
  console.log("pizza exists middleware");
  
  /**
   * 1. Prendo id da req, lo trasformo in un numero
   * 2. Cerco nell'array l'oggetto con id corrispondente
   * 3. Se l'oggetto è trovato
   *      next
   *    Altrimenti
   *      mando la risposta con errore 404
   */

  const pizzaId = parseInt(req.params.id);
  const pizza = pizzasArray.find((curPizza) => curPizza.id === pizzaId);  

  if(pizza !== undefined) {
    next();
  } else {
    res.statusCode = 404;
    res.json({
      error: true,
      message: "Pizza non trovata"
    });
  }

}

module.exports = checkPizzaExists;