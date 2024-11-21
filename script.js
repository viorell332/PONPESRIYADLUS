function openDropdown() {
  document.getElementById("dropdown").style.display = "block";
}

function closeDropdown() {
  document.getElementById("dropdown").style.display = "none";
}

// Toggle class active
const dropBtn = document.querySelector(".dropdown-content");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  dropBtn.classList.toggle("active");
};
// klik di mana saja untuk keluar dari nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !dropBtn.contains(e.target)) {
    dropBtn.classList.remove("active");
  }
});
