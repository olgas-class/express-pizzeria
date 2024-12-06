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
  console.log(req.body);

  // Creo l'oggetto con i dati arrivati dal request
  const newPizza = req.body;

  // calcolo il successivo id
  const lastItemIndex = pizzasArray.length - 1; // number --> 5
  const lastItem = pizzasArray[lastItemIndex] // object
  newPizza.id = lastItem.id + 1;


  // Aggiungo id all'oggetto newPizza
  // newPizza.id = pizzasArray[pizzasArray.length - 1].id + 1;

  // Aggiungo l'oggetto newPizza nell'array
  pizzasArray.push(newPizza);

  res.statusCode = 201;
  res.json(newPizza);
};

const update = (req, res) => {
  const pizzaID = parseInt(req.params.id); 

  const updatedPizza = req.body; // object

  // Aggiungere la chiave id al updatedPizza
  updatedPizza.id = pizzaID;

  // Trovo indice di elemento da modificare
  const indexToUpdate = pizzasArray.findIndex((curPizza) => curPizza.id === pizzaID); // 0
  console.log(indexToUpdate);

  if(indexToUpdate === -1) {
    res.statusCode = 404;
    res.json({
      error: true,
      message: "Pizza non trovata"
    })
  } else {
    // Sostituiamo l'elemnto nella posizione di elemnto da modificare con l'oggetto updatedPizza
    pizzasArray[indexToUpdate] = updatedPizza;
    
    res.json(updatedPizza);
  }
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
