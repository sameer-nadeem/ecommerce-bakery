// BAct to top
const toTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
});
let menuarr = document.getElementsByClassName("menu-item");
Array.from(menuarr).forEach((item, index) => {
  item.onclick = (e) => {
    let curactive = document.querySelector(".menu-item.active");
    curactive.classList.remove("active");
    item.classList.add("active");
  };
});
