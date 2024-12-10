const pizzasArray = require("../data");

const index = (req, res) => {
  const ingredients = []; // ["pomodoro",  "mozzarella", "aglio"]

  for (let i = 0; i < pizzasArray.length; i++) {
    const pizzaIngredients = pizzasArray[i].ingredients; // ["pomodoro", "aglio", "origano"]
    for (let j = 0; j < pizzaIngredients.length; j++) {
      const curIngredient = pizzaIngredients[j]; // aglio
      if (!ingredients.includes(curIngredient)) {
        ingredients.push(curIngredient);
      }
    }
  }

  res.json({
    ingredients,
    totale: ingredients.length
  });
};

module.exports = {
  index
}