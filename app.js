const express = require("express");
const menu = require("./data");
const app = express();
const port = 3001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    message: "Ciao, questa è la mia pizzeria",
  });
});

app.get("/menu", (req, res) => {
  const result = {
    pizze: menu,
    totale: menu.length
  }
  res.json(result);
});

app.get('/ricerca', (req, res) => {
  const pizzaName = req.query.nome; // "Mar"
  // const pizzas = menu.filter((curPizza) => curPizza.name.toLowerCase().includes(pizzaName.toLowerCase()))
  const pizzas = menu.filter((curPizza) => {
    const curPizzaName = curPizza.name.toLowerCase();
    return curPizzaName.includes(pizzaName.toLocaleLowerCase());
  })
  res.json(pizzas);
});

app.listen(port, () => {
  console.log("Server is listening");
});
