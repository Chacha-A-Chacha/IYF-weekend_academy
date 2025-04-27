
**Note**: this course material was written with version v22.3.0 of Node.js. Please make sure that your version of Node is at least as new as the version used in the material (you can check the version by running *node -v* in the command line).

In the exercises for this part, we will be building a *recipe collection application*, that allows users to save information about favorite recipes they want to keep track of. For each recipe we will save the dish name, chef, ingredients, preparation time, and rating from users of the application.

### Recipe Collection, step 1
Let's imagine a situation, where you receive an email that contains the following application body and instructions:

```js
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const recipeSchema = mongoose.Schema({
  name: String,
  chef: String,
  ingredients: String,
  prepTime: Number,
  rating: Number,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

const mongoUrl = 'mongodb://localhost/recipelist'
mongoose.connect(mongoUrl)

app.use(express.json())

app.get('/api/recipes', (request, response) => {
  Recipe.find({}).then((recipes) => {
    response.json(recipes)
  })
})

app.post('/api/recipes', (request, response) => {
  const recipe = new Recipe(request.body)

  recipe.save().then((result) => {
    response.status(201).json(result)
  })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

Turn the application into a functioning *npm* project. To keep your development productive, configure the application to be executed with *node --watch*. You can create a new database for your application with MongoDB Atlas, or use the same database from the previous part's exercises.

Verify that it is possible to add recipes to the list with Postman or the VS Code REST client and that the application returns the added recipes at the correct endpoint.

### Recipe Collection, step 2
Refactor the application into separate modules as shown earlier in this part of the course material.

**NB** refactor your application in baby steps and verify that it works after every change you make. If you try to take a "shortcut" by refactoring many things at once, then Murphy's law will kick in and it is almost certain that something will break in your application. The "shortcut" will end up taking more time than moving forward slowly and systematically.

One best practice is to commit your code every time it is in a stable state. This makes it easy to rollback to a situation where the application still works.

If you're having issues with *content.body* being *undefined* for seemingly no reason, make sure you didn't forget to add *app.use(express.json())* near the top of the file.


### Final Steps and Testing

Start the server with  `npm run dev`
Test the API with Postman or VS Code REST client:

GET request to http://localhost:3003/api/blogs
POST request to http://localhost:3003/api/blogs with a JSON body like:
```JSON
json{
  "title": "Test Blog",
  "author": "Test Author",
  "url": "http://testblog.com",
  "likes": 5
}

```

If you're using MongoDB Atlas instead of a local MongoDB, make sure to update the MONGODB_URI in your .env file with the correct connection string from Atlas.
