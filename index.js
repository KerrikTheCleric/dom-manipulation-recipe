//1.
const recipeNameElement = document.getElementById("recipe-name");
console.log(recipeNameElement.textContent);

//2. 
console.log(recipeNameElement.outerHTML);

//3.
const descriptionElement = document.querySelector(".description");
const descriptionStyle = window.getComputedStyle(descriptionElement);
console.log(descriptionStyle.fontSize);