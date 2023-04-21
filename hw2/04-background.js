let timeInterval = setInterval(function () {
  let randomColor1 = Math.floor(Math.random() * 16777215).toString(10);
  document.body.style.backgroundColor = "#" + randomColor1;
}, 3000);
let btnSelector = document.querySelector(".btn");
btnSelector.addEventListener("click", changeBackgroundColor);
function changeBackgroundColor(event) {
  clearInterval(timeInterval);
  event.preventDefault();
  event.stopPropagation();
  let btnValue = document.querySelector(".btn");
  let input = document.getElementById("timeInterval");
  if (btnValue.value == "Start") {
    btnValue.value = "Stop";
    btnValue.className = "btn btn-danger";
    input.disabled = true;
    timeInterval = setInterval(function () {
      let randomColor = Math.floor(Math.random() * 16777215).toString(10);
      document.body.style.backgroundColor = "#" + randomColor;
    }, input.value * 1000);
  } else if (btnValue.value == "Stop") {
    btnValue.value = "Start";
    btnValue.className = "btn btn-primary";
    input.disabled = false;
    document.body.style.backgroundColor = "white";
  }
}
