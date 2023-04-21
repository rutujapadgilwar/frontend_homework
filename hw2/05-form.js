function validateForm() {
  const formatName = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0123456789]/;
  const formatEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let fieldName = document.forms["form1"]["Username"].value;
  let fieldEmail = document.forms["form1"]["email"].value;

  let validBool = true;
  if (fieldName === "" || fieldName.match(formatName)) {
    window.alert("Please enter a valid Name");
    validBool = false;
  }
  if (fieldEmail === "" || !fieldEmail.match(formatEmail)) {
    window.alert("Please enter a valid Email");
    validBool = false;
  }
  return validBool;
}
function resetForm() {
  document.getElementById("form1").reset();
}
function submitForm() {
  if (!validateForm()) {
    return;
  }
  let name = document.getElementById("Username").value;
  let email = document.getElementById("email").value;
  console.log("========Form Submission======");
  console.log("Name: " + name);
  console.log("Email: " + email);

  let registrationStatus = document.getElementById("registrationStatus").value;
  if (registrationStatus == "") {
    console.log("Class Registration: No status");
  } else {
    console.log("Class Registration: ", registrationStatus);
  }

  let courseCheckbox = [];
  courseSelection = "Course Selection: ";
  courseCheckbox = document.getElementsByName("courseSelection");
  const selectedCourses = [];
  if (courseCheckbox[0].checked === true) {
    selectedCourses.push("Programming Language");
  }
  if (courseCheckbox[1].checked === true) {
    selectedCourses.push("Operating System");
  }
  if (courseCheckbox[2].checked === true) {
    selectedCourses.push("Full Stack Web Developement");
  }
  console.log("Course Selection: " + selectedCourses.toString());

  let comment = document.getElementById("comment").value;
  if (comment.length === 0) {
    console.log("Feedback: No feedback was submitted.");
  } else {
    console.log("Feedback: " + comment);
  }
}
