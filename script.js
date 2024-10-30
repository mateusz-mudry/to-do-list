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
  // taskListHeader.textContent = `Moja lista ${++listCount}`;
  taskListHeader.classList.add('tasklistHeader');
  taskList.appendChild(taskListHeader);

  const taskListName = document.createElement('span');
  taskListName.textContent = `Moja lista ${++listCount}`;
  taskListName.classList.add('taskListName');
  taskListHeader.appendChild(taskListName);

  taskListName.addEventListener('click', function () {
    editTaskListName(taskListName);
  });

  const headerButtonContainer = document.createElement('div');
  headerButtonContainer.classList.add('headerButtonContainer');
  taskListHeader.appendChild(headerButtonContainer);

  const addTaskButton = addTask(taskList);
  headerButtonContainer.appendChild(addTaskButton);

  const deleteTaskList = document.createElement('button');
  deleteTaskList.textContent = 'Usuń';
  headerButtonContainer.appendChild(deleteTaskList);

  deleteTaskList.addEventListener('click', function () {
    const userConfirmed = confirm('Czy na pewno chcesz usunąć listę zadań?');
    if (userConfirmed) {
      taskList.remove();
    }
  });
}

function editTaskListName(taskListHeader) {
  const input = document.createElement('input');
  input.type = 'text';
  input.value = taskListHeader.textContent;

  taskListHeader.textContent = '';
  taskListHeader.appendChild(input);

  input.focus();
  input.select();

  function saveNewListName() {
    taskListHeader.textContent = input.value;
  }

  input.addEventListener('blur', saveNewListName);
  input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      saveNewListName();
    }
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
  taskItem.classList.toggle('taskDiv');
  taskItem.textContent = `Zadanie ${++taskCount}`;
  taskList.appendChild(taskItem);

  const checkboxItem = document.createElement('button');
  checkboxItem.textContent = 'Gotowe';
  taskItem.appendChild(checkboxItem);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Usuń';
  taskItem.appendChild(deleteButton);

  taskItem.addEventListener('click', function () {
    editTaskName(taskItem, checkboxItem, deleteButton);
  });

  checkboxItem.addEventListener('click', function () {
    console.log('hello');
    taskItem.classList.add('checked');
  });

  deleteButton.addEventListener('click', function () {
    taskList.removeChild(taskItem);
  });
}

function editTaskName(taskItem, checkboxItem, deleteButton) {
  const taskName = taskItem.childNodes[0].nodeValue.trim();

  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.value = taskName;

  taskItem.childNodes[0].nodeValue = '';

  taskItem.insertBefore(taskInput, checkboxItem);

  taskInput.focus();
  taskInput.select();

  function saveNewTaskName() {
    const newTaskName = taskInput.value.trim();
    taskItem.removeChild(taskInput);
    taskItem.childNodes[0].nodeValue = newTaskName || 'Bez nazwy';
  }

  taskInput.addEventListener('blur', saveNewTaskName);
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      saveNewTaskName();
    }
  });
}

//============================================================

// function createTask(taskList) {
//   const taskItem = document.createElement('div');
//   taskItem.classList.toggle(`taskDiv`);
//   taskItem.textContent = `Zadanie ${++taskCount}`;
//   taskList.appendChild(taskItem);

//   taskItem.addEventListener('click', function () {
//     console.log('Zmiana nazwy');
//     editTaskName(taskItem);
//   });

// taskListHeader.addEventListener('click', function () {
//   editTaskListName(taskListHeader);
// });

//   const checkboxItem = document.createElement('input');
//   checkboxItem.type = 'checkbox';
//   taskItem.appendChild(checkboxItem);

//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = `Usuń`;
//   taskItem.appendChild(deleteButton);

//   deleteButton.addEventListener('click', function () {
//     taskList.removeChild(taskItem);
//   });
// }

// function editTaskName(taskItem) {
//   const taskInput = document.createElement('input');
//   taskInput.type = 'text';
//   taskInput.value = taskItem.textContent;

//   taskItem.textContent = '';
//   taskItem.appendChild(taskInput);

//   taskInput.focus();
//   taskInput.select();

//   function saveNewTaskName() {
//     taskItem.textContent = taskInput.value;
//   }

//   taskInput.addEventListener('blur', saveNewTaskName);
//   taskInput.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//       saveNewTaskName();
//     }
//   });
// }

//=================================================

//   input.addEventListener('blur', saveNewListName);
//   input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//       saveNewListName();
//     }
//   });
// }

button.addEventListener('click', createTaskList);

// console.log(listCount);
