var addBtn = document.querySelector(".add");
var input = document.querySelector(".input");
var appendDiv = document.querySelector(".appendDiv");
var item = document.querySelector(".item");
var mode = document.querySelector(".darkMod");
var count = 0;

function add() {
  if (input.value === "") {
    alert("PLZ Fill TextBox");
  } else {
    var value = input.value;
    var divTag = document.createElement("div");
    divTag.classList.add("divTag");
    //create checkbox
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.classList.add("checkBox");
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        --count;
        item.innerHTML = `${count} Item Left`;
      } else {
        pTag.classList.toggle("changeStrike");
        ++count;
        item.innerHTML = `${count} Item Left`;
      }
    });
    //create p element
    var pTag = document.createElement("p");
    pTag.classList.add("pTag");
    pTag.textContent = value;
    //create delete button
    var delBtn = document.createElement("input");
    delBtn.src = "../image/icons8-delete-bin-96.png";
    delBtn.type = "image";
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", function () {
      appendDiv.removeChild(divTag);
      --count;
      item.innerHTML = `${count} Item Left`;
    });
    //appending into the div
    divTag.appendChild(checkbox);
    divTag.appendChild(pTag);
    divTag.appendChild(delBtn);
    appendDiv.insertBefore(divTag, appendDiv.firstChild);
    input.value = "";
    count++;
    item.innerHTML = `${count} Item Left`;
  }
}

mode.addEventListener("change", () => {
  var element = document.body;
  mode.checked
    ? element.setAttribute("data-theme", "light")
    : element.removeAttribute("data-theme");
});
