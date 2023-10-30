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




// Recipe 3 
//Warm Chicken salad recipe 
const recipe3 = {
    name: "Warm Chicken Salad.",
    calories: "410",
    fat: "20 ",
    protein: "50",
    ingredients: ["2 Chicken thighs, 2 tomatoes, 1 red pepper, 2 cups mixedleaf salad, 1 carrot, sea salt and black pepper, honey and mustered dressing, 2 spring onions."],
}

console.log(recipe3.ingredients)
console.log (recipe3.name)
// Recipe 4
 


// Recipe 5

// Chicken fajita recipe 4 servings
const chickenBreast = {
    "protein": 31,
    "carbs": 0,
    "fat": 3.6
  };
  
  const redOnion = {
    "protein": 1.2,
    "carbs": 9.3,
    "fat": 0.1
  };
  
  const redPepper = {
    "protein": 0.9,
    "carbs": 6,
    "fat": 0.3
  };
  
  const redChili = {
    "protein": 1.9,
    "carbs": 9.3,
    "fat": 0.2
  };
  
  const oliveOil = {
    "protein": 0,
    "carbs": 0,
    "fat": 100
  };
  
  const lime = {
    "protein": 0.7,
    "carbs": 9,
    "fat": 0.2
  };
  
  const tortillas = {
    "protein": 8.1,
    "carbs": 46,
    "fat": 6.9
  };
  
  const mixedSalad = {
    "protein": 1.4,
    "carbs": 1.6,
    "fat": 0.2
  };
  
  const freshSalsa = {
    "protein": 1.2,
    "carbs": 6.4,
    "fat": 0.2
  };
  
  
  let totalProteins = chickenBreast.protein + redOnion.protein + redPepper.protein + redChili.protein + oliveOil.protein + lime.protein + tortillas.protein + mixedSalad.protein + freshSalsa.protein;
  let totalFats = chickenBreast.fat + redOnion.fat + redPepper.fat + redChili.fat + oliveOil.fat + lime.fat + tortillas.fat + mixedSalad.fat + freshSalsa.fat;
  let totalCarbs = chickenBreast.carbs + redOnion.carbs + redPepper.carbs + redChili.carbs + oliveOil.carbs + lime.carbs + tortillas.carbs + mixedSalad.carbs + freshSalsa.carbs;
  
  
  console.log("Total Proteins:", totalProteins, "g");
  console.log("Total Fats:", totalFats, "g");
  console.log("Total Carbs:", totalCarbs, "g");


const caloriesAmount = document.getElementById('calories-amount').value;
const carbsAmount = document.getElementById('carbs-amount').value;
const fatAmount = document.getElementById('fat-amount').value;
const ProteinAmount = document.getElementById('protiein-amount').value;


