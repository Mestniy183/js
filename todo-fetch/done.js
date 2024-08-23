const input = document.querySelector(".form-task");
const addBtn = document.querySelector(".button");
const ul = document.querySelector(".task-list");

async function handleActive(id, isActive) {
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
function createItem(element, index) {
  let newItem = document.getElementById("template").cloneNode(true).content;
  const task = newItem.querySelector(".task");
  const inputText = newItem.querySelector(".task__text");
  inputText.value = element.element;
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

async function displayList() {
  const list = await getData();
  const activeList = list.filter((el) => el.isActive);
  console.log(activeList);
  ul.innerHTML = "";
  if (activeList.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Список пуст";
    li.classList.add("empty");
    ul.append(li);
  } else {
    activeList.forEach((element, index) => {
      createItem(element, index);
    });
  }
}

async function deleteItemApi(id) {
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
