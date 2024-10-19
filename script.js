const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('#task-container');
addTask.addEventListener('click', () => {
    let taskInput = document.querySelector('#new-task');
    let taskText = taskInput.value.trim();

    if (taskText !== '') {

        let taskWrapper = document.createElement('div');
        taskWrapper.className = 'task-wrapper';

        let li = document.createElement('li');
        li.textContent = taskText;

        let removeButton = document.createElement('button');
        let removeImg = document.createElement('img');
        removeImg.src = './images/delete.png';  
        removeImg.width = '50px';
        removeImg.alt = 'Remover tarefa';     

        removeButton.appendChild(removeImg);

        removeButton.className = 'remove-task';

        taskWrapper.appendChild(li);
        taskWrapper.appendChild(removeButton);

        taskContainer.appendChild(taskWrapper);
        let hr = document.createElement("hr");
        taskContainer.appendChild(hr);

        taskInput.value = '';

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        removeButton.addEventListener('click', () => {
            if(confirm("Are you sure you want to delete this task?")){
                taskWrapper.remove();
                hr.remove();
            }
        });
    }
});
