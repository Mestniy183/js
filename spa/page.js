const input = document.querySelector(".post");
const btn = document.querySelector(".add-post");
const btnExit = document.querySelector(".exit");
btnExit.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.pathname = "spa/index.html";
});

const token = localStorage.getItem("token");
if (!token) {
  window.location.pathname = "spa/index.html";
}
async function createPost() {
  try {
    await fetch("https://6b0fb497bd0d031b.mokky.dev/posts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: input.value,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  createPost();
});
