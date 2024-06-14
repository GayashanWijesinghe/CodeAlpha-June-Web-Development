document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const newTaskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');

    // Add task
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    // Add task function
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }
});
