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
createStore()

function createTodo() {
  let todos = createStore();
  let todoInput = input.value.trim();
  if( todoInput == '')
  {
    alert("Please type something")
    return false;
  }
  todos.push(todoInput); //push the inputted text into the todolist
  localStorage.setItem("todolist", JSON.stringify(todos)); //update the todo list
  // return todos;
}
// createTodo()

function displayTodo() {
  let todolist = localStorage.getItem("todolist");
  todolist = JSON.parse(todolist);
  console.log(todolist);

  // const delbtn = document.createElement("button");
  // delbtn.innerHTML = "delete";

  todolist.forEach(function(item,index) {
    const myli = document.createElement("li");
    const delbtn = document.createElement("button");
    delbtn.innerHTML = "delete";
    delbtn.className = 'remove'
    delbtn.id = index
    myli.innerHTML = item;
    mylist.appendChild(myli);
    myli.appendChild(delbtn);
  });

  // delbtn.onclick = deleteTodo;
}
addbtn.onclick = createTodo;
displayTodo();

const deletebtnList = document.querySelectorAll('.remove')
  console.log(deletebtnList)

  function deleteTodo(){
   let todos = createStore();
   todos.splice(this.id, 1)
   localStorage.setItem("todolist", JSON.stringify(todos));
   location.reload(true)
   console.log(this.id);
  }

  deletebtnList.forEach(function(item){
    item.onclick = deleteTodo
  })
  // deleteTodo();