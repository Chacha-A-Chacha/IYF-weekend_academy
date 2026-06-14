# Week 7: JavaScript Best Practices

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s11-week-07-{your-github-username}`

---

## Overview
This week you'll learn to persist data, structure larger applications, and write professional-quality code. You'll also refactor your previous projects.

**Lessons:**
- Lesson 13: Local Storage & State Management
- Lesson 14: JavaScript Best Practices & Code Quality

**Deliverable:** Refactored To-Do List with persistence + Code review ready projects

---

## Lesson 13 Tasks

### Task 13.1: Local Storage Basics 🟢
**Time:** 30 minutes

**Exercise 1: Getting Started with localStorage**
```javascript
// Store a simple value
localStorage.setItem("username", "John");

// Retrieve the value
const username = localStorage.getItem("username");
console.log(username);  // "John"

// Remove a value
localStorage.removeItem("username");

// Clear everything
localStorage.clear();

// Check if key exists
if (localStorage.getItem("username")) {
    console.log("User exists");
}
```

**Exercise 2: Storing Objects (JSON)**
```javascript
// localStorage only stores strings!
const user = {
    name: "John",
    age: 30,
    hobbies: ["coding", "reading"]
};

// WRONG - doesn't work as expected
localStorage.setItem("user", user);
console.log(localStorage.getItem("user"));  // "[object Object]"

// RIGHT - serialize to JSON
localStorage.setItem("user", JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem("user"));
console.log(retrieved);  // { name: "John", age: 30, hobbies: [...] }
```

**Exercise 3: Helper Functions**
```javascript
// Create reusable helpers
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromStorage(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// Usage
saveToStorage("settings", { theme: "dark", fontSize: 16 });
const settings = getFromStorage("settings", { theme: "light", fontSize: 14 });
```

**Build:** Create a simple notes app that persists notes to localStorage.

---

### Task 13.2: Persistent To-Do List 🟡
**Time:** 60 minutes

**Upgrade your To-Do List from Week 5:**

```javascript
const STORAGE_KEY = "todos";

// Load todos from storage on startup
function loadTodos() {
    return getFromStorage(STORAGE_KEY, []);
}

// Save todos whenever they change
function saveTodos(todos) {
    saveToStorage(STORAGE_KEY, todos);
}

// Updated addTodo function
function addTodo(text) {
    const newTodo = {
        id: Date.now(),  // Simple unique ID
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    const todos = loadTodos();
    todos.push(newTodo);
    saveTodos(todos);
    
    renderTodos();
}

// Updated toggleTodo
function toggleTodo(id) {
    const todos = loadTodos();
    const todo = todos.find(t => t.id === id);
    
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(todos);
        renderTodos();
    }
}

// Updated deleteTodo
function deleteTodo(id) {
    let todos = loadTodos();
    todos = todos.filter(t => t.id !== id);
    saveTodos(todos);
    renderTodos();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderTodos();
});
```

**Requirements:**
1. ✅ Todos persist across page refreshes
2. ✅ Completed state is saved
3. ✅ Delete removes from storage
4. ✅ Filter preference is saved
5. ✅ Works correctly when storage is empty

---

### Task 13.3: Session Storage & Comparison 🟡
**Time:** 30 minutes

**Exercise: Understanding the Difference**
```javascript
// sessionStorage - cleared when browser tab closes
sessionStorage.setItem("tempData", "This disappears on close");

// localStorage - persists until explicitly cleared
localStorage.setItem("permanentData", "This stays forever");

// When to use which:
// - sessionStorage: Shopping cart (for current session)
// - sessionStorage: Form data backup (in case of accidental navigation)
// - localStorage: User preferences, theme settings
// - localStorage: Authentication tokens (with security considerations)
// - localStorage: Cached API data
```

**Build:** A form that auto-saves to sessionStorage as you type:
```javascript
const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");

// Save on every input
inputs.forEach(input => {
    // Load saved value on page load
    const saved = sessionStorage.getItem(`form_${input.name}`);
    if (saved) {
        input.value = saved;
    }
    
    // Save on input
    input.addEventListener("input", () => {
        sessionStorage.setItem(`form_${input.name}`, input.value);
    });
});

// Clear on successful submit
form.addEventListener("submit", () => {
    inputs.forEach(input => {
        sessionStorage.removeItem(`form_${input.name}`);
    });
});
```

---

### Task 13.4: State Management Patterns 🔴
**Time:** 60 minutes

**Exercise 1: Centralized State**
```javascript
// Simple state management pattern
const state = {
    todos: [],
    filter: "all",
    theme: "light"
};

// State update function
function setState(updates) {
    Object.assign(state, updates);
    saveState();
    render();
}

// Update specific properties
function setFilter(filter) {
    setState({ filter });
}

function addTodo(text) {
    setState({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
    });
}

function toggleTodo(id) {
    setState({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    });
}

// Persist state
function saveState() {
    localStorage.setItem("appState", JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem("appState");
    if (saved) {
        Object.assign(state, JSON.parse(saved));
    }
}
```

**Exercise 2: Observer Pattern**
```javascript
// State with subscribers
const createStore = (initialState) => {
    let state = initialState;
    const listeners = [];
    
    return {
        getState: () => state,
        
        setState: (updates) => {
            state = { ...state, ...updates };
            // Notify all listeners
            listeners.forEach(listener => listener(state));
        },
        
        subscribe: (listener) => {
            listeners.push(listener);
            // Return unsubscribe function
            return () => {
                const index = listeners.indexOf(listener);
                listeners.splice(index, 1);
            };
        }
    };
};

// Usage
const store = createStore({ count: 0 });

// Subscribe to changes
const unsubscribe = store.subscribe(state => {
    console.log("State changed:", state);
    renderUI(state);
});

// Update state
store.setState({ count: 1 });  // Triggers subscriber
store.setState({ count: 2 });  // Triggers subscriber

// Stop listening
unsubscribe();
```

---

### Mini-Project: Shopping Cart 🔴
**Time:** 90 minutes

Build a shopping cart with state management and persistence.

**Requirements:**

1. **Product List**
   - Display list of products (hardcoded or fetched)
   - Each product has: id, name, price, image
   - "Add to Cart" button

2. **Cart Functionality**
   - Add items to cart
   - Adjust quantity
   - Remove items
   - Calculate total
   - Show cart item count in header

3. **Persistence**
   - Cart survives page refresh
   - Clear cart option

4. **State Management**
   - Centralized state object
   - Clean state update functions

**Starter Structure:**
```javascript
const state = {
    products: [
        { id: 1, name: "Laptop", price: 999, image: "..." },
        { id: 2, name: "Phone", price: 699, image: "..." },
        { id: 3, name: "Headphones", price: 199, image: "..." }
    ],
    cart: []  // { productId, quantity }
};

function addToCart(productId) {
    const existing = state.cart.find(item => item.productId === productId);
    
    if (existing) {
        existing.quantity++;
    } else {
        state.cart.push({ productId, quantity: 1 });
    }
    
    saveCart();
    renderCart();
}

function updateQuantity(productId, quantity) {
    // Update or remove if quantity is 0
}

function removeFromCart(productId) {
    // Remove item from cart
}

function getCartTotal() {
    return state.cart.reduce((total, item) => {
        const product = state.products.find(p => p.id === item.productId);
        return total + (product.price * item.quantity);
    }, 0);
}

function getCartCount() {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
}
```

---

## Lesson 14 Tasks

### Task 14.1: Code Organization 🟡
**Time:** 30 minutes

**Exercise: Modular Code Structure**

**Before (all in one file - messy!):**
```javascript
// Everything mixed together...
const button = document.getElementById("btn");
let count = 0;
function increment() { count++; }
button.addEventListener("click", increment);
localStorage.setItem("count", count);
// ... 500 more lines
```

**After (organized structure):**
```
js/
├── app.js           # Main entry point, initialization
├── state.js         # State management
├── storage.js       # localStorage helpers
├── ui.js            # DOM manipulation
├── api.js           # API calls
└── utils.js         # Utility functions
```

**Example - utils.js:**
```javascript
// Pure utility functions
export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
```

**Example - storage.js:**
```javascript
const STORAGE_PREFIX = "myapp_";

export function save(key, data) {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
}

export function load(key, defaultValue = null) {
    const data = localStorage.getItem(STORAGE_PREFIX + key);
    return data ? JSON.parse(data) : defaultValue;
}

export function remove(key) {
    localStorage.removeItem(STORAGE_PREFIX + key);
}
```

**Task:** Reorganize your To-Do List into multiple files.

---

### Task 14.2: Clean Code Practices 🟡
**Time:** 40 minutes

**Exercise 1: Meaningful Names**
```javascript
// BAD
const d = new Date();
const x = users.filter(u => u.a > 18);
function calc(a, b) { return a * b * 0.1; }

// GOOD
const currentDate = new Date();
const adultUsers = users.filter(user => user.age > 18);
function calculateDiscount(price, quantity) {
    const DISCOUNT_RATE = 0.1;
    return price * quantity * DISCOUNT_RATE;
}
```

**Exercise 2: Single Responsibility**
```javascript
// BAD - does too many things
function processUser(userData) {
    // Validate
    if (!userData.email.includes("@")) throw new Error("Invalid email");
    if (userData.age < 18) throw new Error("Must be adult");
    
    // Transform
    userData.email = userData.email.toLowerCase();
    userData.name = userData.name.trim();
    
    // Save to database
    database.save(userData);
    
    // Send email
    emailService.send(userData.email, "Welcome!");
    
    // Update UI
    document.getElementById("status").textContent = "User created!";
}

// GOOD - separate concerns
function validateUser(userData) {
    if (!userData.email.includes("@")) throw new Error("Invalid email");
    if (userData.age < 18) throw new Error("Must be adult");
    return true;
}

function normalizeUser(userData) {
    return {
        ...userData,
        email: userData.email.toLowerCase(),
        name: userData.name.trim()
    };
}

async function createUser(userData) {
    validateUser(userData);
    const normalizedUser = normalizeUser(userData);
    await database.save(normalizedUser);
    await emailService.sendWelcome(normalizedUser.email);
    return normalizedUser;
}

// UI handling separate
async function handleCreateUser(event) {
    event.preventDefault();
    try {
        const userData = getFormData();
        await createUser(userData);
        showSuccess("User created!");
    } catch (error) {
        showError(error.message);
    }
}
```

**Exercise 3: Avoid Magic Numbers**
```javascript
// BAD
if (password.length < 8) { }
setTimeout(callback, 86400000);
if (response.status === 404) { }

// GOOD
const MIN_PASSWORD_LENGTH = 8;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const HTTP_NOT_FOUND = 404;

if (password.length < MIN_PASSWORD_LENGTH) { }
setTimeout(callback, ONE_DAY_MS);
if (response.status === HTTP_NOT_FOUND) { }
```

---

### Task 14.3: Debugging Skills 🟡
**Time:** 30 minutes

**Exercise 1: Console Methods**
```javascript
// Basic logging
console.log("Basic message");

// Styled logging
console.log("%cImportant!", "color: red; font-size: 20px;");

// Warnings and errors
console.warn("This might be a problem");
console.error("This is definitely wrong");

// Tables for arrays/objects
console.table(users);

// Grouping
console.group("User Processing");
console.log("Step 1");
console.log("Step 2");
console.groupEnd();

// Timing
console.time("fetchUsers");
await fetchUsers();
console.timeEnd("fetchUsers");  // "fetchUsers: 342ms"

// Conditional logging
console.assert(x > 0, "x should be positive");

// Stack trace
console.trace("How did we get here?");
```

**Exercise 2: Debugging with Breakpoints**

Using Chrome DevTools:
1. Open Sources panel
2. Find your JavaScript file
3. Click line number to add breakpoint
4. Trigger the code
5. Use controls:
   - **F10**: Step over
   - **F11**: Step into
   - **Shift+F11**: Step out
   - **F8**: Continue

**Exercise 3: Debug This Code**
```javascript
// Find and fix all bugs in this code
function calculateOrderTotal(items) {
    let total = 0;
    
    for (let i = 0; i <= items.length; i++) {
        const item = items[i];
        total += item.price * item.quanity;
    }
    
    if (total > 100) {
        total = total * 0.9;  // 10% discount
    }
    
    return total;
}

const order = [
    { name: "Book", price: 15, quantity: 2 },
    { name: "Pen", price: 3, quantity: 5 },
    { name: "Notebook", price: 8, quantity: 3 }
];

console.log(calculateOrderTotal(order));
// Expected: 69 (before discount) or 62.1 (after discount)
// Actual: ???
```

---

### Task 14.4: ESLint & Prettier Setup 🔴
**Time:** 45 minutes

**Exercise: Set Up Linting**

1. **Initialize npm project:**
```bash
npm init -y
```

2. **Install ESLint:**
```bash
npm install eslint --save-dev
npx eslint --init
```

3. **Configure ESLint (.eslintrc.json):**
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": "warn",
        "no-console": "off",
        "eqeqeq": "error",
        "curly": "error",
        "prefer-const": "warn"
    }
}
```

4. **Install Prettier:**
```bash
npm install prettier --save-dev
```

5. **Configure Prettier (.prettierrc):**
```json
{
    "semi": true,
    "singleQuote": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "printWidth": 80
}
```

6. **VS Code Extensions:**
   - Install ESLint extension
   - Install Prettier extension
   - Set "Format on Save"

7. **Add to package.json:**
```json
{
    "scripts": {
        "lint": "eslint src/",
        "lint:fix": "eslint src/ --fix",
        "format": "prettier --write src/"
    }
}
```

**Task:** Run ESLint on your To-Do List and fix all errors/warnings.

---

### Task 14.5: Your First Unit Tests 🔴
**Time:** 45 minutes

Add automated tests to one of your projects. We'll use **Vitest** (fast, minimal config, Jest-compatible API) — but **any test runner is fine: Jest, Node's built-in `node:test`, etc.** The concepts are identical.

**Set up Vitest:**
```bash
npm install --save-dev vitest
```
Add to `package.json`:
```json
{
  "scripts": {
    "test": "vitest"
  }
}
```

**Test pure functions.** Extract a pure function from a past project into its own module, then test it:
```js
// format.js
export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
```
```js
// format.test.js
import { describe, it, expect } from 'vitest';
import { formatPrice } from './format.js';

describe('formatPrice', () => {
  it('formats whole dollars', () => {
    expect(formatPrice(500)).toBe('$5.00');
  });
  it('handles zero', () => {
    expect(formatPrice(0)).toBe('$0.00');
  });
});
```

**Your tasks:**
- [ ] Install a test runner (Vitest recommended; Jest or `node:test` accepted)
- [ ] Extract at least 2 pure functions into their own module
- [ ] Write at least 4 tests, including one edge case (empty / invalid input)
- [ ] Run `npm test` and make them all pass

> Prefer Jest? Swap `vitest` for `jest` — the `describe / it / expect` API is the same.

---

### Collaborative Task: Peer Code Review 🔴
**Time:** 60 minutes

**Peer Review Checklist:**

**Code Quality:**
- [ ] Meaningful variable/function names
- [ ] No magic numbers/strings
- [ ] Functions do one thing
- [ ] No deeply nested code (max 3 levels)
- [ ] No duplicate code

**JavaScript:**
- [ ] Uses const/let (no var)
- [ ] Proper error handling
- [ ] No unused variables
- [ ] Strict equality (===)

**DOM:**
- [ ] Efficient DOM queries (cached)
- [ ] Event delegation where appropriate
- [ ] No memory leaks (listeners removed)

**Async:**
- [ ] Error handling on all async operations
- [ ] Loading states handled
- [ ] No unhandled promise rejections

**Style:**
- [ ] Consistent formatting
- [ ] Proper indentation
- [ ] Meaningful comments (when needed)

**Review Process (on GitHub):**
1. Pair up with another student
2. Open a **Pull Request** against your partner's To-Do List repo (a small improvement, or a `REVIEW.md` with your notes)
3. Use the checklist above to leave **inline review comments** on their code
4. The author responds with follow-up commits addressing the feedback
5. Approve and merge once addressed

> Verifiable collaboration: your review comments and the author's response commits both show on GitHub.

---

## Daily Challenges

### Day 1: Theme Persistence 🟢
Create a theme toggle that:
- Switches between light/dark mode
- Persists preference in localStorage
- Applies on page load

### Day 2: Recent Searches 🟢
Create a search input that:
- Saves recent searches (last 5)
- Shows dropdown with history
- Click history item to search again

### Day 3: Form Auto-Save 🟡
Create a form that:
- Auto-saves all fields every 5 seconds
- Recovers data on page refresh
- Clears saved data on submit

### Day 4: Refactor Challenge 🟡
Take the messiest code you've written and:
- Add proper error handling
- Use meaningful names
- Extract repeated code into functions
- Add comments where helpful

### Day 5: Code Review 🟡
Review your Weather Dashboard:
- Does it handle all error cases?
- Is the code well-organized?
- Can another developer understand it?
- Write a list of improvements needed

---

## Week 7 Checklist

- [ ] Use localStorage to persist data
- [ ] Handle JSON serialization/parsing
- [ ] Implement auto-save functionality
- [ ] Manage application state cleanly
- [ ] Organize code into logical modules
- [ ] Follow clean code practices
- [ ] Debug effectively with DevTools
- [ ] Set up and use ESLint
- [ ] Set up and use Prettier
- [ ] Participate in code review
- [ ] To-Do List with persistence complete
- [ ] Shopping Cart complete
- [ ] All daily challenges complete

**Milestone:** You write professional-quality JavaScript! ✨

---

## Preparing for Phase 3 (React)

You're now ready for React! You've learned:
- ✅ JavaScript fundamentals (data types, functions, control flow)
- ✅ DOM manipulation (what React abstracts away)
- ✅ Events and user interactions
- ✅ Asynchronous programming and APIs
- ✅ State management (the foundation of React's approach)
- ✅ Clean code and organization

React will feel like a natural evolution, not a completely new world.
