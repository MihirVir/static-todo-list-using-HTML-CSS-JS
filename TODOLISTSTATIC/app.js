window.addEventListener('load', () => {
    const taskForm = document.getElementById('form-task');
    const inputTask = document.getElementById('task');
    const elem = document.getElementById('tasks-list');

    
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = inputTask.value;
        if (!task) {
            console.log('wrong task enterd')
            return;
        }
        const realElem = document.createElement("div")
        realElem.classList.add('tasks-list')

        const realElemContainer = document.createElement("div")
        realElemContainer.classList.add("wrapper")

        

        realElem.appendChild(realElemContainer);

        const taskInpsElement = document.createElement("input")
        taskInpsElement.classList.add("show-txt")
        taskInpsElement.type = 'text'
        taskInpsElement.value = task;
        taskInpsElement.setAttribute('readonly', 'readonly')
        realElemContainer.appendChild(taskInpsElement);

        const taskBtns = document.createElement("div")
        taskBtns.classList.add('section-cmds');
        const taskEditElem = document.createElement("button")
        taskEditElem.classList.add('edit-task');
        taskEditElem.innerText = "Edit"
        const taskDeleteBtn = document.createElement('button')
        taskDeleteBtn.classList.add('delete-button');
        taskDeleteBtn.innerText = "Delete"
        const isCompleted = document.createElement('button')
        isCompleted.classList.add('check');
        isCompleted.innerText = 'COMPLETE';

        taskBtns.appendChild(taskEditElem);
        taskBtns.appendChild(taskDeleteBtn);
        taskBtns.appendChild(isCompleted);

        realElemContainer.appendChild(taskBtns)

        elem.appendChild(realElem)
        
        inputTask.value  = ""
        
        taskEditElem.addEventListener('click', () => {
            if (taskEditElem.innerText.toLowerCase() === 'edit') {
                taskInpsElement.removeAttribute('readonly');
                taskInpsElement.focus();
                taskEditElem.innerText = "save";
            } else {
                taskInpsElement.setAttribute('readonly', 'readonly');
                taskEditElem.innerText = "Edit";
            }
        })
        taskDeleteBtn.addEventListener('click', () => {
            elem.removeChild(realElem)
        })
        isCompleted.addEventListener('click', () => {
            if (isCompleted.innerText.toLowerCase() === "complete") {
                taskInpsElement.classList.add('new-thang');
                isCompleted.innerText = "PENDING";
            } else {
                taskInpsElement.classList.remove('new-thang');
                isCompleted.innerText = "COMPLETE";
            }
        })
    })
})