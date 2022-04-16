const ratingDiv = document.getElementById("ratingsDiv");
const thankYouDiv = document.getElementById("thankYouDiv");

const ratingButtons = document.querySelectorAll("button.circle");
const template = document.querySelector("#template");
const submitBtn = document.getElementById("submitBtn");

let clickedRating;

ratingButtons.forEach((number) => {
  number.addEventListener("click", (e) => {
    ratingButtons.forEach((number) => {
      number.classList.remove("bg-neutralLightGrey");
    });
    clickedRating = e.target.innerText;
    number.classList.add("bg-neutralLightGrey");
  });
});

submitBtn.addEventListener("click", () => {
  template.textContent = `You selected ${clickedRating} out of 5`;
  ratingDiv.classList.add("hidden");
  thankYouDiv.classList.remove("hidden");
});
