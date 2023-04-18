// Add your code here
let paragraphInfo = document.getElementById("paraInfo");
let inputText = document.getElementById("userinput");
inputText.addEventListener("input", (event) => {
  const searchText = event.target.value;
  const regex = new RegExp(searchText, "g");
  let text = paragraphInfo.innerHTML;
  text = text.replace(/(<mark>|<\/mark>)/gim, "");
  const newText = text.replace(regex, "<mark>$&</mark>");
  paragraphInfo.innerHTML = newText;
});
