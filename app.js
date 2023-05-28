const form = document.getElementById("to-do-form");
const input = document.querySelector("#to-do-form input[type='text']");
const ul = document.getElementById("task-list");

let tasks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    const task = {
      id: Date.now(),
      name: input.value,
    };
    tasks.push(task);
    addToDoListItem(task);
    input.value = "";
  }
});

function addToDoListItem(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task.name}</span>
    <button class="delete" data-id="${task.id}">Delete</button>
  `;
  ul.appendChild(li);

  const deleteButton = li.querySelector(".delete");
  deleteButton.addEventListener("click", (e) => {
    const taskId = Number(e.target.dataset.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    li.remove();
  });
}
