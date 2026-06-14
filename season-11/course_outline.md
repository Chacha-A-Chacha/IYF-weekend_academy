# Season 11: Practical Web Development Training
## **Goal: Build Job-Ready Developers Through Real Projects**

**Target Audience:** Complete beginners
**Duration:** 12 weeks (24 lessons)
**Format:** 2 lessons/week + daily coding challenges
**Outcome:** Portfolio with 1 flagship project + 6 foundation projects, consistent GitHub activity, deployed full-stack application

---

## **Core Philosophy: Learn by Building**

> *"The best way to learn web development is to build websites."*

This course is **foundations-first**. In Weeks 1–7 you build a series of small, self-contained **foundation projects** — each one teaches a skill you will reuse later. From Week 8 onward you assemble those skills into a single **flagship project, CommunityHub**. Every foundation project maps to a part of CommunityHub — see the *→ Feeds CommunityHub* notes throughout.

---

## **Before You Start (Week 0 Checklist)**

Have these ready **before** the first lesson so setup doesn't eat live time:

- [ ] A **GitHub account** (username you're happy to show employers)
- [ ] **Git** installed ([git-scm.com](https://git-scm.com/))
- [ ] **VS Code** installed ([code.visualstudio.com](https://code.visualstudio.com/))
- [ ] **Node.js LTS** (v20+) installed ([nodejs.org](https://nodejs.org/)) — used from Week 8
- [ ] A modern browser (Chrome or Firefox) for DevTools
- [ ] Hardware: any laptop that runs VS Code + a browser (4 GB RAM minimum, 8 GB comfortable)

**Free accounts you'll create during the course** (no cost, but sign up the week before each is needed):
- Week 6 — [OpenWeatherMap](https://openweathermap.org/api) API key (free tier; allow time for key activation)
- Week 11 — [MongoDB Atlas](https://www.mongodb.com/atlas) free cluster
- Week 12 — [Render](https://render.com/) or [Railway](https://railway.app/) (backend) + [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) (frontend)

---

## **The Flagship Project: "CommunityHub"**
*A full-stack community platform, assembled from your foundation skills in Weeks 8–12*

**MVP (required) — what every student must ship:**
- User registration & login (authentication)
- User profiles
- Create and read **posts**
- **Comments** on posts
- Responsive design

**Stretch goals (optional, clearly marked — only after the MVP works):**
- Search and filtering
- Likes / reactions
- Image uploads
- Real-time updates (WebSockets)

**Why one flagship project?**
- Mimics real job experience
- Shows problem-solving progression to employers
- Forces students to maintain and refactor code
- Creates a portfolio centerpiece

> **Scope discipline:** A finished, deployed MVP beats an unfinished ambitious app. Stretch goals are bonus, never a requirement.

**How it's built — a team project with an individual showcase:** CommunityHub is built by a **team of 2–3** using a real GitHub workflow (feature branch → pull request → teammate review → merge). Each member **owns at least one MVP feature**, and contributions are verified per-author on GitHub. In parallel, every student keeps their **own portfolio repo** as a personal showcase and documents their CommunityHub contributions there — so you finish with *both* an individual portfolio *and* genuine team experience (exactly how real developers present their work). See the **Collaboration Model** below.

---

## **How You're Assessed**

Read **[tasks/SUBMISSION_GUIDELINES.md](tasks/SUBMISSION_GUIDELINES.md)** before submitting anything. In short, each week you are assessed on:

- **Mini-project deliverable** — does it meet the week's requirements and run?
- **Daily challenges** — completed and committed
- **Git workflow** — meaningful commit history, correct repo naming (`iyf-s11-week-{NN}-{username}`)
- **Code quality & documentation** — clean code + a real README

Weekly tasks live in **[tasks/](tasks/)**; worked examples live in **[examples/](examples/)**. Each phase ends in a **graded gate** (below) you must demonstrate before moving on.

---

## **Collaboration Model**

Real teams build on GitHub, so collaboration is practiced **deliberately** and **ramps up** — from solo work, to reviewing each other's code, to full team development. Three modes:

| Mode | What you do | Where |
|------|-------------|-------|
| **Solo** | Your own repo, your own work | Weeks 1–2, 4–6, **all daily challenges** |
| **Peer review** | Individual repos, but you review each other's pull requests | Week 7 |
| **Team build** | One shared repo; feature branch + PR + review per person | Weeks 8–12 (CommunityHub) |

**Collaboration milestones:**
- **Week 3 — Pair Collaboration Lab:** two students share one repo; each opens a feature branch + PR, reviews the other's PR, and resolves a deliberately-engineered merge conflict.
- **Week 7 — Peer Code Review:** pair up and open a substantive review PR on each other's project; the author addresses feedback in follow-up commits.
- **Week 8 — Team Setup:** form teams of 2–3, create the team repo, enable branch protection, write `CONTRIBUTORS.md`, and open an issue per MVP feature.
- **Weeks 8–12 — Feature Ownership:** every member owns ≥1 MVP feature end-to-end via branch → PR → teammate review → merge.

> **All team contributions must be verifiable on GitHub** (PR authorship, reviews, issues, commit attribution). See [tasks/SUBMISSION_GUIDELINES.md](tasks/SUBMISSION_GUIDELINES.md) for the workflow and how instructors verify. **Daily challenges and skill-building projects stay solo.**

---

## **PHASE 1: Web Foundations (Weeks 1-3)**
*Build and deploy your first website — and learn the workflow you'll use all course*

### **Week 1: Your First Website**

#### **Lesson 1: Web, Environment Setup & Just-Enough Git**
**By the end you can:**
- Explain the request/response cycle in one sentence
- Set up a professional dev environment (VS Code + extensions)
- Create, edit, and preview an HTML file
- **Clone, commit, push, and deploy to GitHub Pages** using a minimal Git workflow

**Hands-On Activities:**
1. Browser DevTools exploration (inspect 3 live websites)
2. VS Code setup with essential extensions
3. Create, edit, and preview HTML files
4. Minimal Git: `clone → add → commit → push`
5. **Deploy to GitHub Pages** before lesson ends

**Resources:**
- [MDN: How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [MDN: Installing Basic Software](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software)
- [VS Code Docs: Getting Started](https://code.visualstudio.com/docs)
- [GitHub: Hello World (15-min Git intro)](https://docs.github.com/en/get-started/start-your-journey/hello-world)

**Mini-Project:** Personal "About Me" page (deployed)
**→ Feeds CommunityHub:** this page becomes the starting point for your CommunityHub **profile page**.

**Daily Challenges (Week 1):**
- Day 1: Create a webpage with 5 different HTML tags
- Day 2: Build a simple navigation menu
- Day 3: Create a contact section with semantic HTML
- Day 4: Build a photo gallery structure
- Day 5: Create a simple blog post layout

---

#### **Lesson 2: HTML Deep Dive & Accessibility**
**By the end you can:**
- Structure a page with semantic HTML
- Build a working form
- Validate HTML and fix accessibility issues

**Hands-On Activities:**
1. Convert a poorly structured page to semantic HTML
2. Build a complete contact form
3. Test pages with screen readers
4. Validate HTML using W3C validator

**Resources:**
- [MDN: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN: Web Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN: Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [WebAIM: Accessibility Checklist](https://webaim.org/standards/wcag/checklist)

**Mini-Project:** Multi-page portfolio site structure (Home, About, Contact, Projects)
**→ Feeds CommunityHub:** semantic structure + accessible forms are exactly what your CommunityHub pages and auth forms need.

> **📝 Technical Article:** turn your accessibility audit into a short public post — **"Semantic HTML & Accessibility: what I learned and fixed"** — on Dev.to, LinkedIn, or Medium. Explain why semantic markup matters, show a before/after, and link your deployed portfolio. *Due end of Week 2.*

---

### **Week 2: CSS Mastery**

#### **Lesson 3: CSS Fundamentals & Box Model**
**By the end you can:**
- Apply the cascade, specificity, and inheritance deliberately
- Use the box model to debug any layout
- Build a reusable typography and color system

**Hands-On Activities:**
1. Style the portfolio site from Week 1
2. Box model debugging exercises
3. Create a typography system
4. Build a color scheme

**Resources:**
- [MDN: CSS First Steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [MDN: CSS Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks)
- [Type Scale Calculator](https://typescale.com/)
- [Coolors: Color Palette Generator](https://coolors.co/)

**Daily Challenges (Week 2):**
- Day 1: Style a button with hover states
- Day 2: Create a card component
- Day 3: Build a hero section
- Day 4: Style a form beautifully
- Day 5: Create a footer with multiple columns

---

#### **Lesson 4: Flexbox, Grid & Responsive Design**
**By the end you can:**
- Build 1D layouts with Flexbox and 2D layouts with Grid
- Make a design responsive, mobile-first
- Test a layout across viewports

**Hands-On Activities:**
1. Rebuild portfolio layout using Flexbox
2. Create a grid-based gallery
3. Implement responsive navigation
4. Test on multiple devices/viewports

**Resources:**
- [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
- [CSS-Tricks: Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks: Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

**Interactive Practice:**
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)
- [Flexbox Defense](http://www.flexboxdefense.com/)

**Mini-Project:** Fully responsive portfolio site (deployed update)
**→ Feeds CommunityHub:** the responsive layout system you build here is reused for the CommunityHub UI.

---

### **Week 3: Tools & Workflow (Command Line & Git Mastery)**

#### **Lesson 5: Command Line Essentials**
**By the end you can:**
- Navigate and manage files entirely from the terminal
- Understand paths, permissions, and environment
- Write a simple shell script

**Hands-On Activities:**
1. Navigate project structure via terminal only
2. Create, copy, move, delete files
3. Use command history and shortcuts
4. Write simple shell scripts

**Resources:**
- [MDN: Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
- [The Odin Project: Command Line Basics](https://www.theodinproject.com/lessons/foundations-command-line-basics)
- [Terminus (Terminal Game)](https://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)

**Daily Challenges (Week 3):**
- Day 1: Create a folder structure using only terminal
- Day 2: Find all `.html` files in a directory
- Day 3: Write a script that creates a project boilerplate
- Day 4: Practice `grep` to search file contents
- Day 5: Create aliases for common commands

---

#### **Lesson 6: Git & GitHub Mastery**
**By the end you can:**
- Run the full daily Git workflow confidently
- Create, merge, and rebase branches
- Resolve a merge conflict and write meaningful commits

**Hands-On Activities:**
1. Branch-per-feature workflow on your portfolio
2. Practice add, commit, push, pull
3. Create and merge branches
4. Deliberately cause and resolve a merge conflict
5. Write meaningful commit messages

**Resources:**
- [MDN: Git and GitHub](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub)
- [GitHub Skills](https://skills.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Oh Shit, Git!?!](https://ohshitgit.com/)

**Mini-Project:** Portfolio site with full Git history + README
**→ Feeds CommunityHub:** this branch-per-feature workflow is exactly how you'll build CommunityHub.

> **👥 Collaborative Task — Pair Collaboration Lab:** with a partner, share one repo. Each of you opens a feature branch + pull request, **reviews and approves the other's PR**, and together resolve a deliberately-engineered merge conflict. *Deliverable:* a repo with 2 merged PRs and 1 documented conflict resolution, both partners showing as verified contributors.

> **🚦 GRADED GATE — Foundation Complete:** a deployed portfolio site, under Git version control, with a real README and clean commit history. Assessed per the submission guidelines.

---

## **PHASE 2: JavaScript Mastery (Weeks 4-7)**
*Deep fundamentals before frameworks*

### **Week 4: JavaScript Fundamentals**

#### **Lesson 7: JavaScript Basics**
**By the end you can:**
- Declare variables and use core data types correctly
- Write functions and control flow
- Debug with the console and DevTools

**Hands-On Activities:**
1. Variables and data type exercises
2. Build a tip calculator
3. Create a number guessing game
4. Debug intentionally broken code

**Resources:**
- [MDN: JavaScript First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
- [MDN: JavaScript Building Blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks)
- [JavaScript.info: The Fundamentals](https://javascript.info/first-steps)

**Daily Challenges (Week 4):**
- Day 1: FizzBuzz
- Day 2: Reverse a string
- Day 3: Find the largest number in an array
- Day 4: Remove duplicates from an array
- Day 5: Palindrome checker

---

#### **Lesson 8: Arrays, Objects & Data Manipulation**
**By the end you can:**
- Transform data with map, filter, reduce, and find
- Create and manipulate objects
- Parse and transform JSON

**Hands-On Activities:**
1. Array method challenges (map, filter, reduce, find)
2. Object manipulation exercises
3. Build a data filtering system
4. Parse and transform JSON data

**Resources:**
- [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [JavaScript.info: Data Types](https://javascript.info/data-types)

**Mini-Project:** Student grade tracker (filter, sort, calculate averages)
**→ Feeds CommunityHub:** these data-transformation patterns power CommunityHub feeds (sorting/filtering posts).

---

### **Week 5: DOM Manipulation**

#### **Lesson 9: Understanding the DOM**
**By the end you can:**
- Select and traverse DOM elements multiple ways
- Modify content, attributes, and styles dynamically
- Add and remove elements

**Hands-On Activities:**
1. Select elements 10 different ways
2. Modify existing page content dynamically
3. Add/remove elements
4. Change styles programmatically

**Resources:**
- [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN: Manipulating Documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [JavaScript.info: Document](https://javascript.info/document)

**Daily Challenges (Week 5):**
- Day 1: Change all headings to a random color
- Day 2: Create an element and add it to the page
- Day 3: Remove all images from a page
- Day 4: Copy content from one element to another
- Day 5: Build a simple dark mode toggle

---

#### **Lesson 10: Events & User Interaction**
**By the end you can:**
- Handle clicks, inputs, and keyboard events
- Use event bubbling and delegation
- Build client-side form validation

**Hands-On Activities:**
1. Build a click counter
2. Create keyboard shortcuts
3. Implement event delegation
4. Build form validation

**Resources:**
- [MDN: Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN: Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info: Events](https://javascript.info/events)

**Mini-Project:** Interactive to-do list (add, complete, delete tasks)
**→ Feeds CommunityHub:** the create/read/delete UI pattern here is the same one behind CommunityHub **posts**.

---

### **Week 6: Asynchronous JavaScript**

#### **Lesson 11: Callbacks, Promises & Async/Await**
**By the end you can:**
- Explain synchronous vs asynchronous execution
- Write and chain Promises
- Refactor to async/await with proper error handling

**Hands-On Activities:**
1. Convert callbacks to Promises
2. Chain Promises correctly
3. Refactor to async/await
4. Handle errors properly

**Resources:**
- [MDN: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
- [MDN: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [JavaScript.info: Promises, async/await](https://javascript.info/async)

**Daily Challenges (Week 6):**
- Day 1: Create a Promise that resolves after 2 seconds
- Day 2: Chain 3 Promises together
- Day 3: Handle errors in a Promise chain
- Day 4: Rewrite a callback function using async/await
- Day 5: Use Promise.all to fetch multiple items

---

#### **Lesson 12: Working with APIs**
**By the end you can:**
- Explain REST API basics
- Fetch external data and render it in the DOM
- Handle loading and error states

> **Account needed:** create your free [OpenWeatherMap](https://openweathermap.org/api) API key **before** this lesson — new keys can take time to activate.

**Hands-On Activities:**
1. Fetch data from a public API
2. Display data in the DOM
3. Handle loading and error states
4. Build search/filter functionality

**Resources:**
- [MDN: Fetching Data](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Public APIs List](https://github.com/public-apis/public-apis)

**Mini-Project:** Weather dashboard using OpenWeatherMap API
**→ Feeds CommunityHub:** the fetch + loading/error pattern here is exactly how the CommunityHub frontend loads data.

> **🚦 GRADED GATE — JavaScript Proficient:** a deployed weather app with live API integration, loading/error states, and clean async code.

---

### **Week 7: JavaScript Best Practices, State & Testing**

#### **Lesson 13: Local Storage & State Management**
**By the end you can:**
- Persist data with Local Storage
- Manage simple application state
- Structure a larger vanilla-JS app

**Hands-On Activities:**
1. Save and retrieve data from Local Storage
2. Build a persistent to-do list
3. Create a shopping cart
4. Implement undo/redo functionality

**Resources:**
- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [JavaScript.info: LocalStorage](https://javascript.info/localstorage)

---

#### **Lesson 14: Code Quality & Your First Tests**
**By the end you can:**
- Refactor messy code into clean, named functions
- Set up ESLint and Prettier
- **Write and run unit tests with Vitest**

> You'll write real unit tests here, and you're expected to add a few to your flagship project.

**Hands-On Activities:**
1. Refactor spaghetti code
2. Set up ESLint and Prettier
3. **Write your first Vitest unit tests for pure functions**
4. **👥 Peer Code Review (collaborative):** open a review PR on a partner's project with substantive comments; the author responds with follow-up commits

**Resources:**
- [MDN: JavaScript Guidelines](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [ESLint: Getting Started](https://eslint.org/docs/latest/use/getting-started)
- [Vitest: Getting Started](https://vitest.dev/guide/)

**Mini-Project:** Refactor a previous project with best practices **+ add unit tests**
**→ Feeds CommunityHub:** this is the code-quality and testing bar your flagship will be held to.

**Daily Challenges (Week 7):**
- Day 1: Theme toggle that persists light/dark mode in Local Storage
- Day 2: Search input that saves and replays the last 5 searches
- Day 3: Form that auto-saves every 5s and recovers on refresh
- Day 4: Refactor your messiest code (error handling, naming, extract functions)
- Day 5: Code-review your weather dashboard and list improvements

---

## **PHASE 3: React & Modern Frontend (Weeks 8-9)**
*Framework skills built on a solid vanilla-JS foundation — flagship build begins here*

### **Week 8: React Fundamentals**

#### **Lesson 15: Introduction to React**
**By the end you can:**
- Explain component-based architecture
- Build functional components
- Pass data with props

**Hands-On Activities:**
1. Set up React project with Vite
2. Create first components
3. Break down a UI into components
4. Pass props between components

**Resources:**
- [React: Quick Start](https://react.dev/learn)
- [React: Thinking in React](https://react.dev/learn/thinking-in-react)
- [Vite: Getting Started](https://vitejs.dev/guide/)

**Daily Challenges (Week 8):**
- Day 1: Create a greeting component
- Day 2: Build a card component with props
- Day 3: Create a list component
- Day 4: Build a reusable button component
- Day 5: Create a layout component

---

#### **Lesson 16: State & Events in React**
**By the end you can:**
- Manage state with useState
- Handle events in React
- Lift state up between components

**Hands-On Activities:**
1. Build a counter component
2. Create controlled form inputs
3. Implement parent-child communication
4. Build interactive lists

**Resources:**
- [React: Managing State](https://react.dev/learn/managing-state)
- [React: Responding to Events](https://react.dev/learn/responding-to-events)
- [React: useState Reference](https://react.dev/reference/react/useState)

**Mini-Project:** 🏁 **CommunityHub frontend — start here** (convert your portfolio/profile into React components)
**→ This IS the flagship:** every component you built in Weeks 1–8 now becomes part of CommunityHub.

> **👥 Collaborative Task — Team Setup:** form your team of 2–3, create the team repo (`iyf-s11-week-08-team-{lead}`), enable branch protection on `main`, add `CONTRIBUTORS.md`, and open a GitHub issue for each MVP feature (profiles, posts, comments, auth). From here through Week 12, **every member owns ≥1 feature** via branch → PR → teammate review → merge.

---

### **Week 9: React Deep Dive**

#### **Lesson 17: Effects, Data Fetching & Routing**
**By the end you can:**
- Use useEffect for side effects (and know when not to)
- Fetch and render API data with loading/error states
- Implement client-side routing

**Hands-On Activities:**
1. Fetch and display API data
2. Handle loading and error states
3. Set up React Router
4. Create navigation between pages

**Resources:**
- [React: useEffect](https://react.dev/reference/react/useEffect)
- [React: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [React Router: Tutorial](https://reactrouter.com/en/main/start/tutorial)

---

#### **Lesson 18: React Patterns, Styling & Accessibility**
**By the end you can:**
- Extract reusable logic into custom hooks
- Style with CSS Modules or Tailwind
- **Audit a React UI for accessibility** (keyboard nav, labels, contrast)

**Hands-On Activities:**
1. Implement custom hooks
2. Style with CSS Modules or Tailwind
3. Create a component library
4. Run a Lighthouse accessibility audit on your CommunityHub frontend and fix issues

**Resources:**
- [React: Reusing Logic with Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Tailwind CSS with React](https://tailwindcss.com/docs/guides/vite)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React: Accessibility](https://react.dev/learn/accessibility)

**Mini-Project:** CommunityHub frontend with routing, styling, and a passing accessibility audit

**Daily Challenges (Week 9):**
- Day 1: Timer component with start/stop/reset using useEffect (with cleanup)
- Day 2: Debounced API search with a loading state (JSONPlaceholder)
- Day 3: Reusable Tabs component driven by props
- Day 4: Simulated auth — login form + protected routes + logout
- Day 5: Full "User Profile" page — fetch data, tabs, loading/error states

> **🚦 GRADED GATE — Frontend Complete:** a deployed React CommunityHub frontend with multiple routes, reusable components, and an accessible UI.

---

## **PHASE 4: Backend Development (Weeks 10-11)**
*Building the API that powers CommunityHub*

### **Week 10: Node.js & Express Fundamentals**

#### **Lesson 19: Introduction to Node.js & Express**
**By the end you can:**
- Explain server-side JavaScript
- Set up an Express server
- Build GET endpoints and test them

**Hands-On Activities:**
1. Create a Node.js project
2. Set up an Express server
3. Build GET endpoints
4. Test with Postman / Thunder Client

**Resources:**
- [MDN: Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Express: Getting Started](https://expressjs.com/en/starter/installing.html)
- [Node.js: Getting Started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

**Daily Challenges (Week 10):**
- Day 1: Create a server that responds with "Hello World"
- Day 2: Add a route that returns JSON
- Day 3: Create dynamic routes with parameters
- Day 4: Add query string handling
- Day 5: Implement a simple search endpoint

---

#### **Lesson 20: CRUD Operations & Middleware**
**By the end you can:**
- Implement full CRUD endpoints
- Write and use middleware
- Handle errors and log requests properly

**Hands-On Activities:**
1. Build POST, PUT, DELETE endpoints
2. Create custom middleware
3. Implement error handling
4. Add request logging

**Resources:**
- [MDN: Express Routes and Controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
- [Express: Using Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Express: Error Handling](https://expressjs.com/en/guide/error-handling.html)

**Mini-Project:** CommunityHub API — posts endpoint (full CRUD)

---

### **Week 11: Databases (SQL & NoSQL) & Authentication**

#### **Lesson 21: Databases — Relational (SQL) vs NoSQL**
**By the end you can:**
- Explain the difference between relational (SQL) and document (NoSQL) databases, and when to use each
- **Write basic SQL** (CREATE, INSERT, SELECT with WHERE / ORDER BY, a simple JOIN)
- Model data with **MongoDB + Mongoose** and implement database-backed CRUD

> You'll work hands-on with both SQL (via SQLite — no server needed) and NoSQL. CommunityHub uses **MongoDB**; the SQL work is a standalone exercise.

> **Account needed:** create your free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster before this lesson.

**Hands-On Activities:**
1. **SQL:** create a table, insert rows, and query with WHERE / ORDER BY / a simple JOIN (SQLite)
2. Set up MongoDB Atlas
3. Create Mongoose schemas with validation
4. Replace the in-memory posts store with real database CRUD

**Resources:**
- [SQLBolt: Interactive SQL Lessons](https://sqlbolt.com/)
- [MDN: SQL Basics / Database overview](https://developer.mozilla.org/en-US/docs/Glossary/Database)
- [MDN: Express Database Integration (Mongoose)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose)
- [MongoDB University: Free Courses](https://learn.mongodb.com/)
- [Mongoose: Getting Started](https://mongoosejs.com/docs/)

---

#### **Lesson 22: User Authentication & Security**
**By the end you can:**
- Implement registration and login with hashed passwords
- Issue and verify JWTs, and protect routes
- Apply baseline security: input validation, secrets in env vars, avoiding common XSS pitfalls

**Hands-On Activities:**
1. Create a user model with password hashing (bcrypt)
2. Build a registration endpoint with input validation
3. Build a login endpoint with JWT
4. Create protected routes
5. Move all secrets into environment variables (never commit them)

**Resources:**
- [MDN: Website Security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security)
- [JWT.io: Introduction](https://jwt.io/introduction/)
- [OWASP: Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP: Top 10 (overview)](https://owasp.org/www-project-top-ten/)

**Mini-Project:** CommunityHub API with comments + authentication (MVP backend complete)

**Daily Challenges (Week 11):**
- Day 1: Set up MongoDB Atlas and connect Express (test read/write route)
- Day 2: User registration — email validation, password hashing, JWT
- Day 3: JWT auth middleware (verify token, attach user, 401 on failure)
- Day 4: User profile routes (GET/PUT `/me`, GET `/:id/posts`)
- Day 5: Authorization — users can edit only their own posts

> **🚦 GRADED GATE — Backend Complete:** a CommunityHub API with full CRUD (posts + comments), database persistence, and working authentication.

---

## **PHASE 5: Full-Stack Integration & Deployment (Week 12)**
*Bringing it all together*

### **Week 12: Integration, Launch & What's Next**

#### **Lesson 23: Full-Stack Integration**
**By the end you can:**
- Connect a React frontend to your Express backend
- Configure CORS and environment variables
- Implement a complete user flow end-to-end

**Hands-On Activities:**
1. Configure CORS
2. Set up environment variables
3. Connect the authentication flow
4. Implement full CRUD from the React UI

**Resources:**
- [MDN: Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Vite: Env Variables](https://vitejs.dev/guide/env-and-mode.html)
- [The Twelve-Factor App](https://12factor.net/)

---

#### **Lesson 24: Deployment, Presentation & Next Steps**
**By the end you can:**
- Deploy a full-stack app to production
- Present your work professionally
- Name your concrete next learning steps

> **Accounts needed:** [Render](https://render.com/)/[Railway](https://railway.app/) (backend) and [Vercel](https://vercel.com/)/[Netlify](https://netlify.com/) (frontend) — sign up the week before.

**Hands-On Activities:**
1. Deploy backend to Render/Railway
2. Deploy frontend to Vercel/Netlify
3. Configure the production environment
4. Prepare and deliver a project presentation

**Resources:**
- [Render: Deploy Node.js](https://render.com/docs/deploy-node-express-app)
- [Vercel: Deploy React](https://vercel.com/docs/frameworks/vite)
- [Netlify: Deploy Guide](https://docs.netlify.com/)

**Daily Challenges (Week 12):**
- Day 1: Connect the React frontend to the Express API (posts load + create works)
- Day 2: Complete auth flow — register, login, protected routes, conditional UI
- Day 3: Deploy the Express API to Render and test all endpoints
- Day 4: Deploy React to Vercel, connected to the deployed API
- Day 5: Final testing, bug fixes, and prepare your presentation

**Final Project:** 🏁 **CommunityHub — deployed full-stack MVP** (profiles, posts, comments, auth, responsive, with a few tests and a real README)

> **🚦 GRADED GATE — Full-Stack Ready:** a live, deployed CommunityHub MVP with frontend + backend connected, authentication working, and documentation.

---

## **Learning Outcomes**

By course completion, students will have:

### **Technical Skills**
- ✅ **HTML/CSS:** Semantic, accessible, responsive websites
- ✅ **JavaScript:** Deep understanding of fundamentals, async, DOM
- ✅ **Testing:** Introductory unit testing with Vitest
- ✅ **React:** Component-based applications with state management
- ✅ **Node.js/Express:** RESTful APIs with authentication
- ✅ **Databases:** SQL fundamentals **and** NoSQL (MongoDB) modeling
- ✅ **Security:** Auth, hashing, input validation, secrets management basics
- ✅ **Git:** Professional version control workflow
- ✅ **Deployment:** Full-stack application deployment

### **Portfolio**
- 🎯 **CommunityHub:** Deployed full-stack flagship (MVP)
- 📁 **Foundation projects:** Portfolio site, grade tracker, to-do list, weather app, refactor+tests, React component library
- 📊 **GitHub Activity:** Consistent commit history demonstrating growth
- 🌐 **Deployed Applications:** Live, accessible projects

### **Professional Skills**
- 👥 Code review participation
- 📝 Technical documentation
- 🔍 Debugging and problem-solving
- 💬 Technical communication

---

## **Daily Practice Structure**

### **Between Lessons (30 minutes/day)**
1. **Coding Challenge** (15 min) — from that week's daily challenge list
2. **Documentation Reading** (10 min) — MDN or assigned resource
3. **Git Commit** (5 min) — push progress to GitHub

### **Weekly Rhythm**
- **Lesson 1:** New concepts + guided practice
- **Lesson 2:** Apply concepts + mini-project
- **Between lessons:** Daily challenges + reading
- **End of week:** Commit weekly project progress

> Every week (1–12) has a full set of daily challenges. They are part of your grade — see the submission guidelines.

---

## **Assessment & Support**

### **Graded Gates (Phase Checkpoints)**
You must demonstrate each gate before the phase is considered complete. All are assessed against **[tasks/SUBMISSION_GUIDELINES.md](tasks/SUBMISSION_GUIDELINES.md)**.

| Week | Gate | What you must demonstrate |
|------|------|---------------------------|
| 3 | Foundation Complete | Deployed portfolio under Git with README + clean history |
| 6 | JavaScript Proficient | Deployed weather app with live API + async best practices |
| 9 | Frontend Complete | Deployed React CommunityHub frontend, routed + accessible |
| 11 | Backend Complete | CommunityHub API: CRUD + database + auth |
| 12 | Full-Stack Ready | Deployed CommunityHub MVP, front + back connected |

### **What's Assessed Each Week**
Mini-project deliverable · daily challenges · Git workflow & commit history · code quality · documentation. For collaborative weeks (3, 7, 8–12), **verified individual contribution** is also assessed — PR authorship, code reviews given, and traceable commits (no free-riding on team work). Full criteria: [tasks/SUBMISSION_GUIDELINES.md](tasks/SUBMISSION_GUIDELINES.md).

### **Support Resources**
- Weekly office hours
- Discord community for peer support
- Code review sessions
- 1-on-1 debugging help

---

## **Tools & Resources Summary**

### **Primary Documentation**
- [MDN Web Docs](https://developer.mozilla.org/) — Web standards reference
- [React Documentation](https://react.dev/) — Official React docs
- [Express Documentation](https://expressjs.com/) — Express.js guide

### **Practice Platforms**
- [freeCodeCamp](https://www.freecodecamp.org/) — Free coding exercises
- [The Odin Project](https://www.theodinproject.com/) — Full curriculum
- [Frontend Mentor](https://www.frontendmentor.io/) — Real-world projects
- [Exercism](https://exercism.org/tracks/javascript) — JavaScript exercises
- [SQLBolt](https://sqlbolt.com/) — Interactive SQL practice

### **Interactive Learning**
- [Flexbox Froggy](https://flexboxfroggy.com/) — CSS Flexbox
- [Grid Garden](https://cssgridgarden.com/) — CSS Grid
- [JavaScript30](https://javascript30.com/) — 30 vanilla JS projects

### **Development Tools**
- [VS Code](https://code.visualstudio.com/) — Code editor
- [GitHub](https://github.com/) — Version control
- [Postman](https://www.postman.com/) — API testing
- [MongoDB Atlas](https://www.mongodb.com/atlas) — Cloud NoSQL database
- [Vitest](https://vitest.dev/) — Unit testing

---

## **What's Included vs. Excluded**

### **INCLUDED (Deep, Practical Mastery)**
- ✅ HTML/CSS with accessibility focus
- ✅ JavaScript fundamentals (4 weeks, not 2)
- ✅ Introductory automated testing (Vitest)
- ✅ React with modern patterns
- ✅ Node.js/Express backend
- ✅ SQL fundamentals **and** MongoDB (NoSQL)
- ✅ Authentication & baseline security
- ✅ Git/GitHub workflow
- ✅ Deployment to production
- ✅ Daily coding practice
- ✅ Code reviews and best practices

### **EXCLUDED (Stated as deliberate "next steps")**
- ❌ TypeScript — learn JavaScript deeply first (Week 12 points you to it next)
- ❌ Advanced testing (integration/E2E) — only unit-testing basics here
- ❌ Multiple frontend frameworks
- ❌ Advanced DevOps (Docker, Kubernetes)
- ❌ GraphQL — REST fundamentals first
- ❌ CSS frameworks like Bootstrap — understand CSS first

### **Why This Approach?**
Research shows that depth beats breadth for beginners:
- **Mastery over exposure:** Better to deeply understand one stack
- **Transferable skills:** Strong JavaScript skills transfer to any framework
- **Job readiness:** Employers prefer depth over surface-level familiarity
- **Confidence:** Deep understanding builds problem-solving confidence

---

## **Post-Course Pathways**

Graduates are prepared for:
- **Junior Frontend Developer** — React specialist
- **Junior Full-Stack Developer** — Node.js/React
- **Continued Learning:**
  - TypeScript for type safety
  - Next.js for full-stack React
  - Deeper testing with Jest/Vitest (integration & E2E)
  - Relational databases in depth (PostgreSQL)
  - DevOps and cloud platforms

---

*"Give a person a tutorial, they have a project for a day. Teach them to read documentation, debug, and build—they're a developer for life."*
</content>
</invoke>
