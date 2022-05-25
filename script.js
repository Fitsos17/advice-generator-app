const endpoint = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const button = document.querySelector("button");

function getRandomAdvice() {
  fetch(endpoint, {cache: 'no-store'})
    .then((res) => res.json())
    .then((data) => {
      adviceNumber.textContent = `Advice #${data.slip.id}`;
      adviceText.textContent = `"${data.slip.advice}"`;
    });
  return;
}

button.addEventListener("click", () => {
  getRandomAdvice();
});

getRandomAdvice();
