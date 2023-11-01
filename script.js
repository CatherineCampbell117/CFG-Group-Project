// Recipe 1
const chickenMushroomGnocchi = {
  name: "Chicken and Mushroom Gnocchi",
  calories: 393,
  carbs: 40,
  fat: 5,
  protein: 25,
  ingredients: ["gnocchi", "chicken", "mushrooms", "soft cheese", "red onion"]
}

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

const findRecipesButton = document.getElementById('findRecipes')
const recipeList = document.getElementById('list')
const maxCaloriesInput = document.getElementById('maximun-calories-input')

function getFilteredRecipes(criteria) {
  return recipes.filter(function byCriteria(currentRecipe) {
    return currentRecipe.calories <= criteria.maxCalories
  })
}

findRecipesButton.addEventListener('click', function() {
  const maxCaloriesInputValue = maxCaloriesInput.value // this is a string
  // !!! this do not handle is the user types something else than a number !!!
  const maxCalories = parseInt(maxCaloriesInputValue) // now it is a number

  const criteria = {
    maxCalories: maxCalories
  } 
  const filteredRecipes = getFilteredRecipes(criteria)

  list.innerHTML = '' // to empty the list to start from scratch at every click

  filteredRecipes.forEach(function(currentRecipe) {
    

    const recipename = document.createElement('span')
    recipename.textContent = currentRecipe.name;
    
    const ingredientLabel = document.createElement('span')
    ingredientLabel.textContent = 'Ingredients: '

    const ingredientsList = document.createElement('ul')
    currentRecipe.ingredients.forEach(function(currentIngredient) {
      const ingredientItem = document.createElement('li')
      ingredientItem.textContent = currentIngredient

      ingredientsList.appendChild(ingredientItem)
    })

    const ingredientsListWrapper = document.createElement('div')
    ingredientsListWrapper.appendChild(ingredientLabel)
    ingredientsListWrapper.appendChild(ingredientsList)

    const recipeItem = document.createElement('li')
    recipeItem.appendChild(recipename)
    recipeItem.appendChild(ingredientsListWrapper)
    

    recipeList.appendChild(recipeItem);
  })
})
