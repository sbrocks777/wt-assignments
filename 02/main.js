const form = document.querySelector('form');
const greet = document.querySelector('#greet')
const resetBtn = document.querySelector('.reset-btn')

const d = new Date();
const h = d.getHours();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = form.username.value;
  let email = form.email.value;

  document.getElementById("date").innerHTML = "Date: " + d.toDateString();

  if (h >= 4 && h < 12)
    greet.innerHTML = "Good morning " + username;
  else if (h >= 12 && h < 17)
    greet.innerHTML = "Good Afternoon " + username;
  else if (h > 17 && h < 21)
    greet.innerHTML = "Good Evening" + username;
  else greet.innerHTML = "Good night " + username;
  validateemail(email);
});

function validateemail(email) {
  var x = email;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");

  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert(
      " Plese enter a valid e-mail addres \n atposition:" +
        atposition +
        "\n dotposition:" +
        dotposition
    );
    return false;
  }
}

resetBtn.addEventListener('click', () => {
    form.reset();
    greet.innerHTML = '';
    document.getElementById("date").innerHTML = '';
})
