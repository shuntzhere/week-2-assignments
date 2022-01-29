const shrinkNav = document.querySelector(".short-box");

const shrink = () => {
  console.log(this.scrollY);
};
shrinkNav.addEventListener("click", shrink);
