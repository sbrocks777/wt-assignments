const form = document.querySelector("#validationForm");
const usernamerr = document.querySelector(".username-err");
const agerr = document.querySelector(".age-err");
const clearBtn = document.querySelector(".btn.btn-primary");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = form.username.value;
  let age = form.age.value;

  if (username === null || username === "") {
    usernamerr.innerHTML = "Username is required";
  } else if (!isNaN(username) || !isNaN(username[0])) {
    usernamerr.innerHTML = "Username does not start with number";
  } else {
    usernamerr.innerHTML = "";
  }

  if (age === null || age === "") {
    agerr.innerHTML = "Age is required";
  } else if (age <= 18) {
    agerr.innerHTML = "You are under age!";
  } else if (age >= 40) {
    agerr.innerHTML = "You are over age!";
  } else {
    agerr.innerHTML = "";
  }
});

clearBtn.addEventListener("click", () => {
  form.reset();
  usernamerr.innerHTML = "";
  agerr.innerHTML = "";
});
