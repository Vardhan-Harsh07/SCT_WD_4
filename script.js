document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date').value;
    const todoTime = document.getElementById('todo-time').value;
    const task = todoInput.value.trim();

    if (task) {
        addTask(task, todoDate, todoTime);
        todoInput.value = '';  // Clear input field
        document.getElementById('todo-date').value = ''; // Clear date field
        document.getElementById('todo-time').value = ''; // Clear time field
    }
});

function addTask(taskText, date, time) {
    const todoList = document.getElementById('todo-list');

    // Create the new task element
    const listItem = document.createElement('li');

    // Create and append checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        listItem.classList.toggle('completed');
    });

    // Add task text and date/time
    const taskTextNode = document.createTextNode(taskText);
    const taskDateTime = document.createElement('span');
    taskDateTime.textContent = ` (${date} ${time})`;
    taskDateTime.classList.add('task-date-time');

    // Create and append edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '✏️';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function() {
        editTask(listItem, taskText, date, time);
    });

    // Create and append delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '🗑️';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(listItem);
    });

    // Append all elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskTextNode);
    listItem.appendChild(taskDateTime);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Add the new task to the todo list
    todoList.appendChild(listItem);
}

function editTask(listItem, oldText, oldDate, oldTime) {
    // Enable editing for the task
    const newTaskText = prompt("Edit task:", oldText);
    const newDate = prompt("Edit date (YYYY-MM-DD):", oldDate);
    const newTime = prompt("Edit time (HH:MM):", oldTime);

    if (newTaskText && newDate && newTime) {
        listItem.childNodes[1].textContent = newTaskText;
        listItem.childNodes[2].textContent = ` (${newDate} ${newTime})`;
    }
}
