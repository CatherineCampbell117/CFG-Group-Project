// Recipe 1
const chickenMushroomGnocchi = {
  name: "Chicken and Mushroom Gnocchi",
  calories: 393,
  carbs: 40,
  fat: 5,
  protein: 25,
  ingredients: ["gnocchi", "chicken", "mushrooms", "soft cheese", "red onion"]
}

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
const recipe3 = {
  name: "Warm Chicken Salad.",
  calories: "410",
  fat: "20 ",
  protein: "50",
  ingredients: [
    "2 Chicken thighs",
    "2 tomatoes",
    "1 red pepper",
    "2 cups mixedleaf salad",
    "1 carrot",
    "sea salt and black pepper",
    "honey and mustered dressing",
    "2 spring onions"
  ],
}

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