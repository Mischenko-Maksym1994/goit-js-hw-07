
const category = document.querySelector("#categories");

const arrayItem = [...category.children];

function titleCategory(array) {
    for (let element of array) {
        let firstTitle = element.firstElementChild;
        let lastChild = element.lastElementChild;
        let lengthLastChild = lastChild.children.length;
        // console.log(lengthLastChild);
        // console.log(lastChild);
        console.log(`Category: ${firstTitle.textContent}`);
        console.log(`Elements: ${lengthLastChild}`);
     }
};

console.log(titleCategory(arrayItem));

