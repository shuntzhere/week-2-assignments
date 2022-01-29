const shrinkNav = document.querySelector(".short-box");
console.log("shivansh");
const shrink = () => {
  console.log(this.scrollY);
  if (this.scrollY) {
    shrinkNav.classList.add(".nav__short");
  }
};
shrinkNav.addEventListener("scroll", shrink);
