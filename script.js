// Recipe 1
const chickenMushroomGnocchi = {
  name: "Chicken and Mushroom Gnocchi",
  calories: 393,
  ingredients: ["gnocchi", "chicken", "mushrooms", "soft cheese", "red onion"],
  gnocchi: {
    grams: 125,
    carbs: 45,
    fat: 1,
    protein: 4.5,
  },
  chicken: {
    grams: 120,
    carbs: 0,
    fat: 1,
    protein: 28,
  },
  mushrooms: {
    grams: 40,
    carbs: 0,
    fat: 0,
    protein: 0.5,
  },
  softCheese: {
    grams: 35,
    carbs: 1,
    fat: 4,
    protein: 2.5,
  },
  redOnion: {
    grams: 25,
    carbs: 2,
    fat: 0,
    protein: 0.2,
  },
};

// Recipe 2

// Recipe 3
//Warm Chicken salad recipe
const warmChickenSalad = {
  name: "Warm Chicken Salad.",
  calories: 410,
  fat: 20,
  protein: 50,
  ingredients: [
    "2 Chicken thighs", 
    "2 Tomatoes",
    "1 Red pepper",
    "2 cups mixedleaf salad",
    "1 carrot",
    "Sea salt and black pepper",
    "Honey and mustered dressing",
    "2 Spring onions.",
  ],
};

console.log(warmChickenSalad.ingredients);
console.log(warmChickenSalad.name);
// Recipe 4

// Recipe 5

const caloriesAmount = document.getElementById("calories-amount").value;
const carbsAmount = document.getElementById("carbs-amount").value;
const fatAmount = document.getElementById("fat-amount").value;
const ProteinAmount = document.getElementById("protiein-amount").value;
