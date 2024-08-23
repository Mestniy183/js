import { changeItem } from "./changeItem.js";
import { handleActive } from "./handleActive.js";
import { deleteItemApi } from "./deleteItemApi.js";
 export const ul = document.querySelector(".task-list");
export function createItem(element, index) {
  let newItem = document.getElementById("template").cloneNode(true).content;
  const task = newItem.querySelector(".task");
  const inputText = newItem.querySelector(".task__text");
  inputText.value = element.element;
  inputText.addEventListener("blur", (e) => {
    changeItem(element.id, e);
  });

  const doneBtn = newItem.querySelector(".done-btn");
  doneBtn.textContent = element.isActive ? "undone" : "Done";
  if (element.isActive) {
    task.classList.add("task-active");
  } else {
    task.classList.remove("task-active");
  }
  doneBtn.addEventListener("click", () => {
    const curentState = element.isActive;
    if (curentState) {
      task.classList.add("task-active");
    } else {
      task.classList.remove("task-active");
    }
    doneBtn.textContent = curentState ? "undone" : "Done";
    handleActive(element.id, curentState);
    element.isActive = !curentState;
  });

  newItem.querySelector(".task__delete").addEventListener("click", () => {
    deleteItemApi(element.id);
  });

  newItem.querySelector(".count").textContent = index + 1;
  ul.append(newItem);
}
