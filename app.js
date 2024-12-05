const express = require("express");
const menu = require("./data");
const pizzasRouter = require("./routers/pizzas");

const app = express();
const port = 3001;

app.use(express.static("public"));

// includo tutte le rotte delle pizze con prefisso "pizzas" nelle url di ogni rotta
app.use("/pizzas", pizzasRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Ciao, questa è la mia pizzeria",
  });
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








