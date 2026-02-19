# Week 9: React Advanced

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s10-week-09-{your-github-username}`

---

## Overview
This week you'll learn advanced React patterns including effects, data fetching, routing, and styling. Your CommunityHub will become a multi-page app with real data.

**Lessons:**
- Lesson 17: Effects, Data Fetching & Routing
- Lesson 18: React Patterns & Styling

**Deliverable:** CommunityHub with routing and API integration

---

## Lesson 17 Tasks

### Task 17.1: useEffect Hook 🟢
**Time:** 40 minutes

**Exercise 1: Understanding useEffect**
```jsx
import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    // Runs after every render
    useEffect(() => {
        console.log('Effect ran! Count is:', count);
    });
    
    // Runs only on mount (empty dependency array)
    useEffect(() => {
        console.log('Component mounted!');
    }, []);
    
    // Runs when count changes
    useEffect(() => {
        console.log('Count changed to:', count);
        document.title = `Count: ${count}`;
    }, [count]);
    
    // Cleanup function (runs on unmount or before re-running)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Tick');
        }, 1000);
        
        // Cleanup
        return () => {
            clearInterval(interval);
            console.log('Cleaned up!');
        };
    }, []);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

**Exercise 2: Common useEffect Patterns**
```jsx
// Pattern 1: Fetch data on mount
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            const response = await fetch(`/api/users/${userId}`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }
        
        fetchUser();
    }, [userId]);  // Re-fetch when userId changes
    
    if (loading) return <p>Loading...</p>;
    return <div>{user.name}</div>;
}

// Pattern 2: Event listeners
function WindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return <p>Window: {size.width} x {size.height}</p>;
}

// Pattern 3: localStorage sync
function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
    
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);
    
    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme ({theme})
        </button>
    );
}
```

---

### Task 17.2: Data Fetching in React 🟡
**Time:** 45 minutes

**Exercise 1: Fetch Posts from API**
```jsx
function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                
                const data = await response.json();
                setPosts(data.slice(0, 10));  // First 10 posts
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchPosts();
    }, []);
    
    if (loading) return <div className="loading">Loading posts...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function PostCard({ post }) {
    return (
        <article className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
        </article>
    );
}
```

**Exercise 2: Custom Fetch Hook**
```jsx
// hooks/useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error('Fetch failed');
                }
                
                const json = await response.json();
                setData(json);
                
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
    }, [url]);
    
    return { data, loading, error };
}

// Usage
function PostList() {
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
```

---

### Task 17.3: React Router 🟡
**Time:** 60 minutes

**Setup:**
```bash
npm install react-router-dom
```

**Exercise 1: Basic Routing**
```jsx
// main.jsx
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="posts" element={<Posts />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
```

```jsx
// components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <div className="layout">
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/posts">Posts</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            
            <main>
                <Outlet />  {/* Child routes render here */}
            </main>
            
            <footer>
                <p>&copy; 2026 CommunityHub</p>
            </footer>
        </div>
    );
}
```

**Exercise 2: Dynamic Routes**
```jsx
// App.jsx
<Route path="posts/:postId" element={<PostDetail />} />

// pages/PostDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [postId]);
    
    if (!post) return <p>Loading...</p>;
    
    return (
        <article>
            <Link to="/posts">&larr; Back to Posts</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    );
}
```

**Exercise 3: Navigation**
```jsx
import { useNavigate, NavLink } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Clear user data
        navigate('/');  // Redirect to home
    };
    
    return (
        <nav>
            {/* NavLink adds active class automatically */}
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'active' : ''}
            >
                Home
            </NavLink>
            <NavLink to="/posts">Posts</NavLink>
            
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
}
```

---

### Task 17.4: Loading & Error States 🔴
**Time:** 45 minutes

**Exercise: Professional Loading/Error Handling**

```jsx
// components/shared/LoadingSpinner.jsx
function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
    return (
        <div className={`loading-spinner ${size}`}>
            <div className="spinner"></div>
            <p>{text}</p>
        </div>
    );
}

// components/shared/ErrorMessage.jsx
function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error-message">
            <span className="error-icon">⚠️</span>
            <p>{message}</p>
            {onRetry && (
                <button onClick={onRetry}>Try Again</button>
            )}
        </div>
    );
}

// Usage in component
function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchPosts();
    }, []);
    
    if (loading) return <LoadingSpinner text="Loading posts..." />;
    if (error) return <ErrorMessage message={error} onRetry={fetchPosts} />;
    if (posts.length === 0) return <p>No posts found.</p>;
    
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
```

---

## Lesson 18 Tasks

### Task 18.1: Custom Hooks 🟡
**Time:** 45 minutes

**Exercise 1: useLocalStorage Hook**
```jsx
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Get from localStorage or use initial value
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });
    
    // Update localStorage when value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    
    return [value, setValue];
}

// Usage
function Settings() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const [fontSize, setFontSize] = useLocalStorage('fontSize', 16);
    
    return (
        <div>
            <select 
                value={theme} 
                onChange={e => setTheme(e.target.value)}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            
            <input 
                type="range" 
                value={fontSize}
                onChange={e => setFontSize(Number(e.target.value))}
                min="12"
                max="24"
            />
        </div>
    );
}
```

**Exercise 2: useToggle Hook**
```jsx
function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    
    const toggle = () => setValue(v => !v);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    
    return [value, { toggle, setTrue, setFalse }];
}

// Usage
function Modal() {
    const [isOpen, { toggle, setFalse }] = useToggle(false);
    
    return (
        <>
            <button onClick={toggle}>Open Modal</button>
            
            {isOpen && (
                <div className="modal">
                    <p>Modal Content</p>
                    <button onClick={setFalse}>Close</button>
                </div>
            )}
        </>
    );
}
```

**Exercise 3: useForm Hook**
```jsx
function useForm(initialValues, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };
    
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        
        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);
        }
    };
    
    const reset = () => {
        setValues(initialValues);
        setErrors({});
        setTouched({});
    };
    
    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        reset,
        setValues
    };
}

// Usage
function ContactForm() {
    const validate = (values) => {
        const errors = {};
        if (!values.email.includes('@')) {
            errors.email = 'Invalid email';
        }
        return errors;
    };
    
    const { values, errors, touched, handleChange, handleBlur, reset } = 
        useForm({ name: '', email: '' }, validate);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            
            <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && (
                <span className="error">{errors.email}</span>
            )}
            
            <button type="submit">Submit</button>
        </form>
    );
}
```

---

### Task 18.2: Styling React Applications 🟡
**Time:** 45 minutes

**Exercise 1: CSS Modules**
```jsx
// components/Button.module.css
.button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.primary {
    background-color: #007bff;
    color: white;
}

.secondary {
    background-color: #6c757d;
    color: white;
}
```

```jsx
// components/Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', children, ...props }) {
    return (
        <button 
            className={`${styles.button} ${styles[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
}
```

**Exercise 2: Tailwind CSS Setup**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```jsx
// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```jsx
// Using Tailwind
function Card({ title, children }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {title}
            </h3>
            <div className="text-gray-600">
                {children}
            </div>
        </div>
    );
}

function Button({ variant = 'primary', children }) {
    const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600"
    };
    
    return (
        <button className={`${baseClasses} ${variants[variant]}`}>
            {children}
        </button>
    );
}
```

---

### Task 18.3: Component Library 🔴
**Time:** 60 minutes

**Build a reusable component library for CommunityHub:**

```
src/components/shared/
├── Button/
│   ├── Button.jsx
│   ├── Button.module.css (or use Tailwind)
│   └── index.js
├── Input/
│   ├── Input.jsx
│   └── index.js
├── Card/
│   ├── Card.jsx
│   └── index.js
├── Modal/
│   ├── Modal.jsx
│   └── index.js
├── Avatar/
│   ├── Avatar.jsx
│   └── index.js
└── index.js (export all)
```

**Button Component:**
```jsx
// components/shared/Button/Button.jsx
function Button({ 
    children, 
    variant = 'primary', 
    size = 'medium',
    loading = false,
    disabled = false,
    fullWidth = false,
    onClick,
    type = 'button'
}) {
    const baseClasses = "font-medium rounded transition-all duration-200";
    
    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2",
        large: "px-6 py-3 text-lg"
    };
    
    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
        danger: "bg-red-500 text-white hover:bg-red-600",
        ghost: "text-gray-600 hover:bg-gray-100"
    };
    
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${fullWidth ? 'w-full' : ''}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
        >
            {loading ? (
                <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        {/* Spinner SVG */}
                    </svg>
                    Loading...
                </span>
            ) : children}
        </button>
    );
}

export default Button;
```

**Input Component:**
```jsx
function Input({
    label,
    error,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    name,
    required = false
}) {
    return (
        <div className="mb-4">
            {label && (
                <label 
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`
                    w-full px-3 py-2 border rounded-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${error 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300'
                    }
                `}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
}
```

---

### Mini-Project: Complete CommunityHub Frontend 🔴
**Time:** 120 minutes

**Requirements:**

1. **Pages:**
   - Home (welcome + recent posts)
   - Posts List (all posts with search)
   - Post Detail (single post view)
   - Create Post (form)
   - About

2. **Features:**
   - React Router navigation
   - Fetch posts from JSONPlaceholder API
   - Search/filter posts
   - Create new post (local state)
   - Like posts
   - Loading states
   - Error handling

3. **Components:**
   - Header with navigation
   - PostCard
   - PostList
   - CreatePostForm
   - Sidebar
   - Footer
   - Button, Input, Card (reusable)

4. **Styling:**
   - Use CSS Modules or Tailwind
   - Responsive design
   - Consistent design system

**Project Structure:**
```
src/
├── components/
│   ├── Layout/
│   ├── Post/
│   └── shared/
├── hooks/
│   ├── useFetch.js
│   └── useLocalStorage.js
├── pages/
│   ├── Home.jsx
│   ├── Posts.jsx
│   ├── PostDetail.jsx
│   ├── CreatePost.jsx
│   └── About.jsx
├── App.jsx
└── main.jsx
```

---

## Daily Challenges

### Day 1: Timer Component 🟢
Create a timer component that:
- Shows elapsed time (seconds)
- Has start/stop/reset buttons
- Uses useEffect for the interval
- Cleans up properly

### Day 2: API Search 🟡
Create a search component that:
- Fetches users from JSONPlaceholder
- Filters as user types
- Debounces the search (wait for user to stop typing)
- Shows loading state

### Day 3: Tabs Component 🟡
Create a reusable Tabs component:
- Multiple tab headers
- Show content based on active tab
- Customizable via props
- Animated transitions (bonus)

### Day 4: Protected Route 🔴
Create a simulated auth system:
- Login form (fake - just store username)
- Protected routes that redirect to login
- Show username in header when logged in
- Logout functionality

### Day 5: Full Page 🔴
Build a complete "User Profile" page:
- Fetch user data from API
- Show user info, posts, and todos
- Tabbed interface
- Loading and error states

---

## Week 9 Checklist

- [ ] Use useEffect for side effects
- [ ] Fetch data from APIs in React
- [ ] Create custom hooks
- [ ] Set up React Router
- [ ] Create dynamic routes with params
- [ ] Navigate programmatically
- [ ] Handle loading and error states
- [ ] Style with CSS Modules or Tailwind
- [ ] Build reusable component library
- [ ] CommunityHub frontend complete
- [ ] All daily challenges complete

**Milestone:** You're a React developer! 🚀

---

## Preparing for Phase 4 (Backend)

You now have a complete frontend. Next week you'll:
- Build the API backend with Node.js and Express
- Connect your React frontend to your own backend
- Replace JSONPlaceholder with your real API
- Add user authentication

Your React skills are ready for full-stack development!
