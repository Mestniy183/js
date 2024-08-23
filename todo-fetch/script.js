import { displayList } from "./scripts/displayList.js";
import { newItem } from "./scripts/newItem.js";
const addBtn = document.querySelector(".button");

document.addEventListener("DOMContentLoaded", () => {
  displayList();
  const curentURL = window.location.href;
  console.log(curentURL);
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    console.log(link.href);
    if (link.href === curentURL) {
      link.classList.add("link-active");
    }
  });
});

addBtn.addEventListener("click", newItem);
