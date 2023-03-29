const inputTask = document.getElementById("input-task");
const btnAddTask = document.getElementById("btn-add-task");
const taskBox = document.getElementById("task-box");
const ulPlaceholder = document.getElementById("ul-placeholder");
const checkboxTasks = document.getElementsByClassName("checkbox-tasks");

btnAddTask.addEventListener("click", () => {
  if (taskBox.children[0] === ulPlaceholder) {
    taskBox.removeChild(ulPlaceholder);
  }

  const task = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox-tasks");

  checkbox.addEventListener("change", () => {
    task.classList.toggle("task-done");
  });

  task.innerText = inputTask.value;
  task.appendChild(checkbox);

  taskBox.appendChild(task);

  inputTask.value = "";

  // Tirar o P de dentro da taskbox (SE TIVER) CHECK!
  // Criar uma LI CHECK!
  // Colocar dentro da LI o value do input CHECK!
  // Colocar a LI dentro da Taskbox CHECK!
});
