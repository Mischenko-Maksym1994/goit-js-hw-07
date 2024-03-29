
const body = document.body;
const btnChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  textColor.textContent = color;
});