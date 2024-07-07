//1.
const logoText = document.getElementsByClassName("logo-text");
logoText[0].style.color = "#384241";

//2. 
document.body.children[0].style.justifyContent = "flex-start";

//3.
document.body.children[0].style.borderBottomColor = "lightgray";

//4.
const recipeNameText = document.getElementById("recipe-name");
recipeNameText.textContent = "Frozen Cheescake";

//5.
const timeElements = document.getElementsByClassName("time-container");
timeElements[0].children[0].classList.add("material-icons");

//6.
timeElements[0].children[1].textContent = "60+ min";

//7.
const imageElement = document.querySelector(".image-container");
imageElement.children[0].src = "assets/frozen-cheesecake-slice.jpg"

//8.
const ingredientElement = document.getElementsByClassName("ingredients-container");
ingredientElement[0].style.backgroundColor = "#f9f9f9";

//9.
const bottomIngredientListELements = document.getElementsByClassName("ingredients-list-bottom");
bottomIngredientListELements[0].removeChild(bottomIngredientListELements[0].firstElementChild);
const ingredient1 = document.createElement("li");
ingredient1.textContent = "15st digistivetex";
const ingredient2 = document.createElement("li");
ingredient2.textContent = "Lite smör";
bottomIngredientListELements[0].appendChild(ingredient1);
bottomIngredientListELements[0].appendChild(ingredient2);

//10.
const pasteIngredientListELements = document.getElementsByClassName("ingredients-list-paste");
pasteIngredientListELements[0].children[2].textContent = "3tsk vaniljsocker";

//11.
const ingredient3 = document.createElement("li");
ingredient3.textContent = "400g naturell philadelphiaost";
pasteIngredientListELements[0].appendChild(ingredient3);

//12.
const instructionsHeaderElements = document.getElementsByClassName("instructions-container");
instructionsHeaderElements[0].children[0].classList.remove("shadow");

//13.
const instructionsListElements = document.getElementsByClassName("instructions-list");
instructionsListElements[0].children[1].textContent = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i enliten bunke."
instructionsListElements[0].children[8].textContent = "Häll smeten i formen, smula över de resterande digistivetexen om du vill."