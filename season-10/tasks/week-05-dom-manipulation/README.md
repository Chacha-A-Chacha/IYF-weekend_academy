# Week 5: DOM Manipulation

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s10-week-05-{your-github-username}`

---

## Overview
This week you'll learn to make your pages interactive! You'll select elements, respond to user actions, and dynamically update the page content.

**Lessons:**
- Lesson 9: Understanding the DOM
- Lesson 10: Events & User Interaction

**Deliverable:** Interactive To-Do List application

---

## Lesson 9 Tasks

### Task 9.1: Selecting Elements 🟢
**Time:** 30 minutes

**Setup:** Create this HTML file to practice:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Practice</title>
    <style>
        .highlight { background-color: yellow; }
        .container { padding: 20px; border: 1px solid #ccc; }
    </style>
</head>
<body>
    <header id="main-header">
        <h1>DOM Practice</h1>
        <nav>
            <ul class="nav-list">
                <li><a href="#" class="nav-link">Home</a></li>
                <li><a href="#" class="nav-link">About</a></li>
                <li><a href="#" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="container">
        <article>
            <h2 class="title">Article Title</h2>
            <p class="content">This is the first paragraph.</p>
            <p class="content">This is the second paragraph.</p>
        </article>
        
        <section>
            <h2>Form Section</h2>
            <form id="contact-form">
                <input type="text" id="name" name="name" placeholder="Name">
                <input type="email" id="email" name="email" placeholder="Email">
                <button type="submit">Submit</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2026</p>
    </footer>
    
    <script src="dom.js"></script>
</body>
</html>
```

**Exercise: Practice All Selection Methods**

```javascript
// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice: Select these elements
// 1. The h1 element
// 2. All elements with class "content"
// 3. The form with id "contact-form"
// 4. The email input
// 5. All list items in the nav
// 6. The first .nav-link
// 7. The last paragraph
```

---

### Task 9.2: Traversing the DOM 🟡
**Time:** 30 minutes

**Exercise: DOM Navigation**

```javascript
const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav
```

**Practice Tasks:**
1. Select the header, then navigate to the nav inside it
2. Select the first nav-link, then get its parent li
3. Select the article, then get its next sibling (section)
4. Select the ul, then get all its child li elements
5. Start from the footer and navigate up to the body

---

### Task 9.3: Modifying Content 🟡
**Time:** 40 minutes

**Exercise 1: Text Content**
```javascript
const h1 = document.querySelector("h1");

// Reading text
console.log(h1.textContent);     // Includes hidden text
console.log(h1.innerText);       // Only visible text

// Modifying text
h1.textContent = "New Title";
```

**Exercise 2: HTML Content**
```javascript
const article = document.querySelector("article");

// Reading HTML
console.log(article.innerHTML);

// Modifying HTML (careful with security!)
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput;  // Displays as text, not executed
```

**Exercise 3: Attributes**
```javascript
const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.href);  // Property access

// Set attribute
link.setAttribute("href", "https://example.com");
link.href = "https://example.com";  // Same result

// Check attribute
console.log(link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";      // Creates data-new-attr
```

**Exercise 4: Styles**
```javascript
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});
```

---

### Task 9.4: Adding & Removing Elements 🔴
**Time:** 45 minutes

**Exercise 1: Creating Elements**
```javascript
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling
```

**Exercise 2: Removing Elements**
```javascript
// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
article.innerHTML = "";  // Simple but rebuilds DOM
// OR
while (article.firstChild) {
    article.removeChild(article.firstChild);
}
```

**Exercise 3: Cloning Elements**
```javascript
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);
```

**Build:** Create a function that adds a new nav item dynamically:
```javascript
function addNavItem(text, href) {
    // Create li with a.nav-link inside
    // Add to the nav list
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");
```

---

## Lesson 10 Tasks

### Task 10.1: Event Listeners 🟢
**Time:** 30 minutes

**Exercise 1: Basic Events**
```javascript
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);
```

**Exercise 2: Event Types**
```javascript
// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);  // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);     // Real-time changes
input.addEventListener("change", handler);    // On blur after change

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);
```

**Build: Click Counter**
```javascript
// Create a counter display and buttons
// + button increases count
// - button decreases count
// Reset button sets to 0
// Count cannot go below 0
```

---

### Task 10.2: The Event Object 🟡
**Time:** 30 minutes

**Exercise: Using Event Properties**
```javascript
document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});
```

**Build: Keyboard Shortcuts**
```javascript
// Implement these shortcuts:
// Ctrl+S: Show "Saved!" alert (prevent actual save dialog)
// Escape: Clear all form inputs
// Ctrl+Enter: Submit form
```

---

### Task 10.3: Event Bubbling & Delegation 🔴
**Time:** 45 minutes

**Exercise 1: Understanding Bubbling**
```html
<div id="grandparent">
    Grandparent
    <div id="parent">
        Parent
        <div id="child">
            Child
        </div>
    </div>
</div>
```

```javascript
document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child → Parent → Grandparent (bubbling up)
```

**Exercise 2: Event Delegation**
```javascript
// BAD: Adding listeners to each item
const items = document.querySelectorAll("li");
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
// Problem: New items won't have the listener!

// GOOD: Delegate to parent
document.querySelector("ul").addEventListener("click", function(event) {
    // Check if clicked element is an li
    if (event.target.matches("li")) {
        handleClick(event);
    }
    
    // Or check for a class
    if (event.target.classList.contains("item")) {
        handleClick(event);
    }
});
```

**Build: Delegated Task List**
Create a task list where:
- Clicking a task toggles "completed" class
- Clicking a delete button removes the item
- New tasks can be added
- Use ONE event listener on the parent ul

---

### Task 10.4: Form Handling 🔴
**Time:** 45 minutes

**Exercise: Complete Form Validation**
```javascript
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting
    
    // Get all form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields
    if (isValid(data)) {
        // Submit via fetch or show success
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    // Add error styling and message
    input.classList.add("error");
    // Create or update error message element
}

function clearError(input) {
    input.classList.remove("error");
    // Remove error message
}
```

---

### Mini-Project: Interactive To-Do List 🔴
**Time:** 120 minutes

Build a fully functional to-do list application.

**HTML Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>My To-Do List</h1>
        
        <form id="todo-form">
            <input type="text" id="todo-input" placeholder="What needs to be done?" required>
            <button type="submit">Add</button>
        </form>
        
        <div class="filters">
            <button class="filter active" data-filter="all">All</button>
            <button class="filter" data-filter="active">Active</button>
            <button class="filter" data-filter="completed">Completed</button>
        </div>
        
        <ul id="todo-list">
            <!-- Tasks will be added here -->
        </ul>
        
        <div class="stats">
            <span id="items-left">0 items left</span>
            <button id="clear-completed">Clear Completed</button>
        </div>
    </div>
    
    <script src="app.js"></script>
</body>
</html>
```

**Requirements:**

1. **Add Tasks**
   - Enter text and press Enter or click Add
   - Empty tasks not allowed
   - Input clears after adding

2. **Toggle Complete**
   - Click task to toggle completed state
   - Completed tasks have strikethrough styling

3. **Delete Tasks**
   - Each task has a delete button (appears on hover)
   - Click to remove task

4. **Filter Tasks**
   - All: Show all tasks
   - Active: Show only incomplete tasks
   - Completed: Show only completed tasks

5. **Stats**
   - Show count of remaining items
   - "Clear Completed" removes all completed tasks

6. **Edit Tasks** (Bonus)
   - Double-click to edit task text
   - Press Enter to save, Escape to cancel

**Starter JavaScript:**
```javascript
// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Functions
function createTodoElement(todo) {
    // Create and return li element
}

function renderTodos() {
    // Clear list and re-render based on filter
}

function addTodo(text) {
    // Add new todo to array and render
}

function toggleTodo(id) {
    // Toggle completed state
}

function deleteTodo(id) {
    // Remove from array and render
}

function updateStats() {
    // Update items left count
}

function filterTodos(filter) {
    // Set current filter and re-render
}

// Event Listeners
form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Add todo
});

todoList.addEventListener("click", function(event) {
    // Handle click on tasks (delegation)
});

// Initialize
renderTodos();
```

---

## Daily Challenges

### Day 1: Color Changer 🟢
Create a button that changes all headings to a random color when clicked.
- Generate random hex color
- Apply to all h1, h2, h3 elements

### Day 2: Dynamic Element Creator 🟢
Create a button that adds a new paragraph each time clicked.
- Each paragraph should be numbered
- Include a delete button for each

### Day 3: Image Remover 🟢
Create a button that removes all images from the page.
- Bonus: Toggle between hide/show instead of remove

### Day 4: Content Copier 🟡
Create two divs - source and target.
- A button copies content from source to target
- Bonus: Copy on drag and drop

### Day 5: Dark Mode Toggle 🟡
Implement a dark mode toggle:
- Toggle class on body element
- Save preference (hint: we'll learn localStorage next week)
- Animate the transition

---

## Week 5 Checklist

- [ ] Select elements with getElementById, querySelector, querySelectorAll
- [ ] Traverse DOM (parent, children, siblings)
- [ ] Modify text content and HTML
- [ ] Work with attributes and data attributes
- [ ] Add and remove elements dynamically
- [ ] Add event listeners for various event types
- [ ] Use the event object (target, preventDefault, key)
- [ ] Understand event bubbling
- [ ] Use event delegation effectively
- [ ] Handle form submissions
- [ ] To-Do List project complete
- [ ] All daily challenges complete

**Milestone:** Your pages are now interactive! 🎮
