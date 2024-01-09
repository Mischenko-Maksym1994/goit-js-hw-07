
const category = document.querySelector("#categories");

const arrayItem = [...category.children];

// const numberOfCategory = category.children.length;
// console.log(`Number of category : ${numberOfCategory}`);

// const categoryTitle = arrayItem.forEach(function (item) {
//     let firstTitle = item.firstElementChild;
//     let lastChild = item.lastElementChild;
//     let lengthLastChild = lastChild.children.length;

//     console.log(`Category: ${firstTitle.textContent}`);
//     console.log(`Elements: ${lengthLastChild}`);
// });

// console.log(categoryTitle(arrayItem));

function titleCategory(array) {
    for (let element of array) {
        let firstTitle = element.firstElementChild;
        let lastChild = element.lastElementChild;
        let lengthLastChild = lastChild.children.length;
        // console.log(lengthLastChild);
        // console.log(lastChild);
        console.log(`Category: ${firstTitle.textContent}`);
        console.log(`Elements: ${lengthLastChild}`); 

        lastChild.
     }
};

console.log(titleCategory(arrayItem));

