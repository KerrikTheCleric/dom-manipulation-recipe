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