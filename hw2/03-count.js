// Add your code here
let para = document.getElementById("paraInfo");
let input_text = document.getElementById("userinput");
input_text.addEventListener("input", (event) => {
  const searchText = event.target.value;
  const regex = new RegExp(searchText, "g");
  let text = para.innerHTML;
  text = text.replace(/(<mark>|<\/mark>)/gim, ""); // remove previously highlighted words
  const newText = text.replace(regex, "<mark>$&</mark>");
  para.innerHTML = newText;
});
