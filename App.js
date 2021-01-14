const submitBtn = document.getElementById("submit");
const email = document.getElementById("email");
const inputMsg = document.getElementById("message");
const errorIcon = document.querySelector(".error-icon");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value && email.validity.valid) {
    email.value = "";
    email.focus(false);
  } else {
    email.classList.add("error");
    inputMsg.style.opacity = "1";
    errorIcon.style.opacity = "1";

    email.onanimationend = () => {
      email.classList.remove("error");
      inputMsg.style.opacity = "0";
      errorIcon.style.opacity = "0";
    };
  }
});
