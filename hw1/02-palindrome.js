let inputNumber = document.querySelector("input");
inputNumber.addEventListener("input", (event) => {
  let number = document.getElementById("number").value;
  let result = document.getElementById("result");

  if (Math.sign(number) == -1) {
    result.innerHTML = "Please enter positive number"; // validation for negative number
    result.style = "color: red";
  } else {
    let len = number.length;
    let mid = Math.floor(len / 2);
    if (len == 0) {
      result.innerHTML = "No input given";
      result.style = "color: black";
    } else {
      for (let i = 0; i <= mid; i++) {
        if (number[i] != number[len - 1 - i]) {
          result.innerHTML = "No. Try again";
          result.style = "color: red";
          break;
        } else {
          result.innerHTML = "Yes. This is a palindrome";
          result.style = "color: green";
        }
      }
    }
  }
});
