document.addEventListener("deviceready", deviceReadyTest, false);
//document.addEventListener("pause", onPause, false);
//document.addEventListener("resume", onResume, false);

function deviceReadyTest() {
  $("#user_signup").click(userSignup);
  $("#user_login").click(userLogin);
  $("#add_task_button").click(AddTaskItem);
  $(document).on("click", ".destroy", deleteTask);
  $(document).on("click", ".toggle", toggleEachItemAsCompleted);
  $(document).on("click", ".toggle", markAllItemAsCompleted);
  $(document).on("click", ".toggle", toggleAllItemCompleted);
  $("#toggle_all_Item").click(ToggleAllItem);

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

function AddTaskItem() {
  var $toDoList = $("#to_do_list");
  var $newTask = $("#new_task");
  var AddListItem_prependString =
    '<li><input type="checkbox" class="toggle" /><span class="text">';
  var AddListItem_appendString =
    '</span><button class="destroy"></button></li>';
  $toDoList.append(
    AddListItem_prependString + $("#new_task").val() + AddListItem_appendString
  );
  $newTask.val("");
}

// to delete task one by one
function deleteTask() {
  $(this).closest("li").remove();
}

// to toggle each task item as completed - i.e when toggle of each item on right side is clicked there will be line-through the item
function toggleEachItemAsCompleted() {
  if ($(this).parent().css("textDecoration") == "line-through") {
    $(this).parent().css("textDecoration", none);
    $(this).parent().css("opacity", 1);
  } else {
    $(this).parent().css("textDecoration", "line-through");
    $(this).parent().css("opacity", "0.50");
  }
}

// function markAllItemAsCompleted() {
//   if ($(this).parent().css("textDecoration") == "line-through") {
//     $(this).parent().css("textDecoration", "none");
//     $(this).parent().css("opacity", "1");
//   } else {
//     $(this).parent().css("textDecoration", "line-through");
//     $(this).parent().css("opacity", "0.50");
//   }
// }

// function toggleAllItemCompleted() {
//   $(this).closest("li").toggleClass("completedItem");
// }

// function ToggleAllItem() {
//   $toDoList.find("li").addClass("completedItem", this.checked);
// }
