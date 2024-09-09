const registrationForm = document.getElementById("registration");
const username = registrationForm["username"];
console.log(username);

const errorDisplayDiv = document.getElementById("errorDisplay");

registrationForm.addEventListener("submit", validate);


function validate(e) {
  e.preventDefault();

  const usernameValue = checkUserName();
  if (usernameValue === false) {
    e.returnValue = false;
    return false;
  }
}

function checkUserName() {
  
  const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;

  // test regex
  console.log(regex.test(username.value));

  if (!regex.test(username.value)) {
    console.log("gere");
    errorDisplayDiv.innerHTML = "<small>Provide two special characters</small>";
    errorDisplayDiv.style.display = "block";

    username.focus();
    return false;
  }
  return username.value;
}
