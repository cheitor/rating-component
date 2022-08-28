
const initial = document.querySelector(".container")
const final = document.querySelector(".thanks")
const submitbtn = document.getElementById("submit")
const opt = document.querySelectorAll(".btn")
const ratings = document.getElementById("rating")

/* Show in the screen the thank you state */
submitbtn.addEventListener("click", () => {
  initial.style.display = "none"
  final.classList.remove("hidden")
})

// Show in the screen the user's rate
opt.forEach((rate) => {
  rate.addEventListener("click", () => {
    ratings.innerHTML = rate.innerHTML
  })
})

  