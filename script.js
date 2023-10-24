"use strict";

const passwordBox = document.querySelector("#password");
const confirmBox = document.querySelector("#confirm");
const submitButton = document.querySelector(".account-create");
const form = document.querySelector(".form-signup");
let data;

const warning = document.createElement("p");
warning.innerHTML = "* Passwords do not match";
warning.style.color = "red";
warning.style.fontSize = "11pt";
warning.style.marginTop = "5px";
warning.style.display = "none";
form.children[4].appendChild(warning);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (comparePasswords(passwordBox.value, confirmBox.value)) {
    console.log(`Form successfully submitted at ${e.timeStamp}`);
    data = Object.fromEntries(new FormData(form));
    Object.keys(form).forEach((key) => {
      form[key].value = "";
    });
    console.log(data);
    passwordBox.style.border = "1px solid lightgray";
    confirmBox.style.border = "1px solid lightgray";
    warning.style.display = "none";
  } else {
    passwordBox.style.border = "1px solid red";
    confirmBox.style.border = "1px solid red";
    warning.style.display = "block";
  }
});

function comparePasswords(password, confirmation) {
  return password === confirmation;
}
