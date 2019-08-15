// declare some variables
const input = document.querySelector("#todo");
const addbtn = document.querySelector(".addbutton");

const mylist = document.querySelector("#mylist");

function createStore(){
let todos = JSON.parse(localStorage.getItem("todolist")); //get toodos from local storage

if (todos === null) {
  //if todolist doesn't exist
  localStorage.setItem("todolist", JSON.stringify([])); //create todolist
  console.log(todos);
  return todos;
}
else{
  return todos;
}
}

function createTodo() {
  let todos = createStore();
  todos.push(input.value); //push the inputted text into the todolist
  localStorage.setItem("todolist", JSON.stringify(todos)); //update the todo list
  // return todos;
}
// createTodo()

function displayTodo() {
  let todolist = localStorage.getItem("todolist");
  todolist = JSON.parse(todolist);
  console.log(todolist);

  todolist.forEach(function(item) {
    const myli = document.createElement("li");
    myli.innerHTML = item;
    mylist.appendChild(myli);
  });
}
addbtn.onclick = createTodo;
displayTodo();
