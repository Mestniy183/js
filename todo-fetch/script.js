const input = document.querySelector(".form-task");
const addBtn = document.querySelector(".button");
const ul = document.querySelector(".task-list");
let isActive = false;

async function handleActive(id) {
  const task = document.querySelector(".task");
  isActive = !isActive;
  console.log(isActive);
  if (isActive) {
    task.classList.add("task-active");
  } else {
    task.classList.remove("task-active");
  }

  try {
    await fetch(`https://d93f92d42f1ee5f0.mokky.dev/items/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isActive: isActive,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}
async function newItem() {
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
    }
    alert("Поле не может быть пустым");
    return;
  } catch (error) {
    console.error(error);
  }
}

async function changeItem(id, e) {
  const newValue = e.target.value;
  try {
    await fetch(`https://d93f92d42f1ee5f0.mokky.dev/items/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        element: newValue,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

async function getData() {
  try {
    const response = await fetch("https://d93f92d42f1ee5f0.mokky.dev/items", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
function createItem(element, id, index) {
  let newItem = document.getElementById("template").cloneNode(true).content;
  const inputText = newItem.querySelector(".task__text");
  inputText.value = element;
  inputText.addEventListener("blur", (e) => {
    changeItem(element, id, e);
  });
  const doneBtn = newItem.querySelector(".done-btn");
  doneBtn.textContent = isActive ? "undone" : "Done";
  doneBtn.addEventListener("click", () => {
    doneBtn.textContent = isActive ? "undone" : "Done";
    handleActive(id);
  });
  newItem.querySelector(".task__delete").addEventListener("click", () => {
    deleteItemApi(id);
  });
  newItem.querySelector(".count").textContent = index + 1;
  ul.append(newItem);
}

async function displayList() {
  const list = await getData();
  list.forEach((element, index) => {
    createItem(element.element, element.id, index);
  });
}

async function deleteItemApi(id) {
  try {
    if (confirm("Точно хотите удалить?")) {
      await fetch(`https://d93f92d42f1ee5f0.mokky.dev/items/${id}`, {
        method: "DELETE",
      });
      window.location.reload();
    }
    return;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", displayList);
// function deleteItem(event) {
//   event.preventDefault();
//   const target = event.target.parentElement;
//   target.remove();
// }
addBtn.addEventListener("click", newItem);
