import { createItem, ul } from "./createItem.js";
import { getData } from "./getData.js";
export async function displayList() {
  const list = await getData();
  const unActiveList = list.filter((el) => !el.isActive);
  ul.innerHTML = "";
  if (unActiveList.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Список пуст";
    li.classList.add("empty");
    ul.append(li);
  } else {
    unActiveList.forEach((element, index) => {
      createItem(element, index);
    });
  }
}
