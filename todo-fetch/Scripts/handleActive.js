import { displayList } from "./displayList.js";
export async function handleActive(id, isActive) {
  try {
    await fetch(`https://d93f92d42f1ee5f0.mokky.dev/items/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isActive: !isActive,
      }),
    });
    await displayList();
  } catch (error) {
    console.error(error);
  }
}
