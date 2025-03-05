# Lesson 3: HTML Basics

## Lesson Objectives
By the end of this lesson, you will:
- Build your first interactive HTML webpage
- Understand and apply HTML tags
- Create structured content
- Develop practical web design skills

## 1. Personal Portfolio Page

### Setup Instructions
1. Open a text editor (Notepad, VS Code, or Sublime Text)
2. Create a new file named `portfolio.html`
3. Follow the step-by-step instructions below

### Step 1: Basic Page Structure
Type the following code to create the HTML document skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Personal Portfolio</title>
</head>
<body>
    <!-- Your content will go here -->
</body>
</html>
```

### Step 2: Add Main Heading and Introduction
Inside the `<body>` tag, add:

```html
<h1>Your Name's Portfolio</h1>
<p>Welcome to my personal portfolio! I'm a <strong>passionate learner</strong> exploring web development.</p>
```

### Step 3: Create Skills Section
Add an unordered list of your skills:

```html
<h2>My Skills</h2>
<ul>
    <li>HTML</li>
    <li>Problem Solving</li>
    <li>Creative Thinking</li>
</ul>
```

### Step 4: Add Projects Section
Create a section showcasing your projects:

```html
<h2>My Projects</h2>
<ol>
    <li>
        <h3>First Web Page</h3>
        <p>My very first HTML project demonstrating basic web skills.</p>
    </li>
    <li>
        <h3>Coming Soon Project</h3>
        <p>Details will be added as I learn more!</p>
    </li>
</ol>
```

### Step 5: Include Contact Information
Add contact details with a link:

```html
<h2>Contact Me</h2>
<p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
<p>Feel free to reach out and connect!</p>
```

## Tasks

### Task 1: Customize Your Page
- Change the heading text to your name
- Replace the skills with your actual skills
- Add a personal description
- Create real or imaginary projects

### Task 2: Add More HTML Elements
Experiment by adding:
- An image of yourself (use `<img>` tag)
- A blockquote about your favorite quote
- Different text formatting like `<em>` for emphasis

### Task 3: Attribute Exploration
Practice using HTML attributes:
- Add `alt` text to images
- Create links with `target="_blank"` to open in new tabs
- Use `id` and `class` attributes for future styling

## Quick Reference Guide

### Common HTML Tags
- `<h1>` to `<h6>`: Headings
- `<p>`: Paragraphs
- `<ul>`, `<ol>`, `<li>`: Lists
- `<strong>`: Bold text
- `<em>`: Italic text
- `<a>`: Links
- `<img>`: Images

### Attributes Cheat Sheet
- `href`: Link destination
- `src`: Image source
- `alt`: Alternative text
- `target`: Link opening behavior
- `id`: Unique identifier
- `class`: Style grouping

## Troubleshooting Tips
- Always close your tags
- Use lowercase for tag names
- Check for spelling errors
- Validate your HTML using online tools

## Bonus Task
Create a second page linked to your portfolio and practice internal linking between pages!