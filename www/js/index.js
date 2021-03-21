document.addEventListener("deviceready", deviceReadyTest, false);

function deviceReadyTest() {
  // binding the event with vanilla javascript
  //   document.getElementById("user_signup").addEventListener("click", userSignup);

  // binding the event with jquery
  $("#user_signup").click(userSignup);
}

function userSignup() {
  // alert("User Signup clicked");

  // read the user input

  if ($("#password").val() == $("#confirm_password").val()) {
    localStorage.setItem("USER", $("#userName").val());
    localStorage.setItem("PASSWORD", $("#confirm_password").val());

    // to navigate to the sign in page
    window.location.href = '#login'
  } else {
    alert("Invalid password!");
  }
  // validate the password

  // store user data
}
