const loginForm = document.querySelector("#login-form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const formMessage = document.querySelector("#form-message");

const DEMO_CREDENTIALS = {
  username: "petani01",
  password: "kompos123",
};

loginForm.addEventListener("input", () => {
  formMessage.textContent = "";
  usernameInput.removeAttribute("aria-invalid");
  passwordInput.removeAttribute("aria-invalid");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (
    username !== DEMO_CREDENTIALS.username ||
    password !== DEMO_CREDENTIALS.password
  ) {
    usernameInput.setAttribute("aria-invalid", "true");
    passwordInput.setAttribute("aria-invalid", "true");
    formMessage.textContent = "Username atau password demo tidak sesuai.";
    return;
  }

  window.location.href = "dashboard.html";
});
