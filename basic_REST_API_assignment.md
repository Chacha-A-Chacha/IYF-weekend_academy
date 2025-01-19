# Basic Node.js REST API Assignment

## Overview
Build a simple REST API for user management. The base code includes a GET endpoint to retrieve a user by ID. Your task is to implement the remaining CRUD operations.

## Starting Code
```javascript
// index.js
const express = require('express')
const app = express()
app.use(express.json())

// In-memory data store
let users = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
]

// Get user by id (provided)
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.json(user)
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
```

## Assignment Tasks

1. Implement the following API endpoints:
   - GET `/api/users` - Retrieve all users
   - POST `/api/users` - Create a new user
   - PUT `/api/users/:id` - Update an existing user
   - DELETE `/api/users/:id` - Delete a user

2. For each endpoint, implement:
   - Proper request validation
   - Appropriate error handling
   - Correct HTTP status codes
   - JSON response format

3. Document your API using the provided README template

## Requirements

### Technical Requirements
- Use Express.js framework
- Use only in-memory storage (array of users)
- Follow RESTful API conventions
- Include error handling
- Use proper HTTP methods and status codes

### Documentation Requirements
- Update the README file with:
  - Setup instructions
  - API endpoints documentation
  - Request/Response examples
  - Error handling examples

## Evaluation Criteria
- Code functionality (40%)
- Code organization and clarity (20%)
- Error handling (20%)
- Documentation quality (20%)

## Files to Submit
1. `index.js` - Your API implementation
2. `README.md` - API documentation
3. `.gitignore` - Git ignore file
4. `LICENSE` - MIT license file
5. `package.json` - Project configuration

## README Template
```markdown
# User Management API

## Setup
1. Clone the repository
2. Run `npm install`
3. Start the server: `node index.js`
4. API will be available at `http://localhost:3000`

## API Endpoints

### Get User by ID
- **URL**: `/api/users/:id`
- **Method**: `GET`
- **URL Params**: `id=[integer]`
- **Success Response**: 
  - Code: 200
  - Content: `{ id: 1, name: "John", email: "john@example.com" }`
- **Error Response**:
  - Code: 404
  - Content: `{ message: "User not found" }`

[Document your implemented endpoints here following the same format...]

## Error Handling
[Document your error handling approach and error response formats]
```

## .gitignore Template
```
node_modules/
.env
.DS_Store
npm-debug.log
```

## License Template (MIT)
```
MIT License

Copyright (c) [2025] [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Getting Started
1. Initialize your project:
   ```bash
   mkdir user-api
   cd user-api
   npm init -y
   npm install express
   ```

2. Create the required files:
   - Copy the starting code into `index.js`
   - Create README.md using the template
   - Create .gitignore using the template
   - Create LICENSE using the template

3. Implement the required endpoints

4. Test your API using tools like Postman or curl

5. Document your implementation in the README

## Submission
submit a GitHub repository link.

Good luck!
