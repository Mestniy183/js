import { displayList } from "./displayList.js";
const input = document.querySelector(".form-task");
export async function newItem(e) {
  e.preventDefault();
  try {
    if (input.value !== "") {
      await fetch("https://d93f92d42f1ee5f0.mokky.dev/items", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          element: input.value.trim(),
          isActive: false,
        }),
      });
      await displayList();
      input.value = "";
    } else {
      alert("Поле не может быть пустым");
    }
  } catch (error) {
    console.error(error);
  }
}
