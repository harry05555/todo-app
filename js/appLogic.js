let allTodos = [];
let dragElemenArrayIndex;
function addNewText() {
  let addText = document.getElementById("add-text");
  if (addText.value.length == 0) {
    alert("Textfeld kann nicht leer sein");
  } else {
    let todo = {
      text: addText.value.trim(),
      check: false,
    };
    allTodos.push(todo);
    renderTodos();
  }
}

function renderTodos() {
  let todosContainer = document.getElementById("cotainer-todos");
  todosContainer.innerHTML = "";
  let comefrom = 0;
  for (let i = 0; i < allTodos.length; i++) {
    todosContainer.innerHTML += fillTodos(i, comefrom);
    if (allTodos[i].check) {
      document.getElementById(`circle${i}`).classList.add("circle-full");
      document.getElementById(`circle${i}`).classList.remove("circle");
      document.getElementById(`isChecked${i}`).classList.add("check");
      document.getElementById(`listText${i}`).classList.remove("todo-text");
      document.getElementById(`listText${i}`).classList.add("cross-text");
    }
  }
  listCounter();
}

function checkTodo(i) {
  if (allTodos[i].check) {
    allTodos[i].check = false;
  } else {
    allTodos[i].check = true;
  }
  renderTodos();
}

function crossDelete(nummer) {
  allTodos.splice(nummer, 1);
  renderTodos();
}

function listCounter() {
  let count = 0;
  for (let i = 0; i < allTodos.length; i++) {
    if (!allTodos[i].check) {
      count++;
    }
  }
  mobile = counterdesktop = count + " ";
  document.getElementById(`counter-desktop`).textContent = counterdesktop;
  document.getElementById(`mobile`).textContent = mobile;
}

function showAll() {
  renderTodos();
}

function showCompleted() {
  let todosContainer = document.getElementById("cotainer-todos");
  let comefrom = 1;
  todosContainer.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    if (allTodos[i].check) {
      todosContainer.innerHTML += fillTodos(i, comefrom);
      document.getElementById(`circle${i}`).classList.add("circle-full");
      document.getElementById(`circle${i}`).classList.remove("circle");
      document.getElementById(`isChecked${i}`).classList.add("check");
      document.getElementById(`listText${i}`).classList.remove("todo-text");
      document.getElementById(`listText${i}`).classList.add("cross-text");
    }
  }
  listCounter();
}

function showActive() {
  let todosContainer = document.getElementById("cotainer-todos");
  let comefrom = 2;
  todosContainer.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    if (!allTodos[i].check) {
      todosContainer.innerHTML += fillTodos(i, comefrom);
    }
  }
  listCounter();
}

function clearCompleted() {
  allTodos = allTodos.filter((todo) => !todo.check);
  renderTodos();
}

function sortCheckedToBottem() {}

function fillTodos(i, comefrom) {
  return `<div id="${i}" class="todo-listen" draggable="true" ondragstart="drag(event)" ondrop="dropPlace(${i},${comefrom})">
    <div class="list-center">
      <div class="list-center" onclick="checkTodo(${i})">
        <div id="circle${i}" class="circle" >
        <div id="isChecked${i}" class=""></div>
      </div>
         <div id="listText${i}" class="todo-text">${allTodos[i].text}</div>
      </div>
      <span class="cross-icon" onclick="crossDelete(${i})"></span>
    </div>
 </div>`;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  dragElemenArrayIndex = ev.dataTransfer.getData("text");
}

function drop(ev) {
  ev.preventDefault();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function dropPlace(dropPlace, lastseed) {
  var temp = allTodos[dropPlace];
  allTodos[dropPlace] = allTodos[dragElemenArrayIndex];
  allTodos[dragElemenArrayIndex] = temp;
  switch (lastseed) {
    case 1:
      showCompleted();
      break;

    case 2:
      showActive();
      break;

    default:
      renderTodos();
      break;
  }
}
