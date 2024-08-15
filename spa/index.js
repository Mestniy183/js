//Регистрация
const name = document.querySelector(".name");
const emailReg = document.querySelector(".email-reg");
const passwordReg = document.querySelector(".password-reg");
const btnReg = document.querySelector(".btn-reg");

async function regUser() {
  try {
    const res = await fetch("https://6b0fb497bd0d031b.mokky.dev/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: emailReg.value,
        password: passwordReg.value,
      }),
    });
    const data = await res.json();
    localStorage.setItem("token", data.token);
    window.location.pathname = "spa/page.html";
  } catch (error) {
    console.error(error);
  }
}
btnReg.addEventListener("click", (e) => {
  e.preventDefault();
  regUser();
});
//Вход
const emailLogin = document.querySelector(".email-login");
const passwordLogin = document.querySelector(".password-login");
const btnLogin = document.querySelector(".btn-login");
async function authUser() {
  try {
    const auth = await fetch("https://6b0fb497bd0d031b.mokky.dev/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailLogin.value,
        password: passwordLogin.value,
      }),
    });
    const data = await auth.json();
    localStorage.setItem("token", data.token);
    window.location.pathname = "spa/page.html";
  } catch (error) {
    console.error(error);
  }
}
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  authUser();
});
const token = localStorage.getItem("token");
console.log(token);
if (token) {
  window.location.pathname = "spa/page.html";
}
