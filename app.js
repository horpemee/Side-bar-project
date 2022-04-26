const navMenu = document.querySelector("#navMenu");
const sideBar = document.querySelector(".container");
const cancel = document.querySelector(".cancel");
const delIcon = document.querySelector("#del");
const close = document.querySelector(".animate__rotateIn");

navMenu.addEventListener("click", () => {
  // navMenu.classList.toggle("active");
  // cancel.classList.toggle("active");
});

navMenu.addEventListener("click", handleBar);

function handleBar() {
  sideBar.style.visibility = "visible";
  // }
}

delIcon.addEventListener("click", deleteItem);

function deleteItem() {
  // alert("hello");
  sideBar.style.display = "none";
}

close.addEventListener("click", display);

function display() {
  close.style.animation - iteration - count == "infinite";
}
