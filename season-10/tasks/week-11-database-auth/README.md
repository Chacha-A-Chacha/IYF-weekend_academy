# Week 11: Database Integration & Authentication

## Overview
This week you'll connect your API to a real database and implement user authentication. Your CommunityHub will have persistent data and user accounts.

**Lessons:**
- Lesson 21: MongoDB & Data Persistence
- Lesson 22: User Authentication with JWT

**Deliverable:** CommunityHub API with database and authentication

---

## Lesson 21 Tasks

### Task 21.1: MongoDB Setup 🟢
**Time:** 30 minutes

**Option 1: MongoDB Atlas (Cloud - Recommended)**
1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create free account
3. Create new cluster (free tier)
4. Add database user (username/password)
5. Whitelist your IP (or allow all: 0.0.0.0/0)
6. Get connection string

**Option 2: Local MongoDB**
```bash
# Mac
brew install mongodb-community
brew services start mongodb-community

# Windows
# Download from mongodb.com
```

**Install Mongoose:**
```bash
npm install mongoose
```

**Connect to MongoDB:**
```javascript
// src/config/database.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
```

**Update `.env`:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/community-hub?retryWrites=true&w=majority
```

**Update `server.js`:**
```javascript
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/database');

const PORT = process.env.PORT || 3000;

// Connect to database, then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
```

---

### Task 21.2: Mongoose Models 🟡
**Time:** 45 minutes

**Exercise 1: Create Post Model**
```javascript
// src/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters'],
        maxlength: [200, 'Title cannot exceed 200 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        minlength: [10, 'Content must be at least 10 characters']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    likes: {
        type: Number,
        default: 0
    },
    tags: [{
        type: String,
        trim: true
    }],
    published: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true  // Adds createdAt and updatedAt
});

// Add index for searching
postSchema.index({ title: 'text', content: 'text' });

// Instance method
postSchema.methods.like = function() {
    this.likes++;
    return this.save();
};

// Static method
postSchema.statics.findByAuthor = function(author) {
    return this.find({ author: new RegExp(author, 'i') });
};

module.exports = mongoose.model('Post', postSchema);
```

**Exercise 2: Create Comment Model**
```javascript
// src/models/Comment.js
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Comment content is required'],
        maxlength: [500, 'Comment cannot exceed 500 characters']
    },
    author: {
        type: String,
        required: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);
```

---

### Task 21.3: CRUD with Mongoose 🟡
**Time:** 60 minutes

**Update Posts Controller:**
```javascript
// src/controllers/postsController.js
const Post = require('../models/Post');

// Get all posts
const getAllPosts = async (req, res, next) => {
    try {
        const { author, search, sort, page = 1, limit = 10 } = req.query;
        
        // Build query
        let query = {};
        
        if (author) {
            query.author = new RegExp(author, 'i');
        }
        
        if (search) {
            query.$text = { $search: search };
        }
        
        // Build sort
        let sortOption = { createdAt: -1 };  // Default: newest first
        
        if (sort === 'oldest') {
            sortOption = { createdAt: 1 };
        } else if (sort === 'popular') {
            sortOption = { likes: -1 };
        }
        
        // Pagination
        const skip = (page - 1) * limit;
        
        const posts = await Post.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(parseInt(limit));
        
        const total = await Post.countDocuments(query);
        
        res.json({
            posts,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
        
    } catch (error) {
        next(error);
    }
};

// Get single post
const getPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json(post);
    } catch (error) {
        // Handle invalid ObjectId
        if (error.name === 'CastError') {
            return res.status(400).json({ error: 'Invalid post ID' });
        }
        next(error);
    }
};

// Create post
const createPost = async (req, res, next) => {
    try {
        const { title, content, author, tags } = req.body;
        
        const post = new Post({
            title,
            content,
            author,
            tags
        });
        
        await post.save();
        
        res.status(201).json(post);
    } catch (error) {
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ errors: messages });
        }
        next(error);
    }
};

// Update post
const updatePost = async (req, res, next) => {
    try {
        const { title, content, tags } = req.body;
        
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content, tags },
            { new: true, runValidators: true }
        );
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.json(post);
    } catch (error) {
        next(error);
    }
};

// Delete post
const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

// Like post
const likePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        await post.like();  // Using instance method
        
        res.json(post);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    likePost
};
```

---

### Task 21.4: Relationships 🔴
**Time:** 45 minutes

**Exercise: Posts with Comments**

```javascript
// Update Post model to reference comments
const postSchema = new mongoose.Schema({
    // ... other fields
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

// Or use virtual populate
postSchema.virtual('commentList', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'post'
});

// Enable virtuals in JSON
postSchema.set('toJSON', { virtuals: true });
```

**Comments Controller:**
```javascript
// src/controllers/commentsController.js
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Get comments for a post
const getComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({ post: req.params.postId })
            .sort({ createdAt: -1 });
        
        res.json(comments);
    } catch (error) {
        next(error);
    }
};

// Add comment to post
const createComment = async (req, res, next) => {
    try {
        const { content, author } = req.body;
        const postId = req.params.postId;
        
        // Check if post exists
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        const comment = new Comment({
            content,
            author,
            post: postId
        });
        
        await comment.save();
        
        res.status(201).json(comment);
    } catch (error) {
        next(error);
    }
};

// Delete comment
const deleteComment = async (req, res, next) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.commentId);
        
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = { getComments, createComment, deleteComment };
```

**Routes:**
```javascript
// src/routes/posts.js
router.get('/:postId/comments', commentsController.getComments);
router.post('/:postId/comments', commentsController.createComment);
router.delete('/:postId/comments/:commentId', commentsController.deleteComment);
```

---

## Lesson 22 Tasks

### Task 22.1: User Model 🟢
**Time:** 30 minutes

**Install dependencies:**
```bash
npm install bcryptjs jsonwebtoken
```

**Create User Model:**
```javascript
// src/models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false  // Don't return password by default
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    // Only hash if password is modified
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

---

### Task 22.2: Registration & Login 🟡
**Time:** 60 minutes

**Auth Controller:**
```javascript
// src/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
};

// Register new user
const register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        
        // Check if user exists
        const existingUser = await User.findOne({
            $or: [{ email }, { username }]
        });
        
        if (existingUser) {
            return res.status(400).json({
                error: 'User with this email or username already exists'
            });
        }
        
        // Create user
        const user = new User({
            username,
            email,
            password
        });
        
        await user.save();
        
        // Generate token
        const token = generateToken(user._id);
        
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
        
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({ errors: messages });
        }
        next(error);
    }
};

// Login user
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                error: 'Please provide email and password'
            });
        }
        
        // Find user and include password
        const user = await User.findOne({ email }).select('+password');
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Check password
        const isMatch = await user.comparePassword(password);
        
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Generate token
        const token = generateToken(user._id);
        
        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
        
    } catch (error) {
        next(error);
    }
};

// Get current user
const getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role
        });
        
    } catch (error) {
        next(error);
    }
};

module.exports = { register, login, getMe };
```

**Auth Routes:**
```javascript
// src/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', protect, authController.getMe);

module.exports = router;
```

**Update `.env`:**
```
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRES_IN=7d
```

---

### Task 22.3: Auth Middleware 🟡
**Time:** 45 minutes

**Protect Routes:**
```javascript
// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                error: 'Access denied. No token provided.'
            });
        }
        
        const token = authHeader.split(' ')[1];
        
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Get user from token
        const user = await User.findById(decoded.id);
        
        if (!user) {
            return res.status(401).json({
                error: 'User no longer exists'
            });
        }
        
        // Attach user to request
        req.user = user;
        next();
        
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Invalid token' });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        }
        next(error);
    }
};

// Optional auth (doesn't fail if no token)
const optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);
        }
        
        next();
    } catch (error) {
        // Continue without user
        next();
    }
};

// Restrict to roles
const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                error: 'You do not have permission to perform this action'
            });
        }
        next();
    };
};

module.exports = { protect, optionalAuth, restrictTo };
```

**Protect Post Routes:**
```javascript
// src/routes/posts.js
const { protect, optionalAuth, restrictTo } = require('../middleware/auth');

// Public routes
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);

// Protected routes
router.post('/', protect, postsController.createPost);
router.put('/:id', protect, postsController.updatePost);
router.delete('/:id', protect, postsController.deletePost);

// Admin only
router.delete('/:id/force', protect, restrictTo('admin'), postsController.forceDelete);
```

---

### Task 22.4: User-Post Relationship 🔴
**Time:** 45 minutes

**Update Post Model:**
```javascript
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // ... other fields
});
```

**Update Posts Controller:**
```javascript
// Create post (now linked to user)
const createPost = async (req, res, next) => {
    try {
        const { title, content, tags } = req.body;
        
        const post = new Post({
            title,
            content,
            author: req.user._id,  // From auth middleware
            tags
        });
        
        await post.save();
        
        // Populate author info
        await post.populate('author', 'username email');
        
        res.status(201).json(post);
    } catch (error) {
        next(error);
    }
};

// Only author can edit/delete
const updatePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        
        // Check ownership
        if (post.author.toString() !== req.user._id.toString()) {
            return res.status(403).json({ 
                error: 'You can only edit your own posts' 
            });
        }
        
        // Update
        const { title, content, tags } = req.body;
        post.title = title || post.title;
        post.content = content || post.content;
        post.tags = tags || post.tags;
        
        await post.save();
        
        res.json(post);
    } catch (error) {
        next(error);
    }
};

// Get posts with author info
const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()
            .populate('author', 'username')
            .sort({ createdAt: -1 });
        
        res.json(posts);
    } catch (error) {
        next(error);
    }
};
```

---

## Daily Challenges

### Day 1: Connect to MongoDB 🟢
Set up MongoDB Atlas and connect your Express app. Create a simple test route that writes and reads from the database.

### Day 2: User Registration 🟡
Implement user registration with:
- Email validation
- Password hashing
- Duplicate user check
- Return JWT token

### Day 3: Protected Routes 🟡
Create middleware that:
- Verifies JWT token
- Attaches user to request
- Returns 401 for invalid/missing token

### Day 4: User Profile 🟡
Create routes for:
- GET `/api/users/me` - Get current user
- PUT `/api/users/me` - Update profile
- GET `/api/users/:id/posts` - Get user's posts

### Day 5: Authorization 🔴
Implement:
- Users can only edit their own posts
- Admin users can edit any post
- Proper error messages for unauthorized actions

---

## Week 11 Checklist

- [ ] Set up MongoDB Atlas
- [ ] Connect Express to MongoDB
- [ ] Create Mongoose schemas
- [ ] Implement validation
- [ ] Perform CRUD operations
- [ ] Create relationships between models
- [ ] Create User model with password hashing
- [ ] Implement registration
- [ ] Implement login with JWT
- [ ] Create auth middleware
- [ ] Protect routes
- [ ] Link posts to users
- [ ] Implement authorization
- [ ] All daily challenges complete

**Milestone:** Your API has a real database and authentication! 🔐
