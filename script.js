document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');
    const taskText = taskInput.value.trim();
    const taskDateTimeValue = taskDatetime.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText} ${taskDateTimeValue ? `- ${new Date(taskDateTimeValue).toLocaleString()}` : ''}</span>
        <div>
            <button class="edit-button" onclick="editTask(this)">Edit</button>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            <input type="checkbox" onclick="toggleComplete(this)">
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDatetime.value = '';
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.querySelector('span').textContent.split(' - ')[0];
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');

    taskInput.value = taskText;
    taskDatetime.value = '';

    li.remove();
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function toggleComplete(checkbox) {
    const li = checkbox.parentElement.parentElement;
    li.classList.toggle('completed', checkbox.checked);
}