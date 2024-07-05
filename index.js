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

//7.
console.log(ingredientListElement.children[3].outerHTML);

//8.
class instructionItem{
    constructor(order, text){
        this.order = order;
        this.text = text;
    }
}

let instructionItems = [];
const instructionsListElement = document.querySelector(".instructions-list");

for (let index = 0; index < instructionsListElement.children.length; index++) {
    instructionItems.push(new instructionItem(index, instructionsListElement.children[index].textContent));
}

console.log(instructionItems);