# Week 10: Backend Basics - Node.js & Express

## Overview
This week you'll build your first backend server! You'll create RESTful APIs that power web applications, learning the server side of full-stack development.

**Lessons:**
- Lesson 19: Introduction to Node.js & Express
- Lesson 20: CRUD Operations & Middleware

**Deliverable:** CommunityHub API (posts endpoint)

---

## Lesson 19 Tasks

### Task 19.1: Node.js Basics 🟢
**Time:** 30 minutes

**Exercise 1: Your First Node Script**
```bash
# Check Node.js is installed
node --version

# Create a new directory
mkdir community-hub-api
cd community-hub-api

# Initialize npm project
npm init -y
```

Create `hello.js`:
```javascript
// Node.js can run JavaScript without a browser!
console.log("Hello from Node.js!");

// Access environment info
console.log("Node version:", process.version);
console.log("Current directory:", process.cwd());
console.log("Platform:", process.platform);

// Command line arguments
console.log("Arguments:", process.argv);
```

Run it:
```bash
node hello.js
node hello.js arg1 arg2
```

**Exercise 2: Built-in Modules**
```javascript
// fs - File System
const fs = require('fs');

// Read file (synchronous)
const content = fs.readFileSync('hello.js', 'utf-8');
console.log(content);

// Read file (asynchronous - preferred)
fs.readFile('hello.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Write file
fs.writeFileSync('output.txt', 'Hello, World!');

// path - Path utilities
const path = require('path');
console.log(path.join(__dirname, 'files', 'data.json'));
console.log(path.extname('photo.jpg'));  // .jpg
```

---

### Task 19.2: Express Setup 🟢
**Time:** 30 minutes

**Install Express:**
```bash
npm install express
```

**Create your first server (`server.js`):**
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

**Run it:**
```bash
node server.js
```

Visit `http://localhost:3000` in your browser!

**Exercise: Add More Routes**
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to CommunityHub API');
});

// About route
app.get('/about', (req, res) => {
    res.send('CommunityHub - A community platform');
});

// API health check
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString() 
    });
});

// 404 handler (put at the end)
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

---

### Task 19.3: Request & Response 🟡
**Time:** 45 minutes

**Exercise 1: Response Methods**
```javascript
// Send text
app.get('/text', (req, res) => {
    res.send('Plain text response');
});

// Send JSON
app.get('/json', (req, res) => {
    res.json({ message: 'JSON response', success: true });
});

// Send with status code
app.get('/error', (req, res) => {
    res.status(400).json({ error: 'Bad request' });
});

// Redirect
app.get('/old-page', (req, res) => {
    res.redirect('/new-page');
});
```

**Exercise 2: Route Parameters**
```javascript
// Dynamic route with parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Getting user ${userId}` });
});

// Multiple parameters
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params;
    res.json({ postId, commentId });
});
```

**Exercise 3: Query Strings**
```javascript
// /search?q=hello&limit=10
app.get('/search', (req, res) => {
    const { q, limit = 10, page = 1 } = req.query;
    
    res.json({
        query: q,
        limit: parseInt(limit),
        page: parseInt(page)
    });
});

// /posts?category=tech&sort=newest
app.get('/posts', (req, res) => {
    const { category, sort = 'newest' } = req.query;
    
    res.json({
        message: 'Getting posts',
        filters: { category, sort }
    });
});
```

---

### Task 19.4: Building Posts API 🔴
**Time:** 60 minutes

**Create a Posts API with in-memory data:**

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory data store
let posts = [
    { 
        id: 1, 
        title: "Getting Started with Node.js", 
        content: "Node.js is a JavaScript runtime...",
        author: "John Doe",
        createdAt: "2026-01-15T10:00:00Z",
        likes: 10
    },
    { 
        id: 2, 
        title: "Express.js Fundamentals", 
        content: "Express is a web framework...",
        author: "Jane Smith",
        createdAt: "2026-01-16T14:30:00Z",
        likes: 15
    }
];

let nextId = 3;

// GET all posts
app.get('/api/posts', (req, res) => {
    const { author, sort } = req.query;
    
    let result = [...posts];
    
    // Filter by author
    if (author) {
        result = result.filter(post => 
            post.author.toLowerCase().includes(author.toLowerCase())
        );
    }
    
    // Sort
    if (sort === 'newest') {
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'popular') {
        result.sort((a, b) => b.likes - a.likes);
    }
    
    res.json(result);
});

// GET single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post);
});

// POST create new post
app.post('/api/posts', (req, res) => {
    const { title, content, author } = req.body;
    
    // Validation
    if (!title || !content || !author) {
        return res.status(400).json({ 
            error: 'Title, content, and author are required' 
        });
    }
    
    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
        likes: 0
    };
    
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT update post
app.put('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === id);
    
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    const { title, content } = req.body;
    
    posts[postIndex] = {
        ...posts[postIndex],
        title: title || posts[postIndex].title,
        content: content || posts[postIndex].content,
        updatedAt: new Date().toISOString()
    };
    
    res.json(posts[postIndex]);
});

// DELETE post
app.delete('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === id);
    
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    posts.splice(postIndex, 1);
    res.status(204).send();  // No content
});

// PATCH like a post
app.patch('/api/posts/:id/like', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    
    post.likes++;
    res.json(post);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

**Test with Postman/Thunder Client:**
1. GET `http://localhost:3000/api/posts` - Get all posts
2. GET `http://localhost:3000/api/posts/1` - Get single post
3. POST `http://localhost:3000/api/posts` with JSON body - Create post
4. PUT `http://localhost:3000/api/posts/1` - Update post
5. DELETE `http://localhost:3000/api/posts/1` - Delete post
6. PATCH `http://localhost:3000/api/posts/1/like` - Like post

---

## Lesson 20 Tasks

### Task 20.1: Middleware 🟡
**Time:** 45 minutes

**Exercise 1: Understanding Middleware**
```javascript
// Middleware is a function that runs between request and response
// It has access to req, res, and next

// Logger middleware
const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();  // Pass to next middleware/route
};

// Apply to all routes
app.use(logger);

// Request time middleware
const addRequestTime = (req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
};

app.use(addRequestTime);

// Use in route
app.get('/api/time', (req, res) => {
    res.json({ requestTime: req.requestTime });
});
```

**Exercise 2: Built-in Middleware**
```javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
```

**Exercise 3: Route-specific Middleware**
```javascript
// Auth check middleware
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }
    
    // In real app, verify token here
    next();
};

// Apply to specific routes
app.get('/api/protected', requireAuth, (req, res) => {
    res.json({ message: 'This is protected data' });
});

// Apply to all routes starting with /api/admin
app.use('/api/admin', requireAuth);
```

---

### Task 20.2: Error Handling 🟡
**Time:** 40 minutes

**Exercise 1: Error Handling Middleware**
```javascript
// Custom error class
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Route that throws error
app.get('/api/error-test', (req, res, next) => {
    try {
        throw new ApiError('Something went wrong', 500);
    } catch (error) {
        next(error);  // Pass to error handler
    }
});

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/api/users', asyncHandler(async (req, res) => {
    const users = await fetchUsers();  // If this throws, it's caught
    res.json(users);
}));

// Error handling middleware (must be last!)
app.use((err, req, res, next) => {
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(statusCode).json({
        error: {
            message,
            status: statusCode
        }
    });
});
```

**Exercise 2: Validation Middleware**
```javascript
// Simple validation middleware
const validatePost = (req, res, next) => {
    const { title, content, author } = req.body;
    const errors = [];
    
    if (!title || title.length < 3) {
        errors.push('Title must be at least 3 characters');
    }
    
    if (!content || content.length < 10) {
        errors.push('Content must be at least 10 characters');
    }
    
    if (!author) {
        errors.push('Author is required');
    }
    
    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }
    
    next();
};

// Apply to route
app.post('/api/posts', validatePost, (req, res) => {
    // Create post (validation already passed)
});
```

---

### Task 20.3: Organizing Code 🔴
**Time:** 60 minutes

**Exercise: Modular Project Structure**

```
community-hub-api/
├── src/
│   ├── routes/
│   │   ├── posts.js
│   │   ├── users.js
│   │   └── index.js
│   ├── middleware/
│   │   ├── logger.js
│   │   ├── errorHandler.js
│   │   └── validate.js
│   ├── controllers/
│   │   ├── postsController.js
│   │   └── usersController.js
│   ├── data/
│   │   └── store.js
│   └── app.js
├── server.js
├── package.json
└── .env
```

**src/app.js:**
```javascript
const express = require('express');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api', routes);

// Error handler (last)
app.use(errorHandler);

module.exports = app;
```

**src/routes/index.js:**
```javascript
const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts');
const usersRoutes = require('./users');

router.use('/posts', postsRoutes);
router.use('/users', usersRoutes);

// Health check
router.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

module.exports = router;
```

**src/routes/posts.js:**
```javascript
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', postsController.createPost);
router.put('/:id', postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;
```

**src/controllers/postsController.js:**
```javascript
const store = require('../data/store');

const getAllPosts = (req, res) => {
    res.json(store.posts);
};

const getPostById = (req, res) => {
    const post = store.posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
};

const createPost = (req, res) => {
    const { title, content, author } = req.body;
    
    const newPost = {
        id: store.nextId++,
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
        likes: 0
    };
    
    store.posts.push(newPost);
    res.status(201).json(newPost);
};

const updatePost = (req, res) => {
    // Implementation
};

const deletePost = (req, res) => {
    // Implementation
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
```

**server.js:**
```javascript
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

### Task 20.4: Environment Variables 🟡
**Time:** 20 minutes

**Install dotenv:**
```bash
npm install dotenv
```

**Create `.env`:**
```
PORT=3000
NODE_ENV=development
API_KEY=your-secret-key
```

**Create `.env.example`:**
```
PORT=3000
NODE_ENV=development
API_KEY=
```

**Load in server.js:**
```javascript
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`Running in ${NODE_ENV} mode`);
```

**Add to `.gitignore`:**
```
.env
node_modules/
```

---

## Daily Challenges

### Day 1: Hello Server 🟢
Create a server with routes for:
- `/` - Welcome message
- `/about` - About page
- `/api/time` - Returns current time as JSON

### Day 2: User API 🟡
Create a users API with:
- GET `/api/users` - List all users
- GET `/api/users/:id` - Get single user
- POST `/api/users` - Create user
- Validation for email and name

### Day 3: Query Filtering 🟡
Add to your posts API:
- Filter by author (`?author=john`)
- Search in title (`?search=node`)
- Pagination (`?page=1&limit=10`)
- Sorting (`?sort=newest`)

### Day 4: Logger Middleware 🟡
Create a logger middleware that:
- Logs method, URL, and timestamp
- Logs response time
- Writes to a log file (bonus)

### Day 5: Comments Endpoint 🔴
Add comments to your posts API:
- GET `/api/posts/:id/comments` - Get post comments
- POST `/api/posts/:id/comments` - Add comment
- DELETE `/api/posts/:id/comments/:commentId` - Delete comment

---

## Week 10 Checklist

- [ ] Run JavaScript with Node.js
- [ ] Use built-in Node.js modules (fs, path)
- [ ] Create Express server
- [ ] Define routes and handle requests
- [ ] Use route parameters and query strings
- [ ] Send JSON responses with status codes
- [ ] Build full CRUD API
- [ ] Create and use middleware
- [ ] Handle errors properly
- [ ] Organize code with routes and controllers
- [ ] Use environment variables
- [ ] Test API with Postman
- [ ] All daily challenges complete

**Milestone:** You can build APIs! 🔧
