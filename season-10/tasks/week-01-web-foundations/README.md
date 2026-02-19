# Week 1: Web Foundations

## Overview
This week you'll build and deploy your first website. By the end of the week, you'll have a live personal portfolio page.

**Lessons:**
- Lesson 1: Web Development & Environment Setup
- Lesson 2: HTML Deep Dive & Accessibility

**Deliverable:** Deployed multi-page portfolio site on GitHub Pages

---

## Lesson 1 Tasks

### Task 1.1: Environment Setup 🟢
**Time:** 30 minutes

Complete the following setup checklist:

- [ ] Install VS Code from [code.visualstudio.com](https://code.visualstudio.com/)
- [ ] Install these VS Code extensions:
  - [ ] Live Server
  - [ ] Prettier - Code formatter
  - [ ] HTML CSS Support
  - [ ] Auto Rename Tag
- [ ] Install Google Chrome or Firefox (for DevTools)
- [ ] Create a GitHub account (if you don't have one)
- [ ] Install Git from [git-scm.com](https://git-scm.com/)
- [ ] Create a folder structure for the course:
  ```
  IYF-season10/
  ├── week-01/
  ├── week-02/
  └── ...
  ```

**Verification:** Take a screenshot of VS Code with extensions installed.

---

### Task 1.2: DevTools Exploration 🟢
**Time:** 20 minutes

Using browser DevTools, inspect these 3 websites and answer the questions:

**Website 1: https://example.com**
1. What HTML tags are used on the page?
2. What is the page title?
3. How many headings are there?

**Website 2: https://developer.mozilla.org**
1. Find the navigation menu - what tag is it wrapped in?
2. How is the search bar structured?
3. What happens when you hover over links (check the styles)?

**Website 3: Any website of your choice**
1. Identify 5 different HTML elements
2. Find a form element and list its inputs
3. Take a screenshot of the Elements panel

**Submission:** Create `devtools-exploration.md` with your answers.

---

### Task 1.3: Your First Webpage 🟢
**Time:** 30 minutes

Create a file called `index.html` with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - About Me</title>
</head>
<body>
    <!-- Your content here -->
</body>
</html>
```

Include these elements:
- [ ] A main heading (`<h1>`) with your name
- [ ] A paragraph introducing yourself
- [ ] An image (can be a placeholder from https://placeholder.co)
- [ ] A list of 3 hobbies or interests
- [ ] A link to your favorite website
- [ ] Your contact email (use `mailto:` link)

**Verification:** Preview using Live Server extension.

---

### Task 1.4: Deploy to GitHub Pages 🟡
**Time:** 30 minutes

1. Create a new repository on GitHub called `portfolio`
2. Push your `index.html` to the repository
3. Enable GitHub Pages (Settings → Pages → Source: main branch)
4. Wait 1-2 minutes for deployment
5. Access your live site at `https://yourusername.github.io/portfolio`

**Submission:** Share your live URL with the instructor.

---

## Lesson 2 Tasks

### Task 2.1: Semantic HTML Conversion 🟡
**Time:** 30 minutes

Convert this poorly structured HTML to semantic HTML:

```html
<!-- BAD: Non-semantic version -->
<div class="header">
    <div class="logo">My Site</div>
    <div class="nav">
        <div class="nav-item">Home</div>
        <div class="nav-item">About</div>
        <div class="nav-item">Contact</div>
    </div>
</div>
<div class="main">
    <div class="article">
        <div class="title">Welcome to My Site</div>
        <div class="text">This is my first paragraph...</div>
        <div class="text">This is my second paragraph...</div>
    </div>
    <div class="sidebar">
        <div class="widget">Recent Posts</div>
    </div>
</div>
<div class="footer">
    <div class="copyright">© 2026</div>
</div>
```

Create `semantic-conversion.html` with the proper semantic tags:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<p>`, `<ul>`, `<li>`

**Reference:** [MDN: HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

---

### Task 2.2: Build a Contact Form 🟡
**Time:** 40 minutes

Create `contact.html` with a fully functional contact form:

**Required fields:**
- [ ] Full Name (text input, required)
- [ ] Email (email input, required, with validation)
- [ ] Phone (tel input, optional)
- [ ] Subject (dropdown select with 3 options)
- [ ] Message (textarea, required, min 50 characters)
- [ ] Newsletter subscription (checkbox)
- [ ] Submit button

**Requirements:**
- Use proper `<label>` elements linked to inputs
- Add `placeholder` text to inputs
- Use `fieldset` and `legend` to group related fields
- Include `required` attribute where needed

**Reference:** [MDN: Web Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)

---

### Task 2.3: Accessibility Audit 🟡
**Time:** 30 minutes

Audit your `index.html` page for accessibility:

1. **Images:** Add `alt` text to all images
2. **Headings:** Ensure proper heading hierarchy (h1 → h2 → h3)
3. **Links:** Make sure link text is descriptive (not "click here")
4. **Language:** Add `lang` attribute to `<html>` tag
5. **Form labels:** Ensure all inputs have associated labels

**Tools to use:**
- Chrome DevTools Lighthouse (Accessibility audit)
- [WAVE Web Accessibility Tool](https://wave.webaim.org/)

**Submission:** Create `accessibility-report.md` documenting:
- Issues found
- How you fixed them
- Final Lighthouse accessibility score

---

### Task 2.4: Multi-Page Portfolio Structure 🔴
**Time:** 60 minutes

Expand your portfolio to multiple pages:

```
portfolio/
├── index.html       (Home page)
├── about.html       (About me page)
├── projects.html    (Projects showcase)
├── contact.html     (Contact form)
└── images/          (Image folder)
```

**Requirements for each page:**

**index.html (Home)**
- Hero section with your name and tagline
- Brief introduction
- Links to other pages

**about.html**
- Your background/story
- Skills list
- Education/experience timeline

**projects.html**
- At least 3 project placeholders
- Each with title, description, and image

**contact.html**
- Contact form from Task 2.2
- Social media links
- Location/timezone info

**Navigation:**
- Consistent navigation menu on all pages
- Current page should be highlighted

---

## Daily Challenges

### Day 1: Five Tags Challenge 🟢
Create a webpage using at least 5 different HTML tags you haven't used before.
Explore: `<abbr>`, `<blockquote>`, `<cite>`, `<code>`, `<mark>`, `<time>`, `<details>`, `<summary>`

### Day 2: Navigation Menu 🟢
Build a navigation menu with:
- Logo/site name on the left
- 4 navigation links on the right
- Use semantic `<nav>` element

### Day 3: Contact Section 🟢
Create a contact section with:
- Address using `<address>` tag
- Email link using `mailto:`
- Phone link using `tel:`
- Social media links (icons optional)

### Day 4: Photo Gallery Structure 🟢
Build an image gallery with:
- 6 images in a grid structure
- Each image wrapped in `<figure>` with `<figcaption>`
- Use placeholder images

### Day 5: Blog Post Layout 🟡
Create a blog post page with:
- Article title and metadata (date, author)
- Featured image
- Multiple paragraphs with subheadings
- A "related posts" section

---

## Week 1 Checklist

Before moving to Week 2, ensure you have:

- [ ] Development environment fully set up
- [ ] GitHub account created
- [ ] First webpage deployed to GitHub Pages
- [ ] Multi-page portfolio structure complete
- [ ] All pages using semantic HTML
- [ ] Contact form functional
- [ ] Accessibility audit passed
- [ ] All 5 daily challenges completed

**Milestone:** Your portfolio URL is live and shareable! 🎉
