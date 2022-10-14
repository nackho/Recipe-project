// //Add/Remove Ingredients + Button
// const recipeIngredient = document.getElementById("ingredientItem");
// let addIngredientBtn = document.getElementById("addIngredientBtn");
// let removeIngredientBtn = document.getElementById("removeIngredientBtn");

// function addIngredient(){
//     let input = document.createElement("input");
//     button = document.createElement("button");
//     button.innerHTML = "X";
//     button.onclick = removeIngredient;
//     recipeIngredient.appendChild(input);
//     recipeIngredient.appendChild(button)
// }

// function removeIngredient() {
//     recipeIngredient.removeChild(this.previousElementSibling);
//     recipeIngredient.removeChild(this);
// }

// addIngredientBtn.addEventListener("click", addIngredient);
// removeIngredientBtn.addEventListener("click", removeIngredient)

// //Add/Remove Methods + Button
// const recipeMethod = document.getElementById("methodItem");
// let addMethodBtn = document.getElementById("addMethodBtn");
// let removeMethodBtn = document.getElementById("removeMethodBtn");

// function addMethod(){
//     let input = document.createElement("input");
//     button = document.createElement("button");
//     button.innerHTML = "X";
//     input.placeholder = "What's next?";
//     button.onclick = removeMethod;
//     recipeMethod.appendChild(input);
//     recipeMethod.appendChild(button)
// }

// function removeMethod() {
//     recipeMethod.removeChild(this.previousElementSibling);
//     recipeMethod.removeChild(this);
// }

// addMethodBtn.addEventListener("click", addMethod);
// removeMethodBtn.addEventListener("click", removeMethod)

let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
  let newIngredients = ingredientDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName('input')[0];
  input.value = '';
  ingredientList.appendChild(newIngredients);
});

let addMethodBtn = document.getElementById('addMethodBtn');
let methodList = document.querySelector('.methodList');
let methodDiv = document.querySelectorAll('.methodDiv')[0];

addMethodBtn.addEventListener('click', function(){
  let newMethod = methodDiv.cloneNode(true);
  let input = newMethod.getElementsByTagName('input')[0];
  input.value = '';
  methodList.appendChild(newMethod);
});