const passwordInput = document.querySelector(".password-input");
const buttonLogin = document.querySelector(".submit");

passwordInput.addEventListener("keyup", () => {
  password = passwordInput.value;
  if (password === "31") {
    buttonLogin.addEventListener("click", () => {
      window.open("../table.html");
    });
  } else {
    alert("parol 31");
  }
});