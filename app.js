// Selectors for input fields and buttons
let taskInput = document.querySelector('.task-input');
let taskDate = document.querySelector('.input-date');
const addButton = document.querySelector('.add-btn');
let listTasks = document.querySelector('.task-container');

// Add event listener for the "Add" button
addButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    const date = taskDate.value;

    // Validation: Check if inputs are empty
    if (!task || !date) {
        alert('Please fill out both the task and date fields.');
        return;
    }

    // Create a new task element
    const taskHTML = `
        <div class="task">
            <div class="task-item">${task}</div>
            <div class="task-date">${date}</div>
            <div class="task-action">
                <button class="edit-btn">Edit</button>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        </div>
    `;

    // Append the new task to the task container
    listTasks.innerHTML += taskHTML;

    // Clear input fields
    taskInput.value = '';
    taskDate.value = '';
});

// Event delegation to handle "Edit", "Complete", and "Delete" buttons
document.addEventListener('click', (event) => {
    const target = event.target;

    // Handle "Edit" button
    if (target.classList.contains('edit-btn')) {
        const taskDiv = target.closest('.task');
        const taskItem = taskDiv.querySelector('.task-item');
        const taskDate = taskDiv.querySelector('.task-date');

        const newTask = prompt('Edit your task:', taskItem.textContent);
        const newDate = prompt('Edit your date:', taskDate.textContent);

        if (newTask) taskItem.textContent = newTask;
        if (newDate) taskDate.textContent = newDate;
    }

    // Handle "Complete" button
    if (target.classList.contains('complete-btn')) {
        const taskDiv = target.closest('.task');
        taskDiv.classList.toggle('completed');
    }

    // Handle "Delete" button
    if (target.classList.contains('delete-btn')) {
        const taskDiv = target.closest('.task');
        taskDiv.remove();
    }
});
