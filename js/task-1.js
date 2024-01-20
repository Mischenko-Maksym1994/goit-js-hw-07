
const category = document.querySelector("#categories");

const arrayItem = [...category.children];
const lengthArray = arrayItem.length;
console.log(`Number of categories: ${lengthArray}`);

function logCategoryDetails(array) {
    for (let element of array) {
        let firstTitle = element.firstElementChild;
        let lastChild = element.lastElementChild;
        let lengthLastChild = lastChild.children.length;
        
        console.log(`Category: ${firstTitle.textContent}`);
        console.log(`Elements: ${lengthLastChild}`);
     }
};

logCategoryDetails(arrayItem);

