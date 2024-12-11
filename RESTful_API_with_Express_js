# Lesson 14: Building a RESTful API with Express.js

## Lesson Objectives
By the end of this lesson, students will:
- Understand REST principles
- Create a basic Express.js server
- Implement CRUD operations using RESTful routes
- Learn how to structure a simple API

## 1. Understanding REST Principles

### What is REST?
REST (Representational State Transfer) is an architectural style for designing networked applications. Key principles include:

1. **Client-Server Separation**: Clear distinction between client and server
2. **Stateless Communication**: Each request contains all necessary information
3. **Cacheable Responses**: Responses can be cached to improve performance
4. **Uniform Interface**: Consistent way of interacting with resources

### REST HTTP Methods
- **GET**: Retrieve a resource
- **POST**: Create a new resource
- **PUT**: Update an entire resource
- **PATCH**: Partially update a resource
- **DELETE**: Remove a resource

## 2. Setting Up the Project

### Prerequisites
- Node.js installed
- Basic JavaScript knowledge

### Project Setup
```bash
# Create a new directory
mkdir express-todo-api
cd express-todo-api

# Initialize a new Node.js project
npm init -y

# Install Express.js
npm install express body-parser
```

## 3. Creating a Simple Todo API

### Step 1: Basic Server Setup
Create a file named `server.js`:

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory todo storage (simulating a database)
let todos = [
  { id: 1, title: 'Learn Express.js', completed: false },
  { id: 2, title: 'Build a REST API', completed: false }
];

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 2: Implementing REST Routes

#### GET - Retrieve All Todos
```javascript
// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// GET a specific todo by ID
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  
  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  res.json(todo);
});
```

#### POST - Create a New Todo
```javascript
// POST a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});
```

#### PUT - Update an Entire Todo
```javascript
// PUT (update) a specific todo
app.put('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  todos[index] = {
    id: parseInt(req.params.id),
    title: req.body.title,
    completed: req.body.completed
  };
  
  res.json(todos[index]);
});
```

#### DELETE - Remove a Todo
```javascript
// DELETE a specific todo
app.delete('/todos/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ message: 'Todo not found' });
  }
  
  todos.splice(index, 1);
  res.status(204).send(); // No content response
});
```

## 4. Testing the API

### Using Postman or curl
- **GET all todos**: `GET http://localhost:3000/todos`
- **GET specific todo**: `GET http://localhost:3000/todos/1`
- **CREATE todo**: `POST http://localhost:3000/todos` 
  - Body: `{ "title": "New Todo" }`
- **UPDATE todo**: `PUT http://localhost:3000/todos/1`
  - Body: `{ "title": "Updated Todo", "completed": true }`
- **DELETE todo**: `DELETE http://localhost:3000/todos/1`

## Best Practices
1. Use meaningful HTTP status codes
2. Keep routes and logic simple
3. Add input validation
4. Use middleware for common tasks
5. Consider using a database for persistent storage

## Additional Resources
- [Express.js Official Documentation](https://expressjs.com/)
- [REST API Design Best Practices](https://www.restapitutorial.com/)
- [MDN Web Docs: HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

## Homework Challenge
Extend the Todo API by adding:
- Input validation for todo creation
- A PATCH route for partial updates
- Error handling middleware

## Common Pitfalls to Avoid
- Not handling errors properly
- Forgetting to parse request bodies
- Inconsistent use of HTTP methods
- Lack of input validation

## Conclusion
You've now created a basic RESTful API using Express.js! Remember that this is a simple example, and real-world APIs would include more robust error handling, authentication, and database integration.
