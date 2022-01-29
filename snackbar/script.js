const baslineBtn = document.querySelector(".baseline-btn");
const leadingBtn = document.querySelector(".leading-btn");
const stackedBtn = document.querySelector(".stacked-btn");
const baselineBar = document.querySelector(".show-baseline");
const leadingBar = document.querySelector(".show-leading");
const stackedBar = document.querySelector(".show-stacked");

const showBaseline = () => {
  console.log("ok");
  setTimeout(() => {
    console.log("go");
    baselineBar.classList.remove("show-baseline");
    baselineBar.style.visibility = "hidden";
  }, 5000);
  baselineBar.style.visibility = "visible";
  baselineBar.classList.add("show-baseline");
};

const showLeading = () => {
  console.log("ok");
  setTimeout(() => {
    console.log("go");
    leadingBar.classList.remove("show-leading");
    leadingBar.style.visibility = "hidden";
  }, 5000);
  leadingBar.style.visibility = "visible";
  leadingBar.classList.add("show-leading");
};

const showStacked = () => {
  console.log("ok");
  setTimeout(() => {
    console.log("go");
    stackedBar.classList.remove("show-stacked");
    stackedBar.style.visibility = "hidden";
  }, 5000);
  stackedBar.style.visibility = "visible";
  stackedBar.classList.add("show-stacked");
};

baslineBtn.addEventListener("click", () => showBaseline());
leadingBtn.addEventListener("click", () => showLeading());
stackedBtn.addEventListener("click", () => showStacked());
