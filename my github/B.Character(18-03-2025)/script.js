function printvalue() {
  var name = document.form1.name.value;
  alert("Welcome    " + name);
}

const nameInput = document.getElementById("name");
const charCount = document.getElementById("charCount");

nameInput.addEventListener("input", () => {
  let count = nameInput.value.length;
  charCount.textContent = count;
  charCount.style.color = count >= 100 ? "red" : "black";
});