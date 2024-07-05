//1.
const recipeNameElement = document.getElementById("recipe-name");
console.log(recipeNameElement.textContent);

//2. 
console.log(recipeNameElement.outerHTML);

//3.
const descriptionElement = document.querySelector(".description");
const descriptionStyle = window.getComputedStyle(descriptionElement);
console.log(descriptionStyle.fontSize);

//4. 
const imageElement = document.querySelector(".image-container");
console.log(imageElement.children[0].alt);

//5.

const imageItem = {url: string = "", height: number=0, width: number=0};
imageItem.url = imageElement.children[0].src;
imageItem.height = imageElement.children[0].naturalHeight;
imageItem.width = imageElement.children[0].naturalWidth;

console.log(imageItem);

//6. 

const ingredientListElement = document.querySelector(".ingredients-list-paste");


console.log(ingredientListElement.children.length);