# Recipe Collection Application (solution to task4 )

This guide walks through implementing a Recipe Collection Application using Node.js, Express, and MongoDB.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Project Structure](#project-structure)
3. [Implementation Steps](#implementation-steps)
4. [Testing the Application](#testing-the-application)
5. [Expected Output](#expected-output)

## Project Setup

First, let's set up a new Node.js project:

```bash
# Create project directory
mkdir recipelist
cd recipelist

# Initialize npm project
npm init -y

# Install dependencies
npm install express mongoose cors dotenv
npm install --save-dev nodemon
```

## Project Structure

We'll organize our code using the following structure:

```
recipelist/
  ├── controllers/
  │   └── recipes.js
  ├── models/
  │   └── recipe.js
  ├── utils/
  │   ├── config.js
  │   ├── middleware.js
  │   └── logger.js
  ├── app.js
  ├── index.js
  ├── .env
  └── package.json
```

## Implementation Steps

### 1. Create Configuration Files

First, let's create the utility files:

**utils/config.js**:
```javascript
require('dotenv').config()

const PORT = process.env.PORT || 3003
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/recipelist'

module.exports = {
  MONGODB_URI,
  PORT
}
```

**utils/logger.js**:
```javascript
const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info, error
}
```

**utils/middleware.js**:
```javascript
const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}
```

### 2. Create Database Model

**models/recipe.js**:
```javascript
const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
  name: String,
  chef: String,
  ingredients: String,
  prepTime: Number,
  rating: Number
})

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)
```

### 3. Create Controller for Routes

**controllers/recipes.js**:
```javascript
const recipesRouter = require('express').Router()
const Recipe = require('../models/recipe')

recipesRouter.get('/', (request, response) => {
  Recipe.find({}).then(recipes => {
    response.json(recipes)
  })
})

recipesRouter.post('/', (request, response) => {
  const recipe = new Recipe(request.body)

  recipe.save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = recipesRouter
```

### 4. Create Express Application

**app.js**:
```javascript
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const recipesRouter = require('./controllers/recipes')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/recipes', recipesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
```

### 5. Create Server Entry Point

**index.js**:
```javascript
const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
```

### 6. Environment Variables

Create a `.env` file in the root directory:
```
PORT=3003
MONGODB_URI=mongodb://localhost/recipelist
```

If you're using MongoDB Atlas instead of a local MongoDB, replace the MONGODB_URI with your connection string.

### 7. Update package.json

Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## Testing the Application

1. Start the server:
```bash
npm run dev
```

2. Test the GET endpoint:
   - Use Postman or VS Code REST client to send a GET request to `http://localhost:3003/api/recipes`
   - Initially, it should return an empty array `[]`

3. Test the POST endpoint:
   - Send a POST request to `http://localhost:3003/api/recipes` with this JSON body:
   ```json
   {
     "name": "Pasta Carbonara",
     "chef": "Mario Batali",
     "ingredients": "Pasta, eggs, bacon, cheese",
     "prepTime": 30,
     "rating": 4.5
   }
   ```
   - You should receive a 201 Created response with the created recipe

4. Verify with GET:
   - Send another GET request to see the added recipe

## Expected Output

When you run the application, you should see output similar to this in your terminal:

```
> recipelist@1.0.0 dev
> node --watch index.js

connecting to mongodb://localhost/recipelist
connected to MongoDB
Server running on port 3003

Method: GET
Path:   /api/recipes
Body:   undefined
---

Method: POST
Path:   /api/recipes
Body:   { name: 'Pasta Carbonara', chef: 'Mario Batali', ingredients: 'Pasta, eggs, bacon, cheese', prepTime: 30, rating: 4.5 }
---
```

Congratulations! You've successfully built a modular Node.js application with Express and MongoDB. This structure follows best practices and makes your code more maintainable for future expansion.
