const input = document.getElementById("itemInput");
const addButton = document.getElementById("addItem");
const list = document.getElementById("itemList");

addButton.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.marginLeft = "10px";
  
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});
