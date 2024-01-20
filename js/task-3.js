
const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});

const classbox = document.querySelector("body");
classbox.classList.add("box");

const textStyle = document.querySelector("body h1");
textStyle.classList.add("text-style");