const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Formulir siap digunakan. Hubungkan ke layanan autentikasi untuk masuk.";
});
