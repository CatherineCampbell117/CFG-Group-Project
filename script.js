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
<<<<<<< HEAD
const recipe3 = {
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
=======
const warmChickenSalad = {
  name: "Warm Chicken Salad - 2 Servings",
// nested objects in an array
  ingredients:[
    {
    chicken: "2 chicken thighs", 
    calories: 304,
    fat: 8,
    protein: 28,
    carbs: 0,
    },
    {
    tomatoes: "2 tomatoes",
    calories: 44,
    fat: 0.49,
    protein: 2.16,
    carbs: 9.64,
    },
    {
    redpepper: "1 Red pepper",
    calories: 39,
    fat: 0.4,
    protein: 1.5,
    carbs: 9,
    },
    {
    carrot: "1 carrot ",
    calories: 25,
    fat: 0.1,
    protein: 0.5,
    carbs: 6,
    },
    {
    springOnion: "1 Spring onion",
    calories: 8,
    fat: 0.05,
    protein: 0.46,
    carbs: 1.84,     
    },
     {
    dressing: "Honey and mustered dressing 2tbs",
    calories: 146,
    fat: 15.4,
    protein: 0.3,
    carbs: 2,   
     }, 
     {
    seasoning: "salt and blackpepper"
     },
    ],
   method:[
    {
    step1: "season chicken pieces on all surfaces and and fry on high heat for 5 minutes or untill cooked",
    step2: " Wash the salad ingredients and place in a bowl and mix them together", 
    step3: "Place the cooked chicken on top of the salad, add salad dressing and enjoy",
    },
   ]
   }
console.log(warmChickenSalad.ingredients)
console.log(warmChickenSalad.method)



>>>>>>> 36d0641954354d13c64b450f39be99e4ca413fa8

// Recipe 4

// Recipe 5

const caloriesAmount = document.getElementById("calories-amount").value;
const carbsAmount = document.getElementById("carbs-amount").value;
const fatAmount = document.getElementById("fat-amount").value;
const ProteinAmount = document.getElementById("protiein-amount").value;
