import { displayList } from "./displayList.js";
export async function deleteItemApi(id) {
  try {
    if (confirm("Точно хотите удалить?")) {
      await fetch(`https://d93f92d42f1ee5f0.mokky.dev/items/${id}`, {
        method: "DELETE",
      });
      await displayList();
    }
    return;
  } catch (error) {
    console.error(error);
  }
}
