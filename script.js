const button = document.querySelector("button");

let listCount = 0;
let taskCount = 0;

const createTaskList = function () {
  const taskList = document.createElement("ul");
  document.querySelector("main").appendChild(taskList);
  taskList.classList.add(`taskList${listCount}`);
  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Dodaj zadanie";
  document.querySelector(`.taskList${listCount}`).appendChild(addTaskButton);
  // document.querySelector("ul").parentElement.appendChild(addTaskButton);
  const createTask = function () {
    const taskItem = document.createElement("li");
    taskItem.textContent = `Zadanie ${taskCount}`;
    // document.querySelector("ul").parentElement.appendChild(taskItem);
    taskList.appendChild(taskItem);
    taskCount++;
  };
  addTaskButton.addEventListener("click", createTask);
  listCount++;
  console.log(listCount);
};

button.addEventListener("click", createTaskList);

console.log(listCount);
