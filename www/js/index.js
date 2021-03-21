document.addEventListener("deviceready", deviceReadyTest, false);

function deviceReadyTest() {
  // binding the event with vanilla javascript
  //   document.getElementById("user_signup").addEventListener("click", userSignup);

  // binding the event with jquery
  $("#user_signup").click(userSignup);
  $("#user_login").click(userLogin);
}

function userSignup() {
  // alert("User Signup clicked");

  // read the user input
  // validate the password
  // store user data
  // check if password is empty and valid
  if (
    $("#password").val().trim().length > 0 &&
    $("#password").val() == $("#confirm_password").val()
  ) {
    localStorage.setItem("USER", $("#userName").val());
    localStorage.setItem("PASSWORD", $("#confirm_password").val());

    // to navigate to the sign in page
    window.location.href = "#login";
  } else {
    alert("Invalid password!");
  }
}

function userLogin() {
  if (
    $("#login_userName").val() == localStorage.getItem("USER") &&
    $("#login_password").val() == localStorage.getItem("PASSWORD")
  ) {
    window.location.href = "#main";
  } else {
    alert("Invalid credentials!");
  }
}
