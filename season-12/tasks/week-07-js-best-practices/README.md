# Week 7: JavaScript Best Practices

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s12-week-07-{your-github-username}`

---

## Overview
This week you'll learn to persist data, structure larger applications, and write professional-quality code. You'll also refactor your previous projects.

**Lessons:**
- Lesson 13: Local Storage & State Management
- Lesson 14: JavaScript Best Practices & Code Quality

**Deliverable:** your Week 5 To-Do List, **refactored**: it survives a page refresh (`localStorage`), it's split into modules, it passes ESLint, and it has unit tests that pass with `npm test`.

The Shopping Cart (Lesson 13) is a **class build** — it goes in a `cart/` folder in the same repo and counts towards task completion, but the To-Do refactor is the deliverable.

### Repository layout
```
iyf-s12-week-07-{your-github-username}/
├── index.html            ← the To-Do List, loads js/app.js as a module
├── styles.css
├── js/
│   ├── app.js            ← starts the app, wires events
│   ├── state.js          ← the state object and the actions that change it
│   ├── storage.js        ← localStorage load/save, safe against bad data
│   ├── todo-logic.js     ← PURE functions — no DOM, no localStorage
│   └── ui.js             ← everything that touches the DOM
├── tests/
│   └── todo-logic.test.js
├── cart/                 ← Lesson 13 class build
├── daily-challenges/
├── eslint.config.js
├── .prettierrc
├── package.json          ← committed
├── package-lock.json     ← committed
├── .gitignore            ← MUST list node_modules/
└── README.md
```

**Start from Week 5:** create and clone the week-07 repo, copy your Week 5 `index.html`, `styles.css` and `app.js` in, and commit them on their own: `Add: Week 5 to-do list as the starting point`.

> ⚠️ **This is the first week you use `npm`.** `npm install` creates a `node_modules/` folder with thousands of files. It must **never** be committed (-5). Put `node_modules/` in `.gitignore` **before** you run `npm install`, and check `git status` before every commit. Anyone who clones your repo runs `npm install` to recreate it from `package-lock.json`.

> **Node 22 or 24 required** (`node --version`). Vitest and Vite do not run on Node 20 any more.

---

## Lesson 13 Tasks

### Task 13.1: Local Storage Basics 🟢
**Time:** 30 minutes

**Exercise 1: Getting Started with localStorage**
```javascript
// Store a simple value
localStorage.setItem("username", "Amina");

// Retrieve the value
const username = localStorage.getItem("username");
console.log(username);  // "Amina"

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
    name: "Amina",
    age: 21,
    hobbies: ["coding", "reading"]
};

// WRONG - doesn't work as expected
localStorage.setItem("user", user);
console.log(localStorage.getItem("user"));  // "[object Object]"

// RIGHT - serialize to JSON
localStorage.setItem("user", JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem("user"));
console.log(retrieved);  // { name: "Amina", age: 21, hobbies: [...] }
```

**Exercise 3: Helper Functions**
```javascript
// Create reusable helpers
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromStorage(key, defaultValue = null) {
    const data = localStorage.getItem(key);
    if (data === null) return defaultValue;
    try {
        return JSON.parse(data);
    } catch {
        return defaultValue;   // someone (or an old version of your app) saved bad JSON — don't crash
    }
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

**Upgrade your To-Do List from Week 5.** Your Week 5 rule still holds: *the array is the truth, the page is a picture of it.* Persistence adds one step — **load once at startup, save after every change:**

```javascript
const STORAGE_KEY = "todos";

// 1. Load ONCE, when the app starts
let todos = getFromStorage(STORAGE_KEY, []);
let currentFilter = getFromStorage("filter", "all");

// 2. One place that saves and redraws
function commit() {
    saveToStorage(STORAGE_KEY, todos);
    saveToStorage("filter", currentFilter);
    render();
}

// 3. Every action: change the array, then commit()
function addTodo(text) {
    todos = [...todos, { id: Date.now(), text, completed: false, createdAt: new Date().toISOString() }];
    commit();
}

function toggleTodo(id) {
    todos = todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
    commit();
}

function deleteTodo(id) {
    todos = todos.filter((t) => t.id !== id);
    commit();
}

render();   // the script is at the end of <body>, so no DOMContentLoaded needed
```

> Don't re-read `localStorage` inside every action — it's slow, and the in-memory array and the stored copy drift apart when one of them is forgotten. And remember from Week 5: `dataset.id` is a **string** — `Number(item.dataset.id)` before comparing with `t.id`.

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

### Class Build: Shopping Cart 🔴
**Time:** 60 minutes · built in Lesson 13 · goes in `cart/` (`cart/index.html`, `cart/cart.js`)

Build a shopping cart with state management and persistence. It practises the same pattern as the deliverable on fresh code: one state object, actions that change it, values that are **calculated** (total, count) rather than stored, and save-after-every-change.

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
        { id: 1, name: "Mandazi (pack of 6)", price: 120 },
        { id: 2, name: "Chapati (pack of 5)", price: 150 },
        { id: 3, name: "Tea leaves 250g", price: 180 }
    ],
    cart: []  // { productId, quantity } — only the cart is saved; products are fixed
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

**Bonus:** undo the last change (keep a history array of previous `cart` copies; Undo restores the last one).

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

**Loading modules in the browser** — this is the step everyone misses:
```html
<!-- index.html: ONE script tag, type="module", at the end of <body> -->
<script type="module" src="js/app.js"></script>
```
```javascript
// js/app.js
import { loadTodos, saveTodos } from "./storage.js";   // the ".js" is required in the browser
import { addTodo, toggleTodo } from "./todo-logic.js";
```
- Without `type="module"`, the browser stops at the first `import` with **"Cannot use import statement outside a module"**.
- Modules only load from a server — use **Live Server**. Double-clicking `index.html` (a `file://` address) gives a CORS error.
- Each module has its own scope: a variable in `storage.js` is invisible to `app.js` unless it's exported and imported.

**Task:** Reorganize your To-Do List into the files in the repository layout above. The most important split: put the logic that **only transforms data** — add, toggle, delete, filter, count — in `todo-logic.js` as **pure functions** that take an array and return a new one. No `document`, no `localStorage` in that file. That's what makes it testable in Task 14.5.

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
// Expected: 69   (30 + 15 + 24 — under 100, so no discount)
// Actual: ???   — find the two bugs, then test the discount with an order over 100
```

---

### Task 14.4: ESLint & Prettier Setup 🔴
**Time:** 45 minutes

> **The old setup no longer works.** Tutorials (and this course until Season 11) show an `.eslintrc.json` file. ESLint 9 and later **ignore it** — you get *"ESLint couldn't find an eslint.config.(js|mjs|cjs) file"*. Use the setup below.

**1. Initialise npm — and protect `node_modules/` first:**
```bash
echo "node_modules/" >> .gitignore
npm init -y
npm pkg set type=module          # lets your config and tests use import/export
```

**2. Install ESLint, its recommended rules, browser globals, and Prettier:**
```bash
npm install --save-dev eslint @eslint/js globals prettier
```

**3. Create `eslint.config.js`:**
```javascript
import js from "@eslint/js";
import globals from "globals";

export default [
    { ignores: ["node_modules/"] },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: { ...globals.browser },
        },
        rules: {
            "no-var": "error",
            eqeqeq: "error",
            curly: "error",
            "prefer-const": "warn",
            "no-unused-vars": "warn",
        },
    },
    {
        files: ["tests/**/*.js"],
        languageOptions: { globals: { ...globals.node } },
    },
];
```
`no-var` and `eqeqeq` are the exact rules the marker checks by hand. Now ESLint checks them for you.

**4. Create `.prettierrc`:**
```json
{
    "semi": true,
    "singleQuote": false,
    "tabWidth": 4,
    "trailingComma": "es5",
    "printWidth": 100
}
```

**5. Add scripts to `package.json`:**
```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix",
        "format": "prettier --write \"**/*.{js,html,css}\"",
        "test": "vitest run"
    }
}
```

**6. VS Code:** install the **ESLint** and **Prettier** extensions; turn on *Format on Save*.

> ⚠️ **Format before you collaborate, not during.** Prettier rewrites whole files. Run `npm run format` once and commit it on its own (`Style: format with Prettier`). If it reformats a file in the middle of a PR, every line shows as changed and your reviewer can't see your real change (Live Session 2).

**Task:** run `npm run lint` on your To-Do List and fix every error and warning. Commit: `Fix: lint errors`.

---

### Task 14.5: Your First Unit Tests 🔴
**Time:** 45 minutes

Add automated tests to one of your projects. We'll use **Vitest** (fast, minimal config, Jest-compatible API) — but **any test runner is fine: Jest, Node's built-in `node:test`, etc.** The concepts are identical.

**Set up Vitest** (Node 22 or 24):
```bash
npm install --save-dev vitest
```
The `"test": "vitest run"` script from Task 14.4 runs the tests once and exits. (`vitest` on its own keeps watching for changes — handy while you work, but it never finishes.)

**Test pure functions.** Extract a pure function from a past project into its own module, then test it:
```js
// format.js
export function formatPrice(amount) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}
```
```js
// format.test.js
import { describe, it, expect } from 'vitest';
import { formatPrice } from './format.js';

describe('formatPrice', () => {
  it('formats with a thousands separator', () => {
    expect(formatPrice(1500)).toBe('KSh 1,500');
  });
  it('handles zero', () => {
    expect(formatPrice(0)).toBe('KSh 0');
  });
});
```

**Your tasks — test your To-Do List's logic:**
- [ ] Install a test runner (Vitest recommended; Jest or `node:test` accepted)
- [ ] Test the pure functions in `js/todo-logic.js` (add, toggle, delete, filter, count) in `tests/todo-logic.test.js`
- [ ] Write at least 4 tests, including one edge case (empty text, an id that doesn't exist, an empty list)
- [ ] Include one test that proves the function **doesn't change the original array**
- [ ] Run `npm test` and make them all pass

> **Why pure functions?** A function that touches `document` or `localStorage` needs a browser to run. A function that takes an array and returns an array runs anywhere — including the test runner. Splitting them apart in Task 14.1 is what makes this task possible.

> Prefer Jest? Swap `vitest` for `jest` — the `describe / it / expect` API is the same.

---

### Collaborative Task: Peer Code Review 🔴
**Time:** 60 minutes · 👥 With a reviewer you find on the *Week 7 Review Board*

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

**Review Process (on GitHub)** — real code review: the **author** opens the PR, a classmate reviews it.

1. **Open a PR of your own work:** do the module refactor (Task 14.1) on a branch, `refactor/modules`, push it, and open a PR into `main`.
2. **Post it on the board.** The instructor pins a *Week 7 Review Board* in Classroom; add your PR link. Then scroll the board and **take the oldest PR nobody has reviewed yet** — reply to claim it so two people don't double up. You are not assigned a partner and you do not wait to be given one: you take the PR that has been waiting longest. Most people end up swapping with whoever took theirs, which is fine.
3. **No collaborator invitation is needed.** Your repo is public, so any GitHub account can comment on your diff and submit a review — approve or request changes — without being added to anything. Tell your reviewer by **@-mentioning them in a comment on the PR**; the *Reviewers* box only offers people you have added as collaborators, so the mention is what reaches them.
4. **Review the PR you claimed:** *Files changed* → click the **+** beside a line to leave an **inline comment**. Use the checklist above. Leave at least three real ones — something to fix, a question, and something done well.
5. **Submit it with your scores:** *Review changes* → paste the scorecard below into the summary box → **Request changes**. The summary carries your scores; the inline comments are where the review actually happens. One without the other is half a review.
6. **Answer the review on your own PR:** push follow-up commits to the same branch (`Fix: rename vague variables from review`). Reply to each comment saying what you changed.
7. Your reviewer re-reviews and **approves**. You merge.

**The scorecard** — paste this into the review summary box in step 5 and fill it in. `0` absent · `1` poor · `2` passable · `3` good · `4` exemplary.

```markdown
## Peer review — @my-username reviewing @author-username

| Area | /4 | Note |
|---|---|---|
| Code quality — names, no magic numbers, one job per function, nesting, duplication | | |
| JavaScript — `const`/`let`, error handling, no unused variables, `===` | | |
| DOM — cached queries, event delegation, listeners removed | | |
| Async — errors handled, loading states, no unhandled rejections | | |
| Style — formatting, indentation, comments that earn their place | | |
| **Total** | **/20** | |

**Fix first:**
**Question:**
**Done well:**
```

> **Why the author opens the PR:** GitHub only lets you comment on lines that the PR **changes**. A review PR that just adds a `REVIEW.md` can't put a single comment on your partner's actual code. The scorecard goes in the review summary for the same reason — it travels with the comments instead of replacing them.
>
> **Your scores do not set anyone's grade.** They are feedback for the author. The instructor marks the review itself: the inline comments, whether your numbers match what the code actually does, and the commits the author pushed in reply. A row of 4s on code full of magic numbers counts against **you**, not them. A 2 with a reason is worth more to your partner than a 4.
>
> **Make it findable:** in your README's **Collaboration** section (template in the Submission Guidelines), link **the PR you opened** (your refactor) and **the review you wrote** — hover one of your inline comments → **…** → *Copy link*. B3 is marked from those two links only.
>
> **If nobody reviewed your PR,** you are still marked on the review you wrote — that half never depends on anyone else. Say so under *Collaboration* and name who went missing. It does not work the other way round: "nobody paired with me" is no reason to skip reviewing, because the board is the whole class and reviewing a public PR needs no permission.

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
- [ ] Set up and use ESLint (`eslint.config.js`) — `npm run lint` is clean
- [ ] Set up and use Prettier
- [ ] Unit tests pass with `npm test`
- [ ] `node_modules/` is in `.gitignore` and not in the repo
- [ ] Opened a PR and posted it on the Review Board; reviewed a classmate's PR inline with the scorecard; responded to the review of mine with commits
- [ ] To-Do List with persistence, modules and tests complete (the deliverable)
- [ ] Shopping Cart class build complete
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
