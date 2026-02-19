# Week 8: React Fundamentals

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s10-week-08-{your-github-username}`

---

## Overview
This week you'll learn React - the most popular library for building user interfaces. Your JavaScript skills will directly translate, making React feel natural.

**Lessons:**
- Lesson 15: Introduction to React
- Lesson 16: State & Events in React

**Deliverable:** CommunityHub React frontend (basic structure)

---

## Lesson 15 Tasks

### Task 15.1: Setting Up React with Vite 🟢
**Time:** 30 minutes

**Create your React project (this will be your week-08 repository):**

```bash
# Create new Vite project - use the repo naming convention!
npm create vite@latest iyf-s10-week-08-yourusername -- --template react

# Navigate to project
cd iyf-s10-week-08-yourusername

# Install dependencies
npm install

# Initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit: React project setup"
# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/iyf-s10-week-08-yourusername.git
git push -u origin main

# Start development server
npm run dev
```

**Explore the project structure:**
```
iyf-s10-week-08-yourusername/
├── public/              # Static files
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Component styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

**Exercise: Understand JSX**
```jsx
// JSX looks like HTML but is JavaScript!
function App() {
    const name = "World";
    const isLoggedIn = true;
    
    return (
        <div>
            {/* This is a comment in JSX */}
            <h1>Hello, {name}!</h1>
            
            {/* JavaScript expressions in curly braces */}
            <p>2 + 2 = {2 + 2}</p>
            
            {/* Conditional rendering */}
            {isLoggedIn && <p>Welcome back!</p>}
            
            {/* Ternary for either/or */}
            <p>{isLoggedIn ? "Logged in" : "Please log in"}</p>
        </div>
    );
}
```

**Modify App.jsx:**
1. Change the heading to your name
2. Add 3 paragraphs about yourself
3. Display the current date using JavaScript
4. Add a conditional message based on time of day

---

### Task 15.2: Creating Components 🟢
**Time:** 45 minutes

**Exercise 1: Your First Component**

Create `src/components/Header.jsx`:
```jsx
function Header() {
    return (
        <header className="header">
            <h1>CommunityHub</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Posts</a>
                <a href="#">About</a>
            </nav>
        </header>
    );
}

export default Header;
```

Use it in `App.jsx`:
```jsx
import Header from './components/Header';

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <h2>Welcome to CommunityHub</h2>
            </main>
        </div>
    );
}
```

**Exercise 2: Create These Components**

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── PostCard.jsx
│   ├── Sidebar.jsx
│   └── Button.jsx
```

**PostCard.jsx:**
```jsx
function PostCard() {
    return (
        <article className="post-card">
            <h3>Post Title</h3>
            <p>Post excerpt goes here...</p>
            <span>Posted on January 1, 2026</span>
        </article>
    );
}

export default PostCard;
```

**Footer.jsx:**
```jsx
function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2026 CommunityHub. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
```

---

### Task 15.3: Working with Props 🟡
**Time:** 45 minutes

**Exercise 1: Passing Props**
```jsx
// Parent component
function App() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />
        </div>
    );
}

// Child component
function Greeting({ name }) {
    return <h2>Hello, {name}!</h2>;
}

// Alternative: props object
function Greeting(props) {
    return <h2>Hello, {props.name}!</h2>;
}
```

**Exercise 2: Dynamic PostCard**
```jsx
// PostCard with props
function PostCard({ title, excerpt, author, date }) {
    return (
        <article className="post-card">
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <div className="post-meta">
                <span>By {author}</span>
                <span>{date}</span>
            </div>
        </article>
    );
}

// Usage
function PostList() {
    return (
        <div className="post-list">
            <PostCard 
                title="Getting Started with React"
                excerpt="Learn the basics of React..."
                author="John Doe"
                date="Jan 15, 2026"
            />
            <PostCard 
                title="JavaScript Best Practices"
                excerpt="Write cleaner code..."
                author="Jane Smith"
                date="Jan 10, 2026"
            />
        </div>
    );
}
```

**Exercise 3: Rendering Lists**
```jsx
function PostList() {
    const posts = [
        { id: 1, title: "First Post", excerpt: "...", author: "Alice", date: "Jan 15" },
        { id: 2, title: "Second Post", excerpt: "...", author: "Bob", date: "Jan 14" },
        { id: 3, title: "Third Post", excerpt: "...", author: "Charlie", date: "Jan 13" }
    ];
    
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard 
                    key={post.id}  // Important! Unique key for each item
                    title={post.title}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                />
            ))}
        </div>
    );
}
```

**Exercise 4: Props Default Values & Destructuring**
```jsx
function Button({ 
    text = "Click me",
    variant = "primary",
    size = "medium",
    disabled = false 
}) {
    return (
        <button 
            className={`btn btn-${variant} btn-${size}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

// Usage
<Button text="Submit" variant="primary" />
<Button text="Cancel" variant="secondary" />
<Button text="Delete" variant="danger" />
<Button />  // Uses all defaults
```

---

### Task 15.4: Component Composition 🔴
**Time:** 45 minutes

**Exercise 1: Children Prop**
```jsx
// Card wrapper component
function Card({ children, title }) {
    return (
        <div className="card">
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}

// Usage - children is anything between opening and closing tags
<Card title="Welcome">
    <p>This is the card content!</p>
    <button>Click me</button>
</Card>

<Card>
    <img src="photo.jpg" alt="Photo" />
</Card>
```

**Exercise 2: Layout Component**
```jsx
function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

// Usage
function App() {
    return (
        <Layout>
            <h1>Home Page</h1>
            <PostList />
        </Layout>
    );
}
```

**Exercise 3: Conditional Rendering Patterns**
```jsx
function UserGreeting({ user }) {
    // Pattern 1: && operator (show if true)
    return (
        <div>
            {user && <p>Welcome, {user.name}!</p>}
            {!user && <p>Please log in</p>}
        </div>
    );
    
    // Pattern 2: Ternary (either/or)
    return (
        <div>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
    
    // Pattern 3: Early return
    if (!user) {
        return <p>Please log in</p>;
    }
    return <p>Welcome, {user.name}!</p>;
}
```

---

## Lesson 16 Tasks

### Task 16.1: useState Hook 🟢
**Time:** 30 minutes

**Exercise 1: Counter Component**
```jsx
import { useState } from 'react';

function Counter() {
    // Declare state variable
    const [count, setCount] = useState(0);
    
    // count = current value
    // setCount = function to update it
    // 0 = initial value
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}
```

**Exercise 2: Toggle Component**
```jsx
function Toggle() {
    const [isOn, setIsOn] = useState(false);
    
    return (
        <div>
            <p>The toggle is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={() => setIsOn(!isOn)}>
                Toggle
            </button>
        </div>
    );
}
```

**Exercise 3: Multiple State Variables**
```jsx
function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    
    return (
        <form>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input 
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Age"
            />
        </form>
    );
}
```

---

### Task 16.2: Handling Events 🟡
**Time:** 40 minutes

**Exercise 1: Event Handler Patterns**
```jsx
function EventExamples() {
    // Inline handler (simple cases)
    const handleClick = () => {
        console.log('Button clicked!');
    };
    
    // Handler with event object
    const handleInput = (event) => {
        console.log('Input value:', event.target.value);
    };
    
    // Handler with custom parameter
    const handleItemClick = (itemId) => {
        console.log('Item clicked:', itemId);
    };
    
    return (
        <div>
            {/* Basic click */}
            <button onClick={handleClick}>Click Me</button>
            
            {/* With event */}
            <input onChange={handleInput} />
            
            {/* With parameter - use arrow function */}
            <button onClick={() => handleItemClick(123)}>
                Item 123
            </button>
            
            {/* Prevent default */}
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Form submitted');
            }}>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
```

**Exercise 2: Controlled Form**
```jsx
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
            />
            <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
            />
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
            />
            <button type="submit">Send</button>
        </form>
    );
}
```

---

### Task 16.3: State with Arrays & Objects 🟡
**Time:** 45 minutes

**Exercise 1: Managing a List**
```jsx
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    
    // Add item
    const addTodo = () => {
        if (!inputValue.trim()) return;
        
        setTodos([
            ...todos,
            { id: Date.now(), text: inputValue, completed: false }
        ]);
        setInputValue('');
    };
    
    // Toggle item
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id 
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };
    
    // Delete item
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button onClick={addTodo}>Add</button>
            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span 
                            style={{ 
                                textDecoration: todo.completed ? 'line-through' : 'none' 
                            }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

**Important! Never mutate state directly:**
```jsx
// ❌ WRONG - mutates state
todos.push(newTodo);
setTodos(todos);

// ✅ CORRECT - creates new array
setTodos([...todos, newTodo]);

// ❌ WRONG - mutates object
todo.completed = true;
setTodos(todos);

// ✅ CORRECT - creates new object
setTodos(todos.map(t => 
    t.id === id ? { ...t, completed: true } : t
));
```

---

### Task 16.4: Lifting State Up 🔴
**Time:** 45 minutes

**Exercise: Shared State Between Components**

```jsx
// Parent component holds the state
function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "First Post", likes: 0 },
        { id: 2, title: "Second Post", likes: 0 }
    ]);
    
    const handleLike = (id) => {
        setPosts(posts.map(post =>
            post.id === id
                ? { ...post, likes: post.likes + 1 }
                : post
        ));
    };
    
    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
    
    return (
        <div>
            <Stats totalPosts={posts.length} totalLikes={totalLikes} />
            <PostList posts={posts} onLike={handleLike} />
        </div>
    );
}

// Child receives data via props
function Stats({ totalPosts, totalLikes }) {
    return (
        <div className="stats">
            <span>{totalPosts} posts</span>
            <span>{totalLikes} total likes</span>
        </div>
    );
}

// Child receives data and callback
function PostList({ posts, onLike }) {
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard 
                    key={post.id}
                    post={post}
                    onLike={() => onLike(post.id)}
                />
            ))}
        </div>
    );
}

function PostCard({ post, onLike }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <button onClick={onLike}>
                ❤️ {post.likes}
            </button>
        </div>
    );
}
```

---

### Mini-Project: CommunityHub Frontend 🔴
**Time:** 120 minutes

**Build the basic structure of CommunityHub in React:**

**Component Structure:**
```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Sidebar.jsx
│   ├── Post/
│   │   ├── PostCard.jsx
│   │   ├── PostList.jsx
│   │   └── CreatePost.jsx
│   ├── User/
│   │   ├── UserCard.jsx
│   │   └── UserProfile.jsx
│   └── shared/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── Card.jsx
├── App.jsx
└── main.jsx
```

**Requirements:**

1. **Header Component**
   - Logo/Site name
   - Navigation links
   - User menu (login button for now)

2. **PostList Component**
   - Display array of posts from state
   - Each post shows: title, excerpt, author, date, likes

3. **CreatePost Component**
   - Form to create new post (title, content)
   - Adds to posts array on submit

4. **Sidebar Component**
   - "About" section
   - "Popular Posts" (hardcoded for now)
   - "Tags" or categories

5. **Footer Component**
   - Links
   - Copyright

**Bonus:**
- Like/unlike posts
- Delete posts
- Filter posts by search

---

## Daily Challenges

### Day 1: Greeting Component 🟢
Create a `Greeting` component that:
- Takes `name` and `timeOfDay` as props
- Shows different messages based on time (morning/afternoon/evening)
- Has a default name of "Guest"

### Day 2: Card Component with Props 🟢
Create a reusable `Card` component with:
- title prop
- children prop
- variant prop (primary, secondary, outlined)
- Different styles based on variant

### Day 3: List with Keys 🟢
Create a `UserList` component that:
- Receives array of users as prop
- Renders a `UserCard` for each
- Uses proper key prop
- Shows message if array is empty

### Day 4: Reusable Button 🟡
Create a `Button` component with:
- text prop
- onClick prop
- variant prop (primary, secondary, danger)
- disabled prop
- size prop (small, medium, large)
- loading prop (shows spinner)

### Day 5: Layout Component 🟡
Create a `PageLayout` component that:
- Takes children prop
- Includes Header and Footer
- Has a sidebar prop (optional)
- Handles responsive layout

---

## Week 8 Checklist

- [ ] Create React project with Vite
- [ ] Understand JSX syntax
- [ ] Create functional components
- [ ] Use props to pass data
- [ ] Render lists with map and key
- [ ] Use children prop for composition
- [ ] Use useState hook
- [ ] Handle events (onClick, onChange, onSubmit)
- [ ] Manage arrays/objects in state
- [ ] Lift state up to share between components
- [ ] CommunityHub basic structure complete
- [ ] All daily challenges complete

**Milestone:** You can build in React! ⚛️
