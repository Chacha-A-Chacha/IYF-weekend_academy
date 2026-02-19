# Week 4: JavaScript Fundamentals

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s10-week-04-{your-github-username}`

---

## Overview
This week you'll begin your JavaScript journey, learning the core concepts that power interactive websites. Focus on understanding how JavaScript thinks.

**Lessons:**
- Lesson 7: JavaScript Basics
- Lesson 8: Arrays, Objects & Data Manipulation

**Deliverable:** Interactive calculator + Student grade tracker

---

## Lesson 7 Tasks

### Task 7.1: JavaScript Setup & Variables 🟢
**Time:** 30 minutes

**Setup your JS environment:**

1. Create a new folder `week-04-js`
2. Create `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Practice</title>
</head>
<body>
    <h1>Check the console!</h1>
    <script src="main.js"></script>
</body>
</html>
```

3. Create `main.js` and practice variables:

```javascript
// Variable declarations
let name = "Your Name";
let age = 25;
const birthYear = 1999;

// typeof operator
console.log(typeof name);    // string
console.log(typeof age);     // number
console.log(typeof true);    // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned
```

**Exercise: Variable Practice**
Declare variables for:
- Your name (string)
- Your age (number)
- Whether you're a student (boolean)
- Your favorite colors (array - we'll learn more next lesson)
- Today's date (use `new Date()`)

Console.log each with a descriptive message.

---

### Task 7.2: Data Types & Operators 🟢
**Time:** 40 minutes

**Exercise 1: Number Operations**
```javascript
// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0
```

**Exercise 2: String Operations**
```javascript
let firstName = "John";
let lastName = "Doe";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("John"));
```

**Exercise 3: Comparison & Logical Operators**
```javascript
// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT
```

**Challenge:** Calculate and display:
1. Your age in days (approximately)
2. Your age in hours
3. The year you'll turn 100

---

### Task 7.3: Functions 🟡
**Time:** 45 minutes

**Exercise 1: Function Declarations**
```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
```

**Exercise 2: Build These Functions**

1. `calculateArea(width, height)` - returns area of rectangle
2. `celsiusToFahrenheit(celsius)` - converts temperature
3. `isEven(number)` - returns true if even, false if odd
4. `getInitials(fullName)` - returns initials (e.g., "John Doe" → "JD")
5. `reverseString(str)` - reverses a string

**Exercise 3: Default Parameters**
```javascript
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // Hello, Guest!
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!
```

**Build:** A function `calculateTip(bill, tipPercent = 15)` that returns the tip amount.

---

### Task 7.4: Control Flow 🟡
**Time:** 45 minutes

**Exercise 1: If/Else Statements**
```javascript
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
```

**Exercise 2: Switch Statements**
```javascript
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        // ... add remaining days
        default:
            return "Invalid day";
    }
}
```

**Exercise 3: Loops**
```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
```

**Build these programs:**
1. Print numbers 1-100
2. Print only even numbers 1-50
3. FizzBuzz (print "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both)
4. Print a triangle of stars

---

### Mini-Project: Calculator 🔴
**Time:** 60 minutes

Build an interactive calculator in the console.

**Requirements:**
1. Functions for add, subtract, multiply, divide
2. A main `calculate(num1, operator, num2)` function
3. Handle division by zero
4. Support these operators: +, -, *, /, % (modulus), ** (power)

**Starter Code:**
```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    // Your code
}

function multiply(a, b) {
    // Your code
}

function divide(a, b) {
    // Your code (handle zero!)
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        // Add remaining cases
        default:
            return "Invalid operator";
    }
}

// Test
console.log(calculate(10, "+", 5));  // 15
console.log(calculate(10, "-", 5));  // 5
console.log(calculate(10, "*", 5));  // 50
console.log(calculate(10, "/", 5));  // 2
console.log(calculate(10, "/", 0));  // Error message
```

---

## Lesson 8 Tasks

### Task 8.1: Arrays 🟢
**Time:** 40 minutes

**Exercise 1: Array Basics**
```javascript
// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log(fruits[0]);     // apple
console.log(fruits.length); // 3

// Modifying arrays
fruits.push("grape");        // Add to end
fruits.unshift("mango");     // Add to start
fruits.pop();                // Remove from end
fruits.shift();              // Remove from start
```

**Exercise 2: Array Methods**
```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach - do something with each element
numbers.forEach(num => console.log(num * 2));

// map - transform each element
const doubled = numbers.map(num => num * 2);

// filter - keep elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);

// find - get first element that passes test
const firstEven = numbers.find(num => num % 2 === 0);

// reduce - combine all elements
const sum = numbers.reduce((total, num) => total + num, 0);

// includes - check if element exists
console.log(numbers.includes(3)); // true
```

**Build:** Use array methods to:
1. Double all numbers in an array
2. Filter out negative numbers
3. Find the first number greater than 10
4. Calculate the product of all numbers

---

### Task 8.2: Objects 🟡
**Time:** 40 minutes

**Exercise 1: Object Basics**
```javascript
// Creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log(person.firstName);         // Dot notation
console.log(person["lastName"]);       // Bracket notation
console.log(person.address.city);      // Nested

// Modifying properties
person.age = 31;
person.email = "john@example.com";     // Add new property
delete person.isStudent;               // Remove property
```

**Exercise 2: Object Methods**
```javascript
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3));
```

**Exercise 3: Object Iteration**
```javascript
const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get keys
console.log(Object.keys(scores));   // ["math", "english", "science"]

// Get values
console.log(Object.values(scores)); // [95, 88, 92]

// Get entries
console.log(Object.entries(scores)); // [["math", 95], ["english", 88], ...]

// Loop through
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}
```

---

### Task 8.3: Array of Objects 🔴
**Time:** 45 minutes

**Exercise: Working with Real Data**
```javascript
const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// Your tasks - use array methods:

// 1. Get all student names
const names = students.map(/* your code */);

// 2. Get students with grade > 80
const highAchievers = students.filter(/* your code */);

// 3. Find the student named "Charlie"
const charlie = students.find(/* your code */);

// 4. Calculate average grade
const avgGrade = students.reduce(/* your code */);

// 5. Get CS majors only
const csMajors = students.filter(/* your code */);

// 6. Sort by grade (highest first)
const sortedByGrade = [...students].sort(/* your code */);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(/* your code */);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(/* your code */);
```

---

### Mini-Project: Student Grade Tracker 🔴
**Time:** 90 minutes

Build a student grade management system.

**Requirements:**

```javascript
const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        // grades is an object: { math: 85, english: 90, ... }
    },
    
    // Get a student by name
    getStudent(name) {
        // Return student object or null
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        // Return average of all their grades
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        // Return average grade for that subject across all students
    },
    
    // Get top performer
    getTopStudent() {
        // Return student with highest overall average
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        // Return array of students
    },
    
    // Get letter grade
    getLetterGrade(score) {
        // A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60
    },
    
    // Generate report card
    generateReportCard(name) {
        // Return formatted string with all grades and average
    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      // 91.67
console.log(gradeTracker.getSubjectAverage("math"));       // 75.67
console.log(gradeTracker.getTopStudent());                 // Alice
console.log(gradeTracker.getStrugglingStudents());         // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));
```

---

## Daily Challenges

### Day 1: FizzBuzz 🟢
Write a program that prints 1-100, but:
- For multiples of 3, print "Fizz"
- For multiples of 5, print "Buzz"
- For multiples of both, print "FizzBuzz"

### Day 2: Reverse a String 🟢
Write a function that reverses a string.
- Input: "hello" → Output: "olleh"
- Try multiple approaches (loop, built-in methods)

### Day 3: Find Largest Number 🟢
Write a function that finds the largest number in an array.
- Don't use Math.max() - use a loop!
- Then try with reduce()

### Day 4: Remove Duplicates 🟡
Write a function that removes duplicates from an array.
- Input: [1, 2, 2, 3, 4, 4, 5] → Output: [1, 2, 3, 4, 5]
- Try with Set, try with filter

### Day 5: Palindrome Checker 🟡
Write a function that checks if a string is a palindrome.
- "racecar" → true
- "hello" → false
- Ignore case and spaces: "A man a plan a canal Panama" → true

---

## Week 4 Checklist

- [ ] Understand variables (let, const)
- [ ] Know all data types
- [ ] Write functions (declaration, expression, arrow)
- [ ] Use control flow (if/else, switch, loops)
- [ ] Create and manipulate arrays
- [ ] Use array methods (map, filter, reduce, find)
- [ ] Create and work with objects
- [ ] Work with arrays of objects
- [ ] Calculator project complete
- [ ] Grade tracker project complete
- [ ] All daily challenges complete

**Milestone:** You can think in JavaScript! 🧠
