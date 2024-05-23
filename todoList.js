const todoNameInput = document.getElementById("todo-name");
const todoButton = document.getElementById("todo-button");
const todoDateInput = document.getElementById("todo-date");
const jsDiv = document.querySelector(".js-div");
const allDelete = document.querySelector(".js-delete-div");
let todoArray = [];


todoButton.addEventListener("click", addTodo);

function addTodo() {
  let todoObject = {};
  const todoName = todoNameInput.value;
  const todoDate = todoDateInput.value;
  if (!todoName && !todoDate) {
    return alert("please input your todoName and TodoDate");
  }
  if (!todoName) {
    return alert("please input your TodoName");
  }
  if (!todoDate) {
    return alert("please input your TodoDate");
  }
  todoObject.name = todoName;
  todoObject.date = todoDate;
todoArray.push(todoObject);
renderTodoList();

todoNameInput.value = "";
todoDateInput.value = "";
 
}

function renderTodoList() {
  let todoList = "";
  todoArray.forEach((ob, index) => {
      const todoHtml = `<div>${ob.name}</div><div>${ob.date}</div><button class="js-delete-button delete-button" onclick="
      todoArray.splice(${index}, 1);
      renderTodoList();
    ">Delete</button>`;
      todoList += todoHtml;
  });

  jsDiv.innerHTML = todoList;
  removeAllDelete();
};


function deleteAll() {
  todoArray = [];
  renderTodoList();
  allDelete.innerHTML = "";
};


function removeAllDelete() {
  if (todoArray.length > 1) {
    allDelete.innerHTML = ` <button class="js-dlt-btn dlt-btn">Delete All</button>`
    allDelete.addEventListener("click", deleteAll)
  } else if (todoArray.length <= 1) {
    allDelete.innerHTML = "";
  };
};



