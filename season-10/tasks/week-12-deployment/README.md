# Week 12: Deployment & Final Project

## Overview
This is the final week! You'll deploy your full-stack CommunityHub application and present it. Everything you've learned comes together.

**Lessons:**
- Lesson 23: Full-Stack Integration & DevOps Basics
- Lesson 24: Deployment & Presentations

**Deliverable:** Deployed, working CommunityHub application

---

## Lesson 23 Tasks

### Task 23.1: Connect React to API 🟡
**Time:** 60 minutes

**Update React API Service:**
```javascript
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Helper for auth headers
const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

// Generic request function
const request = async (endpoint, options = {}) => {
    const url = `${API_URL}${endpoint}`;
    
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
            ...options.headers
        }
    };
    
    const response = await fetch(url, config);
    
    // Handle 401 (unauthorized)
    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        throw new Error('Session expired');
    }
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Request failed');
    }
    
    return data;
};

// Auth API
export const authAPI = {
    register: (userData) => request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData)
    }),
    
    login: (credentials) => request('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
    }),
    
    getMe: () => request('/auth/me')
};

// Posts API
export const postsAPI = {
    getAll: (params = {}) => {
        const query = new URLSearchParams(params).toString();
        return request(`/posts${query ? `?${query}` : ''}`);
    },
    
    getById: (id) => request(`/posts/${id}`),
    
    create: (postData) => request('/posts', {
        method: 'POST',
        body: JSON.stringify(postData)
    }),
    
    update: (id, postData) => request(`/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(postData)
    }),
    
    delete: (id) => request(`/posts/${id}`, {
        method: 'DELETE'
    }),
    
    like: (id) => request(`/posts/${id}/like`, {
        method: 'POST'
    })
};

// Comments API
export const commentsAPI = {
    getByPost: (postId) => request(`/posts/${postId}/comments`),
    
    create: (postId, commentData) => request(`/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify(commentData)
    }),
    
    delete: (postId, commentId) => request(`/posts/${postId}/comments/${commentId}`, {
        method: 'DELETE'
    })
};
```

---

### Task 23.2: Authentication Context 🟡
**Time:** 45 minutes

**Create Auth Context:**
```jsx
// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Check for existing session on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            authAPI.getMe()
                .then(setUser)
                .catch(() => localStorage.removeItem('token'))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);
    
    const login = async (credentials) => {
        const { token, user } = await authAPI.login(credentials);
        localStorage.setItem('token', token);
        setUser(user);
        return user;
    };
    
    const register = async (userData) => {
        const { token, user } = await authAPI.register(userData);
        localStorage.setItem('token', token);
        setUser(user);
        return user;
    };
    
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };
    
    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout
    };
    
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
```

**Protected Route Component:**
```jsx
// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();
    
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children;
}
```

---

### Task 23.3: Enable CORS 🟢
**Time:** 20 minutes

**Install CORS:**
```bash
npm install cors
```

**Configure CORS in Express:**
```javascript
// src/app.js
const cors = require('cors');

// CORS configuration
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'http://localhost:5173',  // Vite dev
            'http://localhost:3000',  // Local
            process.env.FRONTEND_URL  // Production
        ].filter(Boolean);
        
        // Allow requests with no origin (mobile apps, curl, etc.)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
```

---

### Task 23.4: Environment Variables 🟡
**Time:** 30 minutes

**Backend `.env.example`:**
```
# Server
NODE_ENV=development
PORT=3000

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# JWT
JWT_SECRET=your-secret-key-min-32-characters
JWT_EXPIRES_IN=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

**Frontend `.env.example`:**
```
VITE_API_URL=http://localhost:3000/api
```

**Load Environment Variables:**
```javascript
// config/index.js
module.exports = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
    frontendUrl: process.env.FRONTEND_URL
};
```

**Validate Required Variables:**
```javascript
// server.js
const requiredVars = ['MONGODB_URI', 'JWT_SECRET'];

for (const varName of requiredVars) {
    if (!process.env[varName]) {
        console.error(`Error: ${varName} environment variable is required`);
        process.exit(1);
    }
}
```

---

### Task 23.5: Production Build 🟡
**Time:** 30 minutes

**Build React for Production:**
```bash
# In frontend directory
npm run build
```

**Serve Static Files from Express (Optional):**
```javascript
// server.js (for single-server deployment)
const path = require('path');

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    
    // Handle React routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
}
```

**Update package.json Scripts:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "cd ../frontend && npm run build",
    "test": "jest"
  }
}
```

---

## Lesson 24 Tasks

### Task 24.1: Deploy Backend to Render 🟡
**Time:** 45 minutes

**Step 1: Prepare Repository**
```bash
# Make sure .gitignore includes
node_modules/
.env
dist/
```

**Step 2: Create Render Account**
1. Go to [render.com](https://render.com)
2. Sign up with GitHub

**Step 3: Create Web Service**
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name:** community-hub-api
   - **Branch:** main
   - **Root Directory:** backend (if monorepo)
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

**Step 4: Add Environment Variables**
Add in Render dashboard:
- `NODE_ENV=production`
- `MONGODB_URI=your-atlas-connection-string`
- `JWT_SECRET=your-production-secret`
- `FRONTEND_URL=https://your-frontend.vercel.app`

**Step 5: Deploy**
- Click "Create Web Service"
- Wait for deployment
- Test API: `https://your-app.onrender.com/api/health`

---

### Task 24.2: Deploy Frontend to Vercel 🟡
**Time:** 30 minutes

**Step 1: Create Vercel Account**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

**Step 2: Import Project**
1. Click "New Project"
2. Import your repository
3. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** frontend (if monorepo)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

**Step 3: Add Environment Variables**
```
VITE_API_URL=https://your-api.onrender.com/api
```

**Step 4: Deploy**
- Click "Deploy"
- Wait for build
- Test: `https://your-app.vercel.app`

---

### Task 24.3: Alternative - Full Deploy to Render 🟡
**Time:** 45 minutes

Deploy everything (frontend + backend) to Render.

**Step 1: Build Setup**
```json
// package.json (root)
{
  "scripts": {
    "build": "cd frontend && npm install && npm run build",
    "start": "cd backend && npm start"
  }
}
```

**Step 2: Serve Frontend from Backend**
```javascript
// backend/server.js
const path = require('path');

// Serve React app
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// API routes first
app.use('/api', require('./routes'));

// React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});
```

**Step 3: Configure Render**
- Build Command: `npm run build`
- Start Command: `npm start`

---

### Task 24.4: Health Check & Monitoring 🟢
**Time:** 20 minutes

**Add Health Check Endpoint:**
```javascript
// routes/health.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    const healthcheck = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    };
    
    res.json(healthcheck);
});

module.exports = router;

// app.js
app.use('/api/health', require('./routes/health'));
```

**Configure Render Health Check:**
- Health Check Path: `/api/health`

---

### Task 24.5: Final Polish 🔴
**Time:** 60 minutes

**Checklist before presenting:**

- [ ] All CRUD operations work
- [ ] Authentication works
- [ ] Protected routes require login
- [ ] Error messages are user-friendly
- [ ] Loading states are shown
- [ ] Responsive design works
- [ ] No console errors
- [ ] Environment variables configured
- [ ] Both frontend and backend deployed
- [ ] Custom domain (optional)

**README Update:**
```markdown
# CommunityHub

A full-stack community platform built with React, Express, and MongoDB.

## Live Demo
- Frontend: https://community-hub.vercel.app
- API: https://community-hub-api.onrender.com/api

## Features
- User registration and authentication
- Create, edit, delete posts
- Like and comment on posts
- Responsive design

## Tech Stack
- **Frontend:** React, Vite, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/community-hub.git
   cd community-hub
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables
   ```bash
   # backend/.env
   cp .env.example .env
   # Edit with your values
   ```

5. Run development servers
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev
   
   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

## API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (auth required)
- `PUT /api/posts/:id` - Update post (auth required)
- `DELETE /api/posts/:id` - Delete post (auth required)

## Author
Your Name - IYF Weekend Academy Season 10
```

---

## Presentation Guidelines

### What to Show (10-15 minutes)

1. **Introduction (2 min)**
   - What is CommunityHub?
   - Why did you build it?

2. **Live Demo (5 min)**
   - Show the deployed application
   - Register a new user
   - Create a post
   - Show list view, detail view
   - Like/comment
   - Show responsive design

3. **Code Highlights (5 min)**
   - Show one interesting React component
   - Show one API endpoint
   - Show the auth middleware
   - Show the database model

4. **Challenges & Learnings (3 min)**
   - What was difficult?
   - What did you learn?
   - What would you do differently?

### Presentation Tips

- Practice your demo beforehand
- Have backup screenshots in case of network issues
- Prepare for questions
- Be proud of what you built!

---

## Daily Challenges

### Day 1: Full-Stack Connection 🟡
Connect your React frontend to the Express API. Make sure:
- Posts load from the API
- Create post saves to database
- Error handling works

### Day 2: Auth Flow 🟡
Implement complete auth flow:
- Registration form
- Login form
- Protected routes
- Show/hide UI based on auth state

### Day 3: Deploy Backend 🟡
Deploy your Express API to Render. Test all endpoints with the deployed URL.

### Day 4: Deploy Frontend 🟡
Deploy React to Vercel. Connect to deployed API.

### Day 5: Polish & Present 🔴
Final testing, bug fixes, and prepare your presentation.

---

## Final Project Rubric

### Functionality (40 points)
- [ ] CRUD operations work (10)
- [ ] Authentication works (10)
- [ ] Data persists in database (10)
- [ ] Error handling is proper (10)

### Code Quality (30 points)
- [ ] Code is organized (10)
- [ ] Components are reusable (10)
- [ ] API follows REST conventions (10)

### UI/UX (20 points)
- [ ] Responsive design (10)
- [ ] Good user experience (10)

### Deployment (10 points)
- [ ] Application is deployed (5)
- [ ] README is complete (5)

---

## Week 12 Checklist

- [ ] Connect React to API
- [ ] Implement auth context
- [ ] Configure CORS
- [ ] Set up environment variables
- [ ] Create production build
- [ ] Deploy backend to Render
- [ ] Deploy frontend to Vercel
- [ ] Add health check endpoint
- [ ] Update README
- [ ] Prepare presentation
- [ ] Practice demo
- [ ] Present final project

**You did it! 🎉 You've built a full-stack web application!**

---

## What's Next?

Congratulations on completing the training! Here's how to continue learning:

### Immediate Next Steps
1. Keep improving CommunityHub
2. Add new features (search, user profiles, image uploads)
3. Build another project from scratch

### Learn More
- **TypeScript** - Add type safety
- **Testing** - Jest, React Testing Library
- **State Management** - Redux, Zustand
- **GraphQL** - Alternative to REST
- **Docker** - Containerization
- **CI/CD** - GitHub Actions

### Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [React Docs](https://react.dev/)
- [Node.js Docs](https://nodejs.org/docs/)
- [freeCodeCamp](https://www.freecodecamp.org/)
- [The Odin Project](https://www.theodinproject.com/)

### Stay Connected
- Join developer communities
- Contribute to open source
- Keep building projects
- Share your work

**You are now a Full-Stack Web Developer! Keep coding! 🚀**
