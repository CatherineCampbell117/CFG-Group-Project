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

  carbs: 40,
  fat: 5,
  protein: 25,
  ingredients: ["gnocchi", "chicken", "mushrooms", "soft cheese", "red onion"]



const plop = document.getElementById('list')
console.log(plop)

// Recipe 2
// Chocolate Chip Cookie recipe 10 servings
const chocolateChipCookie = {
  name: "Chocolate Chip Cookie",
  calories: 308,
  carbs: 35,
  fats: 16,
  protein: 3,
  ingredients: ["butter", "light brown sugar", "caster sugar", "egg", "vanilla extract", "plain flour", "bicarbonate of soda", "milk chocolate chips"],
  butter: {
    grams: 120,
    carbs: .1,
    fat: 102.8,
    protein: 1,
  },
  lightBrownSugar: {
    grams: 75,
    carbs: 73,
    fat: 0,
    protein: 0,
  },
  casterSugar: {
    grams: 75,
    carbs: 74.98,
    fat: 0,
    protein: 0,
  },
  egg: {
    grams: 58,
    carbs: .4,
    fat: 4.6,
    protein: 6.8,
  },
  vanillaExtract: {
    grams: 5,
    carbs: .53,
    fat: 0,
    protein: 0,
  },
  plainFlour: {
    grams: 180,
    carbs: 137.36,
    fat: 1.76,
    protein: 18.59,
  },
  bicarbonateOfSoda: {
    grams: 2.5,
    carbs: 0,
    fat: 0,
    protein: 0,
  },
}


// Recipe 3
//Warm Chicken salad recipe

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



// Recipe 4
const ratatouille = {
  name: "ratatouille",
  calories: 450,
  carbs: 50,
  fat: 0,
  protein: 50,
  ingredients: ["courgette", "aubergine", "onion", "red pepper", "garlic"]
}


// Recipe 5
// Chicken fajita recipe 4 servings
const chickenBreast = {
  protein: 31,
  carbs: 0,
  fat: 3.6
};

const recipes = [
  chickenMushroomGnocchi,
  chocolateChipCookie,
  recipe3,
  ratatouille,
  chickenBreast,
]

// let totalProteins = chickenBreast.protein + redOnion.protein + redPepper.protein + redChili.protein + oliveOil.protein + lime.protein + tortillas.protein + mixedSalad.protein + freshSalsa.protein;
// let totalFats = chickenBreast.fat + redOnion.fat + redPepper.fat + redChili.fat + oliveOil.fat + lime.fat + tortillas.fat + mixedSalad.fat + freshSalsa.fat;
// let totalCarbs = chickenBreast.carbs + redOnion.carbs + redPepper.carbs + redChili.carbs + oliveOil.carbs + lime.carbs + tortillas.carbs + mixedSalad.carbs + freshSalsa.carbs;

// console.log("Total Proteins:", totalProteins, "g");
// console.log("Total Fats:", totalFats, "g");
// console.log("Total Carbs:", totalCarbs, "g");

const caloriesAmount = document.getElementById("calories-amount").value;
const carbsAmount = document.getElementById("carbs-amount").value;
const fatAmount = document.getElementById("fat-amount").value;
const ProteinAmount = document.getElementById("protiein-amount").value;

// Chicken Fajita Recipe
const chickenFajitaRecipe = {
  name: "Chicken Fajita",
  calories: 494,
  carbs: 50,
  fat: 20,
  protein: 25,
  ingredients: ["red pepper", "chicken" , "red chilli", "olive oil", "red onion" , "tortilla" , "lime", "garlic"]

 




// const caloriesAmount = document.getElementById('calories-amount').value;
// const carbsAmount = document.getElementById('carbs-amount').value;
// const fatAmount = document.getElementById('fat-amount').value;
// const ProteinAmount = document.getElementById('protiein-amount').value;

const findRecipesButton = document.getElementById("findRecipes")
const list = document.getElementById("list")

function getFilteredRecipes(criterion) {
  const matchingRecipes = []

  // recipes.filter
  // google Array.filter

  // TODO use criterion (value from the inputs) to do the actual filtering

  // loop through all recipes
  //  at every iteration check if the current recipe matches
  // if(criterion.carbs > )
  //  if match matchingRecipes.push(currentRecipe)

  // TODO remove this, here just for testing purpose
  matchingRecipes.push(chickenMushroomGnocchi)
  matchingRecipes.push(chocolateChipCookie)

  return matchingRecipes
}

findRecipesButton.addEventListener('click', function() {
  const criterion = {
    // TODO get the input of the user and save them into a object called criteron
  } 
  const filteredRecipes = getFilteredRecipes(criterion)

  console.log(filteredRecipes)

  // convert this recipes into dom element in the list to display it into the screen  
  // document.createElement
  // myElement.appendChild
  // myElement.contentText = 'blabla'
})
  return chocolateChipCookie

}cr
