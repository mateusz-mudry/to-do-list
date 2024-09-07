const button = document.querySelector('button');
const checkboxItem = document.createElement('input');
checkboxItem.type = 'checkbox';

let listCount = 0;
let taskCount = 0;

// const createTaskList = function () {
//   const taskList = document.createElement("ul");
//   document.querySelector("main").appendChild(taskList);
//   taskList.classList.add(`taskList${listCount}`);
//   const addTaskButton = document.createElement("button");
//   addTaskButton.textContent = "Dodaj zadanie";
//   document.querySelector(`.taskList${listCount}`).appendChild(addTaskButton);
//   // document.querySelector("ul").parentElement.appendChild(addTaskButton);
//   const createTask = function () {
//     const taskItem = document.createElement("li");
//     taskItem.textContent = `Zadanie ${taskCount}`;
//     // document.querySelector("ul").parentElement.appendChild(taskItem);
//     taskList.appendChild(taskItem);
//     taskCount++;
//   };
//   addTaskButton.addEventListener("click", createTask);
//   listCount++;
//   console.log(listCount);
// };

function createTaskList() {
  const taskList = document.createElement('div');
  taskList.classList.add(`taskList${listCount}`);
  taskList.classList.toggle('taskListDiv');
  document.querySelector('main').appendChild(taskList);

  const taskListHeader = document.createElement('div');
  taskListHeader.textContent = `Moja lista ${++listCount}`;
  taskList.appendChild(taskListHeader);

  const addTaskButton = addTask(taskList);
  taskList.appendChild(addTaskButton);

  const deleteTaskList = document.createElement('button');
  deleteTaskList.textContent = 'Usuń';
  taskList.appendChild(deleteTaskList);

  deleteTaskList.addEventListener('click', function () {
    taskList.remove();
  });
}

// const deleteButton = document.createElement('button');
// deleteButton.textContent = `Usuń`;
// taskItem.appendChild(deleteButton);

// deleteButton.addEventListener('click', function () {
//   taskList.removeChild(taskItem);
// });

function addTask(taskList) {
  const button = document.createElement('button');
  button.textContent = 'Dodaj zadanie';
  button.addEventListener('click', () => createTask(taskList));
  return button;
}

function createTask(taskList) {
  const taskItem = document.createElement('div');
  taskItem.classList.toggle(`taskDiv`);
  taskItem.textContent = `Zadanie ${++taskCount}`;
  taskList.appendChild(taskItem);

  const checkboxItem = document.createElement('input');
  checkboxItem.type = 'checkbox';
  taskItem.appendChild(checkboxItem);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = `Usuń`;
  taskItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', function () {
    taskList.removeChild(taskItem);
  });
}

button.addEventListener('click', createTaskList);

// console.log(listCount);
