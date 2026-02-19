# Week 6: Asynchronous JavaScript

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s10-week-06-{your-github-username}`

---

## Overview
This week you'll master asynchronous programming - the key to working with APIs, handling user interactions, and building modern web applications.

**Lessons:**
- Lesson 11: Callbacks, Promises & Async/Await
- Lesson 12: Working with APIs

**Deliverable:** Weather Dashboard using OpenWeatherMap API

---

## Lesson 11 Tasks

### Task 11.1: Understanding Async 🟢
**Time:** 30 minutes

**Exercise 1: Synchronous vs Asynchronous**
```javascript
// Synchronous - blocks until complete
console.log("1 - Start");
console.log("2 - Middle");
console.log("3 - End");
// Output: 1, 2, 3 (in order)

// Asynchronous - doesn't block
console.log("1 - Start");

setTimeout(() => {
    console.log("2 - This is delayed");
}, 2000);

console.log("3 - End");
// Output: 1, 3, then 2 (after 2 seconds)
```

**Predict the output:**
```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

// What order will these print?
```

**Exercise 2: Callback Pattern**
```javascript
// Old-style callbacks
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Data received:", data);
});

// Build: Create a function that simulates loading user data
function loadUser(userId, callback) {
    // Simulate 1.5 second database lookup
    // Call callback with user object
}
```

---

### Task 11.2: Callback Hell & Introduction to Promises 🟡
**Time:** 40 minutes

**Exercise 1: Experience Callback Hell**
```javascript
// This is BAD - "Callback Hell" or "Pyramid of Doom"
function getUserData(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "John" });
    }, 1000);
}

function getUserPosts(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, title: "Post 1" },
            { id: 2, title: "Post 2" }
        ]);
    }, 1000);
}

function getPostComments(postId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, text: "Great post!" },
            { id: 2, text: "Thanks for sharing" }
        ]);
    }, 1000);
}

// The nightmare:
getUserData(1, function(user) {
    console.log("User:", user);
    getUserPosts(user.id, function(posts) {
        console.log("Posts:", posts);
        getPostComments(posts[0].id, function(comments) {
            console.log("Comments:", comments);
            // Imagine 3 more levels deep...
        });
    });
});
```

**Exercise 2: Promises to the Rescue**
```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("It worked!");
        } else {
            reject("Something went wrong");
        }
    }, 1000);
});

// Using a Promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

**Refactor getUserData to return a Promise:**
```javascript
function getUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "John" });
            } else {
                reject("Invalid user ID");
            }
        }, 1000);
    });
}

// Now do the same for getUserPosts and getPostComments
```

---

### Task 11.3: Promise Chaining 🟡
**Time:** 40 minutes

**Exercise 1: Chain Promises**
```javascript
// After refactoring to Promises:
getUserData(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

**Exercise 2: Promise.all**
```javascript
// Run multiple promises in parallel
const promise1 = getUserData(1);
const promise2 = getUserData(2);
const promise3 = getUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All users:", results);
        // results is an array [user1, user2, user3]
    })
    .catch(error => {
        // If ANY promise fails, this runs
        console.error("One failed:", error);
    });
```

**Exercise 3: Promise.race**
```javascript
// First to complete wins
const fast = new Promise(resolve => setTimeout(() => resolve("Fast!"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow!"), 500));

Promise.race([fast, slow])
    .then(result => {
        console.log("Winner:", result);  // "Fast!"
    });
```

**Build:** Fetch data for 3 users simultaneously and display them all at once.

---

### Task 11.4: Async/Await 🔴
**Time:** 45 minutes

**Exercise 1: Converting to Async/Await**
```javascript
// Promise chain version:
function getDataWithPromises() {
    return getUserData(1)
        .then(user => getUserPosts(user.id))
        .then(posts => getPostComments(posts[0].id))
        .then(comments => comments);
}

// Async/await version (much cleaner!):
async function getDataWithAsync() {
    const user = await getUserData(1);
    const posts = await getUserPosts(user.id);
    const comments = await getPostComments(posts[0].id);
    return comments;
}

// Using:
getDataWithAsync().then(comments => console.log(comments));

// Or inside another async function:
async function main() {
    const comments = await getDataWithAsync();
    console.log(comments);
}
```

**Exercise 2: Error Handling with Try/Catch**
```javascript
async function fetchUserData(userId) {
    try {
        const user = await getUserData(userId);
        const posts = await getUserPosts(user.id);
        return { user, posts };
    } catch (error) {
        console.error("Failed to fetch:", error);
        throw error;  // Re-throw if needed
    }
}
```

**Exercise 3: Parallel with Async/Await**
```javascript
async function getAllUsers() {
    // Sequential (slow):
    const user1 = await getUserData(1);
    const user2 = await getUserData(2);
    const user3 = await getUserData(3);
    // Total time: ~3 seconds
    
    // Parallel (fast):
    const [u1, u2, u3] = await Promise.all([
        getUserData(1),
        getUserData(2),
        getUserData(3)
    ]);
    // Total time: ~1 second
    
    return [u1, u2, u3];
}
```

**Build:** Rewrite the callback hell example using async/await.

---

## Lesson 12 Tasks

### Task 12.1: Fetch API Basics 🟢
**Time:** 30 minutes

**Exercise 1: Your First Fetch**
```javascript
// Basic fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Response object:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        return response.json();  // Parse JSON
    })
    .then(data => {
        console.log("User data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
```

**Exercise 2: Fetch with Async/Await**
```javascript
async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
}

// Use it
const user = await getUser(1);
console.log(user);
```

**Practice:** Fetch and display:
1. A single user from JSONPlaceholder
2. All users (https://jsonplaceholder.typicode.com/users)
3. Posts for user 1 (https://jsonplaceholder.typicode.com/users/1/posts)

---

### Task 12.2: Display API Data in DOM 🟡
**Time:** 45 minutes

**Exercise: User Directory**

Create HTML:
```html
<div id="app">
    <h1>User Directory</h1>
    <div id="loading">Loading...</div>
    <div id="error" class="hidden"></div>
    <div id="users-container"></div>
</div>
```

JavaScript:
```javascript
const loading = document.getElementById("loading");
const errorDiv = document.getElementById("error");
const container = document.getElementById("users-container");

async function loadUsers() {
    try {
        showLoading();
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        
        const users = await response.json();
        displayUsers(users);
        
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

function showLoading() {
    loading.classList.remove("hidden");
    container.innerHTML = "";
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    errorDiv.textContent = `Error: ${message}`;
    errorDiv.classList.remove("hidden");
}

function displayUsers(users) {
    container.innerHTML = users.map(user => `
        <div class="user-card">
            <h2>${user.name}</h2>
            <p>📧 ${user.email}</p>
            <p>🏢 ${user.company.name}</p>
            <p>📍 ${user.address.city}</p>
        </div>
    `).join("");
}

// Initialize
loadUsers();
```

---

### Task 12.3: POST Requests 🟡
**Time:** 30 minutes

**Exercise: Creating Resources**
```javascript
async function createPost(title, body, userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            body,
            userId
        })
    });
    
    if (!response.ok) {
        throw new Error("Failed to create post");
    }
    
    return response.json();
}

// Use it
const newPost = await createPost(
    "My First Post",
    "This is the content of my post.",
    1
);
console.log("Created:", newPost);
```

**Build:** Create a form that submits a new post and displays the result.

---

### Task 12.4: Search & Filter 🔴
**Time:** 45 minutes

**Exercise: Live Search**
```javascript
let allUsers = [];

async function init() {
    allUsers = await fetchUsers();
    displayUsers(allUsers);
    
    // Set up search
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allUsers.filter(user => 
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );
        displayUsers(filtered);
    });
}
```

**Build:** Add these features to the user directory:
1. Search by name or email
2. Sort by name (A-Z or Z-A)
3. Filter by city (dropdown)

---

### Mini-Project: Weather Dashboard 🔴
**Time:** 120 minutes

Build a weather application using the OpenWeatherMap API.

**Setup:**
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get your free API key
3. API endpoint: `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

**HTML Structure:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Weather Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="weather-app">
        <h1>Weather Dashboard</h1>
        
        <form id="search-form">
            <input 
                type="text" 
                id="city-input" 
                placeholder="Enter city name..."
                required
            >
            <button type="submit">Search</button>
        </form>
        
        <div id="loading" class="hidden">
            Loading...
        </div>
        
        <div id="error" class="hidden error">
        </div>
        
        <div id="weather-display" class="hidden">
            <div class="weather-main">
                <h2 id="city-name"></h2>
                <img id="weather-icon" src="" alt="Weather icon">
                <p id="temperature"></p>
                <p id="description"></p>
            </div>
            
            <div class="weather-details">
                <div class="detail">
                    <span>Feels Like</span>
                    <span id="feels-like"></span>
                </div>
                <div class="detail">
                    <span>Humidity</span>
                    <span id="humidity"></span>
                </div>
                <div class="detail">
                    <span>Wind</span>
                    <span id="wind"></span>
                </div>
                <div class="detail">
                    <span>Pressure</span>
                    <span id="pressure"></span>
                </div>
            </div>
        </div>
        
        <div id="recent-searches">
            <h3>Recent Searches</h3>
            <ul id="search-history"></ul>
        </div>
    </div>
    
    <script src="app.js"></script>
</body>
</html>
```

**Requirements:**

1. **Search Functionality**
   - User enters city name
   - Fetch weather data from API
   - Display results

2. **Display Weather Data**
   - City name
   - Weather icon
   - Temperature (in Celsius)
   - Weather description
   - Feels like temperature
   - Humidity percentage
   - Wind speed
   - Pressure

3. **Error Handling**
   - Show error for invalid city
   - Show error for network issues
   - Loading state while fetching

4. **Recent Searches**
   - Save last 5 searched cities
   - Click on recent search to search again
   - Store in localStorage (preview for next week)

5. **Bonus Features**
   - 5-day forecast (different API endpoint)
   - Toggle Celsius/Fahrenheit
   - Geolocation - get weather for current location
   - Background changes based on weather

**Starter JavaScript:**
```javascript
const API_KEY = "your_api_key_here";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// DOM Elements
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");

// Elements to update
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

async function getWeather(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
        showLoading();
        hideError();
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found");
            }
            throw new Error("Failed to fetch weather data");
        }
        
        const data = await response.json();
        displayWeather(data);
        saveToHistory(city);
        
    } catch (err) {
        showError(err.message);
    } finally {
        hideLoading();
    }
}

function displayWeather(data) {
    // Update all the DOM elements with weather data
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    // ... complete the rest
    
    weatherDisplay.classList.remove("hidden");
}

function showLoading() {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}

function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
}

function hideError() {
    error.classList.add("hidden");
}

function saveToHistory(city) {
    // Save to localStorage
}

function loadHistory() {
    // Load from localStorage and display
}

// Event Listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

// Initialize
loadHistory();
```

---

## Daily Challenges

### Day 1: Delayed Promise 🟢
Create a function `delay(ms)` that returns a promise that resolves after `ms` milliseconds.
```javascript
await delay(2000);
console.log("This prints after 2 seconds");
```

### Day 2: Promise Chain 🟢
Create 3 functions that each return a promise after a random delay. Chain them together and time how long the total execution takes.

### Day 3: Error Handling 🟡
Create a function that fetches a user. If the user doesn't exist (404), return a default user object instead of throwing an error.

### Day 4: Rewrite with Async/Await 🟡
Take any callback-based code you wrote before and rewrite it using async/await.

### Day 5: Parallel Fetches 🟡
Fetch data from 3 different API endpoints simultaneously. Display results as each one completes (use Promise.allSettled).

---

## Week 6 Checklist

- [ ] Understand sync vs async code
- [ ] Create and use Promises
- [ ] Chain Promises correctly
- [ ] Use Promise.all and Promise.race
- [ ] Write async/await functions
- [ ] Handle errors with try/catch
- [ ] Use the Fetch API
- [ ] Handle loading and error states
- [ ] Display API data in the DOM
- [ ] Make POST requests
- [ ] Implement search/filter on API data
- [ ] Weather Dashboard complete
- [ ] All daily challenges complete

**Milestone:** You can work with APIs! 🌐
