
const tasks = [];

// Función para renderizar la lista de tareas
function renderTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        // Contenedor para la descripción de la tarea
        const taskDescription = document.createElement("div");
        taskDescription.textContent = task.description;
        li.appendChild(taskDescription);

        if (task.completed) {
            li.classList.add("completed");
        }

        // Botones para marcar como completada y eliminar tarea
        const completeButton = document.createElement("button");
        completeButton.textContent = "Completada";
        completeButton.onclick = () => markAsCompleted(task.id);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = () => deleteTask(task.id);

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Función para agregar una tarea desde el input
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const description = taskInput.value.trim();

    if (description !== "") {
        addNewTask(description);
        taskInput.value = ""; // Limpiar el input
        renderTaskList();
    }
}

// Función para agregar una tarea nueva al array
function addNewTask(description) {
    const newTask = {
        id: tasks.length + 1, 
        description: description,
        completed: false,
    };

    tasks.push(newTask);
}

// Función para marcar una tarea como completada
function markAsCompleted(taskId) {
    const task = tasks.find(task => task.id === taskId);

    if (task) {
        task.completed = true;
        renderTaskList();
    }
}

// Función para eliminar una tarea
function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTaskList();
    }
}

// Inicializar la lista de tareas
renderTaskList();
