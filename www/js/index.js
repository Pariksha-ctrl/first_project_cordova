document.addEventListener("deviceready", deviceReadyTest, false);

function deviceReadyTest() {
  // binding the event with vanilla javascript
  //   document.getElementById("user_signup").addEventListener("click", userSignup);

  // binding the event with jquery
  $("#user_signup").click(userSignup);
}

function userSignup() {
  alert("User Signup clicked");
}
