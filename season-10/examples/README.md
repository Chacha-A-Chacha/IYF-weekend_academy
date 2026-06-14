# Examples

This folder contains complete, working example projects that demonstrate concepts from the course.

---

## Weather App

**Location:** `weather-app/`

A minimal weather search application that demonstrates **Lesson 12: Working with APIs**.

### Quick Start

1. Open `index.html` in a browser
2. Enter a city name and click Search
3. See real weather data from OpenWeatherMap API

**Optional:** Get your own free API key from [OpenWeatherMap](https://openweathermap.org/api) and replace `API_KEY` in `main.js`.

### What You'll Learn

- **Fetching data:** `fetch()` to request data from an API
- **Async/await:** Using modern syntax to handle async operations
- **Error handling:** `try/catch` to handle network and parsing errors
- **DOM updates:** Dynamically display API response data
- **State management:** Show/hide loading and error states
- **Event handling:** Form submission triggers the fetch

### Code Walkthrough

#### HTML
- Form with city input
- Divs for loading, error, and weather display
- Simple semantic structure

#### CSS
- Clean, minimal styling
- Responsive design
- State classes (`.hidden`)

#### JavaScript
The entire app is ~90 lines:
1. `fetchWeather(city)` - makes the API request
2. `displayWeather(data)` - updates DOM with response
3. Error handling - shows user-friendly messages
4. Event listener - calls fetch when form submitted

### Key Pattern: Try/Catch Async

```javascript
async function fetchWeather(city) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
}
```

This pattern appears in almost every real API call.

### Resources

- [OpenWeatherMap API](https://openweathermap.org/api)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info: Fetch](https://javascript.info/fetch)

---

## To-Do List Application

**Location:** `to-do-list/`

A fully functional interactive to-do list that demonstrates all key DOM manipulation and event handling concepts from **Lesson 9 & 10**.

### What You'll Learn

#### From the HTML (`index.html`)
- Page structure with semantic elements
- Using `id` for unique elements
- Using `class` for styling and selection groups
- Input fields and buttons
- Using `data-*` attributes for storing information

#### From the CSS (`styles.css`)
- Professional styling patterns
- Transitions and hover states
- Responsive design
- CSS classes for dynamic styling (`.completed`, `.filter-btn-active`)
- Flexbox for layout
- CSS variables concepts

#### From the JavaScript (`main.js`)
- **State management** — tasks array is the "source of truth"
- **DOM selection** — `getElementById`, `querySelector`, `querySelectorAll`
- **Creating elements** — `document.createElement()`
- **Modifying the DOM** — `.innerHTML`, `.textContent`, `.classList`
- **Event listeners** — `addEventListener` on multiple elements
- **Event delegation** — ONE listener on parent catches clicks on children
- **Event object** — using `event.target` to identify what was clicked
- **Keyboard events** — detecting `Enter` key in input
- **Filtering & searching** — `.filter()` array method
- **Rendering logic** — updating the entire UI when state changes

### Key Concepts Demonstrated

#### 1. Single Responsibility
Each function does ONE thing:
- `addTask()` - adds to state
- `deleteTask()` - removes from state
- `toggleTask()` - changes state
- `render()` - updates DOM
- `getFilteredTasks()` - returns subset of tasks

#### 2. Event Delegation Pattern (Most Important!)
```javascript
taskList.addEventListener('click', (event) => {
    if (event.target.matches('.checkbox')) {
        // Handle checkbox click
    }
    if (event.target.matches('.delete-btn')) {
        // Handle delete click
    }
});
```
This pattern works for dynamically added tasks—key learning point.

#### 3. State-Driven UI
Two variables hold all state:
```javascript
const tasks = [];        // Array of task objects
let currentFilter = 'all'; // Filter setting
```

Every change to state → call `render()` → page updates.

#### 4. Reusability
The `render()` function rebuilds the entire UI. No matter what changed, calling `render()` once brings everything up to date.

### How to Use This Example

#### Option 1: Study the Code
1. Open `index.html` in a browser
2. Use it to understand the flow
3. Read the JavaScript comments carefully
4. Try modifying values and see what breaks

#### Option 2: Rebuild It Yourself
1. Hide `main.js`
2. Try to recreate the functionality
3. Reference it only when stuck

#### Option 3: Extend It
Try adding features:
- Save tasks to `localStorage` so they persist on reload
- Add a "due date" to each task
- Add priority levels (high/medium/low)
- Add task categories
- Add a dark mode toggle

### Testing the Example

1. Add a task — type in input, press Enter or click Add
2. Click checkbox or task text — marks as complete
3. Click × button — deletes the task
4. Click filter buttons — shows all/active/completed tasks
5. Click "Clear Completed" — removes all done tasks
6. Stats update in real-time as you interact

### Common Questions

**Q: Why does the entire page re-render each time I add a task?**
A: It's simpler and more reliable than trying to surgically insert one item. Performance is fine for small lists.

**Q: Why use event delegation instead of adding listeners to each task?**
A: Delegation scales. If you load 1000 tasks, delegation is ONE listener instead of 1000.

**Q: Where does data persist after I reload?**
A: It doesn't—tasks are in memory. Add localStorage to persist data (that's a stretch goal!).

**Q: Can I use this code in a real project?**
A: It's an educational example, not production code. For real apps, use React/Vue/Svelte. But the patterns here are fundamental to all frameworks.

### Resources

- [MDN: Manipulating Documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN: Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [JavaScript.info: Events](https://javascript.info/events)
