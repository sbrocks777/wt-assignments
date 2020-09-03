const form = document.querySelector("#validationForm")
const usernamerr = document.querySelector(".username-err")
const agerr = document.querySelector(".age-err")
const clearBtn = document.querySelector(".btn.btn-primary")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = false;
  let username = form.username.value
  let age = form.age.value

  if (username === null || username === "") {
    usernamerr.innerHTML = "Username is required"
    valid = false;
  } else if (!isNaN(username) || !isNaN(username[0])) {
    usernamerr.innerHTML = "Username does not start with number"
    valid = false;
  } else {
    usernamerr.innerHTML = ""
    valid = true
  }

  if (age === null || age === "") {
    agerr.innerHTML = "Age is required"
    valid = false;
  } else if (age <= 18) {
    agerr.innerHTML = "You are under age!"
    valid = false;
  } else if (age >= 40) {
    agerr.innerHTML = "You are over age!"
    valid = false;
  } else {
    agerr.innerHTML = ""
    valid = true
  }

  if(valid) {
    document.querySelector('h3').innerHTML = `
    Hi ${username},<br> I know you are ${age} years old.
    `
  }
});

clearBtn.addEventListener("click", () => {
  form.reset();
  usernamerr.innerHTML = ""
  agerr.innerHTML = ""
  document.querySelector('h3').innerHTML = ''
});
