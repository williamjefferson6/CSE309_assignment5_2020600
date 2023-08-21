document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.querySelector('#new-task-form');
    const taskInput = document.querySelector('#task-input');
    const tasksList = document.querySelector('#tasks');

    async function fetchTasks() {
        const response = await fetch('retrieve.php');
        if (response.ok) {
            const tasks = await response.json();
            tasksList.innerHTML = '';
            tasks.forEach(taskText => {
                const li = document.createElement('li');
                li.textContent = taskText;
                tasksList.appendChild(li);
            });
        }
    }

    fetchTasks();

    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const taskText = taskInput.value;
        if (taskText.trim() === '') {
            return;
        }

        const response = await fetch(taskForm.action, {
            method: 'POST',
            body: new URLSearchParams(new FormData(taskForm))
        });

        if (response.ok) {
            taskInput.value = '';
            fetchTasks();
        }
    });
});
