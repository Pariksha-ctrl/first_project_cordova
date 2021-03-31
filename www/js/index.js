document.addEventListener("deviceready", deviceReadyTest, false);
//document.addEventListener("pause", onPause, false);
//document.addEventListener("resume", onResume, false);

function deviceReadyTest() {
  // binding the event with vanilla javascript
  //   document.getElementById("user_signup").addEventListener("click", userSignup);

  // binding the event with jquery
  $("#user_signup").click(userSignup);
  $("#user_login").click(userLogin);
  $("#add_task_button").click(addTask);

  //document.getElementById("add_task_button").addEventListener("click", addTask);

  //navigator.camera.getPicture(cameraSuccess, cameraError, {});
}

/****************** EVENT *********************/
function onPause() {
  alert("App is on Pause");
}

function onResume() {
  alert("App is on Resume");
}

/****************** CAMERA *********************/
// function cameraSuccess(imageUri) {
//   console.log(imageUri);
// }

// function cameraError(message) {
//   alert("Failed because: " + message);
// }

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

// RUNNINNG CODE

function addTask() {
  //$(document).ready(addTask());
  var newTask = $("#add_to_list").val();
  // to prevent adding empty items, we will check the length
  if (newTask.length > 0) {
    $("#to_do_list").append("<li>" + newTask + "</li>");
    $("#add_to_list").val("");
  }
}

// /RUNNINNG CODE

//function addTask() {
// let add_task_input = document.getElementById("add_task_input");
// let add_task_button = document.getElementById("add_task_button");

// add_task_input_value = add_task_input.val;
// // Assuming that the local storage has some data
// let web_task = localStorage.getItem("localtask");
// if (web_task == null) {
//   task_obj = [];
// } else {
//   task_obj = JSON.parse(web_task);
// }

// // adding new value to the array
// // putting new value into the local storage
// localStorage.setItem("localtask", task_obj);

//   var newTaskItem = $("add_task_input").val();
//   // to prevent adding empty items, we will check the length
//   if (newTaskItem.length > 0) {
//     $("added_task_list").append("<td>" + newTaskItem + "</td>");
//     $("add_task_input").val("");
//   }
// }

// $(document).ready(addTask());
// $("#add_task_button").click(addTask());
// var newTask = $("#add_to_list").val();
// // to prevent adding empty items, we will check the length
// if (newTask.length > 0) {
//   $("#to_do_list").append("<li>" + newTask + "</li>");
//   $("#add_to_list").val("");
//}
