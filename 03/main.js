const form = document.querySelector("form");
const greet = document.querySelector("#greet");
const resetBtn = document.querySelector(".reset-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = form.username.value;
  let mobile = form.mobile.value;
  if (validation(username, mobile)) {
    greet.innerHTML = `Hello ${username} <br>! This is ypur mobile no.${mobile}`;
  }
});

function validation(username, mobile) {
  if (!isNaN(username)) {
    alert("Username must be character");
    return false;
  } else if (username.length > 20) {
    alert("Character must be less than 20");
    return false;
  }

  const b = mobile.replace(/[\(/)\.\-\ ]/g, "");
  if (!(b.length === 10)) {
    alert("Mobile number must be 10 digits long");
    return false;
  } else if (isNaN(parseInt(b))) {
    alert("Mobile should not be character");
    return false;
  }
  return true;
}

resetBtn.addEventListener("click", () => {
  form.reset();
  greet.innerHTML = "";
});
