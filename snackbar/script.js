const btn = document.querySelector(".btn");
const snackBar = document.querySelector(".snackbar");
const closeBtn = document.querySelector(".fas");

const showSnackbar = () => {
  setTimeout(() => {
    snackBar.classList.remove("show");
  }, 3000);
  snackBar.classList.add("show");
};

btn.addEventListener("click", showSnackbar);
closeBtn.addEventListener("click", () => snackBar.classList.remove("show"));
