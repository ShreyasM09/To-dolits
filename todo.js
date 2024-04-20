// Initialize the task list with some sample data
let taskList = [
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Do laundry' },
    { id: 3, task: 'Clean the house' },
];

// Function to render the tasks from the taskList
function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    for (const task of taskList) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${task.task}</span>
        <button onclick="deleteTask(${task.id})">Delete</button>
      `;
        taskListElement.appendChild(listItem);
    }
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();

    if (newTask !== '') {
        const newId = taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 1;
        taskList.push({ id: newId, task: newTask });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(id) {
    taskList = taskList.filter((task) => task.id !== id);
    renderTasks();
}

// Initial rendering of tasks
renderTasks();


// Save taskList to local storage
function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

// Load taskList from local storage
function loadFromLocalStorage() {
    const savedTaskList = localStorage.getItem('taskList');
    if (savedTaskList) {
        taskList = JSON.parse(savedTaskList);
        renderTasks();
    }
}

// Call loadFromLocalStorage() in the beginning to load the saved tasks
loadFromLocalStorage();
