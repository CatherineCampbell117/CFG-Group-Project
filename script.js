// Recipe 1
const chickenMushroomGnocchi = {
    name: "Chicken and Mushroom Gnocchi",
    calories: 393,
    ingredients: {
        gnocchi: {
            grams: 125,
            carbs: 45,
            fat: 1,
            protein: 4.5
        },
        chicken: {
            grams: 120,
            carbs: 0,
            fat: 1,
            protein: 28
        },
        mushrooms: {
            grams: 40,
            carbs: 0,
            fat: 0,
            protein: .5
        },
        softCheese: {
            grams: 35,
            carbs: 1,
            fat: 4,
            protein: 2.5
        },
        redOnion: {
            grams: 25,
            carbs: 2,
            fat: 0,
            protein: .2
        }
    }

}

// Recipe 2

// Recipe 3

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