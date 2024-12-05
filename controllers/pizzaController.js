const pizzasArray = require("../data");

const index = (req, res) => {
  const queryString = req.query;
  let pizzeDaInviare = pizzasArray;

  if (queryString.ingredient !== undefined) {
    // Eseguo il filtro e mando dati fintrati
    pizzeDaInviare = pizzasArray.filter((curPizza) =>
      curPizza.ingredients.includes(queryString.ingredient)
    );
  }

  const result = {
    pizze: pizzeDaInviare,
    totale: pizzeDaInviare.length,
  };
  res.json(result);
};

const show = (req, res) => {
  const pizzaID = parseInt(req.params.id);
  const pizza = pizzasArray.find((curPizza) => curPizza.id === pizzaID);
  if (pizza === undefined) {
    res.statusCode = 404;
    res.json({
      error: true,
      message: "Pizza non trovata",
    });
  } else {
    res.json(pizza);
  }
};

const create = (req, res) => {
  res.json("Qui aggiungo la nuova pizza ai miei dati");
};

const update = (req, res) => {
  res.json("Qui aggiorno tutti i dati di una pizza con id " + pizzaID);
};

const modify = (req, res) => {
  const pizzaID = req.params.id;
  res.json("Qui aggiorno solo alcuni dati di una pizza con id " + pizzaID);
};

const destory = (req, res) => {
  const pizzaID = parseInt(req.params.id);
  // Trovo l'indice della pizza
  const pizzaIndex = pizzasArray.findIndex(
    (curPizza) => curPizza.id === pizzaID
  );
  // Se non trovato, il valore è -1
  if (pizzaIndex === -1) {
    res.statusCode = 404;
    res.json({
      error: true,
      message: "Pizza non trovata",
    });
  } else {
    pizzasArray.splice(pizzaIndex, 1);
    res.sendStatus(204);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  modify,
  destory,
};
