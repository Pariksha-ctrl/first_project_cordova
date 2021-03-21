document.addEventListener("deviceready", deviceReadyTest, false);

function deviceReadyTest() {
  // binding the event
  document.getElementById("user_signup").addEventListener("click", userSignup);
}

function userSignup() {
  alert("User Signup clicked");
}
