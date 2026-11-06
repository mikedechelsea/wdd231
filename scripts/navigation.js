const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
