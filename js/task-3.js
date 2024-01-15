
const nameInput = document.querySelector("#name-input");
console.log(nameInput);

const nameOutput = document.querySelector("#name-output");
console.log(nameOutput);

nameInput.addEventListener("input", (event) => {nameOutput.textContent = event.currentTarget.value;
});


const classbox = document.querySelector("body");
classbox.classList.add("box");

const textStyle = document.querySelector("body h1");
textStyle.classList.add("text-style");