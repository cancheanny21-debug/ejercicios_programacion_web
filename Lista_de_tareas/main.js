const taskForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");

// Obtener tareas del Local Storage o iniciar arreglo vacío
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Guarda en local storage y actualiza contador
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateCounter();
}

// Cuenta y muestra las tareas pendientes
function updateCounter() {
    const pendingTasks = tasks.filter(task => !task.completed).length;
    taskCounter.textContent = `${pendingTasks} tarea${pendingTasks !== 1 ? "s" : ""} pendiente${pendingTasks !== 1 ? "s" : ""}`;
}

// Renderiza los elementos de la lista dinámicamente
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = `list-group-item ${task.completed ? "completed" : ""}`;

        li.innerHTML = `
            <input type="checkbox" class="form-check-input custom-checkbox"  
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${index})">
            <span class="task-text">${task.text}</span>
            <button class="btn-delete" onclick="deleteTask(${index})">
                <i class="fas fa-trash"></i>
            </button>
        `;

        // Permite marcar como completada haciendo clic directo en el texto
        li.querySelector('.task-text').addEventListener('click', () => toggleTask(index));

        taskList.appendChild(li);
    });
    updateCounter();
}

// Captura el envío del formulario sin recargar la página (e.preventDefault)
taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = "";
        saveTasks();
        renderTasks();
    }
});

// Cambia el estado completado/pendiente
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Elimina un ítem específico del array (Splice)
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

// Inicialización inicial al cargar el DOM
renderTasks();