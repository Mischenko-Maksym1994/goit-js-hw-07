function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    input.value = "";
    createBoxes(amount);
  }});

btnDestroy.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  // destroyBoxes();

  let width = 30;
  let height = 30;
  const step = 10;
  const arrayElement = [];

  for (let i = 0; i < amount; i += 1) {
    const newElement = document.createElement("div");
    newElement.style.height = `${height}px`;
    newElement.style.width = `${width}px`;
    newElement.style.backgroundColor = getRandomHexColor();

    arrayElement.push(newElement);
    width += step;
    height += step;
  }
  
  divBoxes.append(...arrayElement);
  console.log(`create ${amount} elements`);
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}