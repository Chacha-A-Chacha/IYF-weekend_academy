/**
 * ============================================
 * INTERACTIVE TO-DO LIST APPLICATION
 * ============================================
 * 
 * Demonstrates key DOM manipulation concepts:
 * - Selecting elements
 * - Creating and removing elements
 * - Event listeners (click, input, submit)
 * - Event delegation
 * - Updating the DOM based on state
 * 
 * ============================================
 */

// =============================================
// STATE MANAGEMENT
// =============================================

// This is our "source of truth" - all tasks are stored here
const tasks = [];

// Current filter applied to the UI
let currentFilter = 'all';

// Generate unique IDs for tasks
let nextId = 1;

// =============================================
// DOM ELEMENT REFERENCES
// =============================================

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// =============================================
// EVENT LISTENERS - INPUT & BUTTONS
// =============================================

/**
 * When user clicks "Add Task" button or presses Enter in input field,
 * we add the task to our state and update the UI
 */
addTaskBtn.addEventListener('click', handleAddTask);

taskInput.addEventListener('keypress', (event) => {
    // event.key tells us which key was pressed
    if (event.key === 'Enter') {
        handleAddTask();
    }
});

/**
 * Clear Completed button - removes all completed tasks
 */
clearCompletedBtn.addEventListener('click', () => {
    // filter() keeps only tasks that are NOT completed
    tasks.length = 0;
    tasks.push(...tasks.filter(task => !task.completed));
    render();
});

// =============================================
// EVENT LISTENERS - DELEGATION
// =============================================

/**
 * DELEGATION PATTERN:
 * Instead of adding listeners to each task item, we add ONE listener
 * to the parent <ul>. When user clicks anything inside, we check
 * what was clicked and act accordingly.
 * 
 * Benefits:
 * - Only one listener, not hundreds
 * - Works even for tasks added after page load
 * - More efficient
 */
taskList.addEventListener('click', (event) => {
    // event.target is the element that was actually clicked

    // Clicking checkbox - toggle completed status
    if (event.target.matches('.checkbox')) {
        const taskId = parseInt(event.target.parentElement.dataset.taskId);
        toggleTask(taskId);
    }

    // Clicking task text - also toggle (user-friendly)
    if (event.target.matches('.task-text')) {
        const taskId = parseInt(event.target.parentElement.dataset.taskId);
        toggleTask(taskId);
    }

    // Clicking delete button - remove the task
    if (event.target.matches('.delete-btn')) {
        const taskId = parseInt(event.target.parentElement.dataset.taskId);
        deleteTask(taskId);
    }
});

/**
 * Filter buttons - show different subsets of tasks
 */
filterBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('filter-btn-active'));

        // Add active class to clicked button
        event.target.classList.add('filter-btn-active');

        // Update current filter and re-render
        currentFilter = event.target.dataset.filter;
        render();
    });
});

// =============================================
// CORE FUNCTIONS
// =============================================

/**
 * Add a new task to our state and re-render the UI
 */
function handleAddTask() {
    const text = taskInput.value.trim();

    // Validate - don't add empty tasks
    if (!text) {
        alert('Please enter a task');
        return;
    }

    // Create task object
    const task = {
        id: nextId++,
        text: text,
        completed: false,
        createdAt: new Date()
    };

    // Add to our tasks array (state)
    tasks.push(task);

    // Clear input field
    taskInput.value = '';
    taskInput.focus(); // Put cursor back in input

    // Update the page
    render();
}

/**
 * Toggle the completed status of a task
 */
function toggleTask(taskId) {
    // Find the task with this ID
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        // Flip the completed boolean
        task.completed = !task.completed;
    }

    // Update the page
    render();
}

/**
 * Delete a task by removing it from our state
 */
function deleteTask(taskId) {
    // filter() returns a new array without the deleted task
    const indexToRemove = tasks.findIndex(t => t.id === taskId);

    if (indexToRemove !== -1) {
        tasks.splice(indexToRemove, 1);
    }

    // Update the page
    render();
}

// =============================================
// FILTERING & COUNTING
// =============================================

/**
 * Get tasks based on current filter
 */
function getFilteredTasks() {
    if (currentFilter === 'active') {
        return tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        return tasks.filter(task => task.completed);
    }
    // 'all' - return all tasks
    return tasks;
}

/**
 * Update the stats display (Total, Active, Completed)
 */
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;

    totalCount.textContent = total;
    activeCount.textContent = active;
    completedCount.textContent = completed;
}

// =============================================
// RENDERING (UPDATE THE DOM)
// =============================================

/**
 * THE MAIN RENDER FUNCTION
 * 
 * This is called whenever our state changes. It:
 * 1. Clears the task list
 * 2. Gets filtered tasks
 * 3. Creates DOM elements for each task
 * 4. Updates counters
 * 5. Shows/hides empty state
 */
function render() {
    // Step 1: Clear the current list (remove all <li>)
    taskList.innerHTML = '';

    // Step 2: Get tasks to display based on filter
    const filteredTasks = getFilteredTasks();

    // Step 3: Create a <li> for each task and add to list
    filteredTasks.forEach(task => {
        const li = createTaskElement(task);
        taskList.appendChild(li);
    });

    // Step 4: Update statistics
    updateStats();

    // Step 5: Show empty state if no tasks at all
    if (tasks.length === 0) {
        emptyState.classList.add('show');
    } else {
        emptyState.classList.remove('show');
    }
}

/**
 * Create a single task <li> element
 * 
 * We use innerHTML for convenience here because the HTML is controlled
 * by us (students wrote it), not from untrusted user input.
 * 
 * In production with user-generated HTML, use textContent and createElement instead.
 */
function createTaskElement(task) {
    const li = document.createElement('li');

    // Add classes
    li.className = 'task-item';
    if (task.completed) {
        li.classList.add('completed');
    }

    // Add data attribute for easy reference
    li.dataset.taskId = task.id;

    // Set the HTML content
    li.innerHTML = `
        <div class="checkbox"></div>
        <span class="task-text">${task.text}</span>
        <button class="delete-btn">✕</button>
    `;

    return li;
}

// =============================================
// INITIALIZATION
// =============================================

/**
 * When page first loads, set focus to input and render empty list
 */
window.addEventListener('load', () => {
    taskInput.focus();
    render();
});

// =============================================
// BONUS: LOAD SAMPLE DATA
// =============================================

/**
 * For demo purposes, add some sample tasks.
 * Comment this out for a blank list on first visit.
 */
function addSampleTasks() {
    const samples = [
        'Complete JavaScript lessons',
        'Build a portfolio project',
        'Review DOM manipulation concepts',
        'Practice with event listeners'
    ];

    samples.forEach(text => {
        tasks.push({
            id: nextId++,
            text: text,
            completed: Math.random() > 0.7 // 30% complete
        });
    });

    render();
}

// Uncomment to enable sample tasks on load
// addSampleTasks();
