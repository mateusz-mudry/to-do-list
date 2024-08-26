const button = document.querySelector("button");

const createTaskList = function () {
  const taskList = document.createElement("ul");
  document.querySelector("main").appendChild(taskList);
};

button.addEventListener("click", createTaskList);
