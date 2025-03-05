# Lesson 4: CSS Basics

## Lesson Objectives
By the end of this lesson, you will:
- Understand the fundamentals of CSS
- Apply styling to your HTML portfolio
- Learn CSS selectors and properties
- Create an visually appealing web page

## 1. CSS Basics: What is CSS?

### Understanding CSS
CSS (Cascading Style Sheets) is a styling language used to describe the presentation of a document written in HTML. It allows you to:
- Control layout
- Adjust colors
- Set fonts
- Create responsive designs
- Add visual effects

### Setting Up Your CSS

Create a new file named `styles.css` in the same directory as your `portfolio.html`. Then, link it in your HTML file's `<head>` section:

```html
<head>
    <meta charset="UTF-8">
    <title>My Personal Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

## 2. CSS Selectors

### Basic Selectors
Open your `styles.css` and start styling:

```css
/* Element Selector - Styles all elements of this type */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
}

/* Heading Selectors */
h1 {
    color: #333;
    text-align: center;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
}

h2 {
    color: #007bff;
}
```

### Class and ID Selectors
Add unique styling for specific elements:

```css
/* Class Selector */
.skill-list {
    background-color: #e9ecef;
    padding: 15px;
    border-radius: 5px;
}

/* ID Selector */
#projects {
    background-color: #ffffff;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
}
```

## 3. Interactive Styling Task

### Update Your HTML
Modify your `portfolio.html` to include classes and IDs:

```html
<h2>My Skills</h2>
<ul class="skill-list">
    <li>HTML</li>
    <li>CSS</li>
    <li>Problem Solving</li>
</ul>

<div id="projects">
    <h2>My Projects</h2>
    <ol>
        <li>
            <h3>First Web Page</h3>
            <p>My very first HTML project demonstrating basic web skills.</p>
        </li>
    </ol>
</div>
```

### Color and Typography Exploration
Experiment with these CSS properties:

```css
/* Text Styling */
p {
    color: #666;
    font-size: 16px;
}

/* Link Styling */
a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #0056b3;
    text-decoration: underline;
}
```

## 4. Advanced Styling Techniques

### Flexbox for Layout
Create a responsive skills layout:

```css
.skill-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.skill-list li {
    background-color: #007bff;
    color: white;
    margin: 5px;
    padding: 8px 15px;
    border-radius: 20px;
}
```

### Pseudo-classes and Interactions
Add hover and active states:

```css
#projects li {
    transition: transform 0.2s;
    padding: 10px;
    margin-bottom: 10px;
    border-left: 4px solid #007bff;
}

#projects li:hover {
    transform: translateX(10px);
    background-color: #f1f3f5;
}
```

## Tasks

### Task 1: Color Scheme
- Choose a color palette
- Apply consistent colors across your portfolio
- Use color to create visual hierarchy

### Task 2: Responsive Design
- Add a media query to adjust layout for mobile
- Ensure text is readable on smaller screens

```css
@media (max-width: 600px) {
    body {
        padding: 10px;
    }
    
    .skill-list {
        flex-direction: column;
        align-items: center;
    }
}
```

### Task 3: Creative Styling
- Add a background gradient
- Create a shadow effect on project cards
- Experiment with border-radius and box-shadow

## CSS Property Cheat Sheet
- `color`: Text color
- `background-color`: Background color
- `font-family`: Text font
- `font-size`: Text size
- `margin`: Outer spacing
- `padding`: Inner spacing
- `border`: Element border
- `text-align`: Text alignment
- `display`: Element display type

## Debugging Tips
- Use browser developer tools
- Inspect elements to see applied styles
- Check for syntax errors
- Validate your CSS

## Bonus Task, Just mention to the students, 
Create a dark mode version of your portfolio using CSS variables and a toggle button!