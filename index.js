const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
  if (inputBox.value === "") {
    alert("You must need to write a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
inputBox.addEventListener("keyup", function (e) {
  if (event.keyCode === 13) {
    document.getElementById("btn").click();
  }
});
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
