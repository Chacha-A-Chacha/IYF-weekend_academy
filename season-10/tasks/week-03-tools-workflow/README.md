# Week 3: Tools & Workflow

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s10-week-03-{your-github-username}`

---

## Overview
This week you'll master the command line and Git, essential tools for every professional developer. By the end, you'll manage your projects like a pro.

**Lessons:**
- Lesson 5: Command Line Essentials
- Lesson 6: Git & GitHub Workflow

**Deliverable:** Portfolio with full Git history and professional README

---

## Lesson 5 Tasks

### Task 5.1: Terminal Navigation 🟢
**Time:** 30 minutes

Complete these exercises entirely in the terminal (no GUI file explorer!).

**Setup:** Open your terminal (PowerShell on Windows, Terminal on Mac/Linux)

**Exercise 1: Basic Navigation**
```bash
# Find your current directory
pwd

# List contents of current directory
ls

# Navigate to your Documents folder
cd ~/Documents

# Go back one directory
cd ..

# Navigate to home directory
cd ~
```

**Exercise 2: Create Project Structure**
Create this folder structure using only terminal commands:

```
my-project/
├── src/
│   ├── css/
│   ├── js/
│   └── images/
├── docs/
├── tests/
└── README.md
```

**Commands to use:**
- `mkdir` - create directories
- `mkdir -p` - create nested directories
- `touch` (Mac/Linux) or `New-Item` (PowerShell) - create files

**Document:** Write down each command you used in `terminal-log.md`

---

### Task 5.2: File Operations 🟢
**Time:** 30 minutes

Practice file operations in the terminal.

**Exercise 1: Create and Edit Files**
```bash
# Create a new file
touch index.html

# View file contents
cat index.html

# Copy a file
cp index.html backup.html

# Move a file
mv backup.html docs/

# Rename a file
mv index.html home.html

# Delete a file
rm home.html
```

**Exercise 2: Working with Directories**
```bash
# Copy a directory
cp -r src/ src-backup/

# Move a directory
mv src-backup/ archive/

# Delete an empty directory
rmdir archive/

# Delete a directory with contents
rm -r archive/
```

**Challenge:** Reorganize your portfolio project structure using only terminal commands.

---

### Task 5.3: Useful Terminal Commands 🟡
**Time:** 30 minutes

Learn these essential commands:

**Search and Find:**
```bash
# Find files by name
find . -name "*.html"

# Search inside files
grep "class" index.html
grep -r "button" ./src/

# Show command history
history
```

**View and Edit:**
```bash
# View first/last lines
head -10 styles.css
tail -10 styles.css

# Count lines, words, characters
wc index.html
wc -l index.html  # lines only
```

**Task:** Answer these questions using terminal commands only:
1. How many HTML files are in your portfolio project?
2. Which files contain the word "contact"?
3. How many lines is your CSS file?
4. What were your last 10 terminal commands?

---

### Task 5.4: Shell Script Basics 🔴
**Time:** 45 minutes

Create helpful scripts to automate common tasks.

**Script 1: Project Setup Script**
Create `new-project.sh` (or `new-project.ps1` for PowerShell):

```bash
#!/bin/bash
# Creates a new project with standard structure

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
    echo "Usage: ./new-project.sh project-name"
    exit 1
fi

mkdir -p "$PROJECT_NAME"/{src/{css,js,images},docs,tests}
touch "$PROJECT_NAME"/README.md
touch "$PROJECT_NAME"/src/index.html
touch "$PROJECT_NAME"/src/css/styles.css
touch "$PROJECT_NAME"/src/js/main.js

echo "# $PROJECT_NAME" > "$PROJECT_NAME"/README.md
echo "Project $PROJECT_NAME created successfully!"
```

**PowerShell version:**
```powershell
param($ProjectName)

if (-not $ProjectName) {
    Write-Host "Usage: .\new-project.ps1 project-name"
    exit 1
}

New-Item -ItemType Directory -Path "$ProjectName\src\css","$ProjectName\src\js","$ProjectName\src\images","$ProjectName\docs","$ProjectName\tests" -Force
New-Item -ItemType File -Path "$ProjectName\README.md","$ProjectName\src\index.html","$ProjectName\src\css\styles.css","$ProjectName\src\js\main.js" -Force

Set-Content -Path "$ProjectName\README.md" -Value "# $ProjectName"
Write-Host "Project $ProjectName created successfully!"
```

**Usage:**
```bash
./new-project.sh my-awesome-app
```

---

## Lesson 6 Tasks

### Task 6.1: Git Basics 🟢
**Time:** 30 minutes

Set up Git and learn the basic workflow.

**Initial Setup:**
```bash
# Configure your identity
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Verify configuration
git config --list
```

**Exercise: Initialize Repository**
```bash
# Navigate to your portfolio
cd portfolio

# Initialize Git
git init

# Check status
git status

# Add files to staging
git add .

# Make first commit
git commit -m "Initial commit: portfolio structure"

# View commit history
git log
```

**Practice:** Make 3 more commits with meaningful messages:
1. "feat: add navigation styling"
2. "fix: correct responsive breakpoints"
3. "docs: update README with project info"

---

### Task 6.2: Branching & Merging 🟡
**Time:** 45 minutes

Learn to work with branches.

**Exercise 1: Create and Use Branches**
```bash
# View current branches
git branch

# Create new branch
git branch feature/contact-form

# Switch to new branch
git checkout feature/contact-form
# OR (newer syntax)
git switch feature/contact-form

# Create and switch in one command
git checkout -b feature/new-header
```

**Exercise 2: Branch Workflow**
1. Create branch `feature/about-page`
2. Switch to the branch
3. Make changes to about.html
4. Commit changes
5. Switch back to main
6. Merge the feature branch
7. Delete the merged branch

```bash
# Merge a branch
git checkout main
git merge feature/about-page

# Delete merged branch
git branch -d feature/about-page
```

**Exercise 3: Handle a Merge Conflict**
1. Create two branches from main
2. Edit the same line in both branches
3. Try to merge both into main
4. Resolve the conflict manually
5. Complete the merge

---

### Task 6.3: GitHub Remote Workflow 🟡
**Time:** 40 minutes

Connect your local repository to GitHub.

**Exercise 1: Push to GitHub**
```bash
# Add remote repository
git remote add origin https://github.com/yourusername/portfolio.git

# Verify remote
git remote -v

# Push to GitHub
git push -u origin main
```

**Exercise 2: Collaboration Simulation**
1. Clone your repository to a different folder (simulating another computer)
2. Make changes in the cloned repo
3. Push changes
4. Go back to original repo
5. Pull the changes

```bash
# Clone
git clone https://github.com/yourusername/portfolio.git portfolio-clone

# After making changes elsewhere, pull them
git pull origin main
```

**Exercise 3: Using .gitignore**
Create a `.gitignore` file:
```
# Dependencies
node_modules/

# IDE
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Temporary files
*.log
*.tmp
```

---

### Task 6.4: Professional README 🔴
**Time:** 45 minutes

Create a professional README for your portfolio.

**Requirements:**

```markdown
# Your Name - Portfolio

Brief description of your portfolio and what it showcases.

## Live Demo

[View Live Site](https://yourusername.github.io/portfolio)

## Screenshot

![Portfolio Screenshot](./images/screenshot.png)

## Features

- ✅ Responsive design
- ✅ Accessible (WCAG compliant)
- ✅ Multi-page layout
- ✅ Contact form

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid)
- Git & GitHub

## Project Structure

\`\`\`
portfolio/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── styles.css
└── images/
\`\`\`

## What I Learned

Describe key lessons from building this project.

## Future Improvements

- [ ] Add JavaScript interactivity
- [ ] Implement dark mode
- [ ] Add project filtering

## Contact

- Email: your@email.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## License

This project is open source and available under the [MIT License](LICENSE).
```

---

## Daily Challenges

### Day 1: Terminal-Only Project Setup 🟢
Create a new project folder with a complete structure using only terminal commands. No clicking allowed!
```
daily-challenge-1/
├── src/
│   ├── index.html
│   ├── css/style.css
│   └── js/app.js
└── README.md
```

### Day 2: Find Command Mastery 🟢
Using `find` and `grep` commands:
1. Find all CSS files in your projects folder
2. Find all files modified in the last 7 days
3. Search for the word "flex" in all CSS files
4. Count occurrences of "div" in your HTML files

### Day 3: Create a Boilerplate Script 🟡
Write a script that creates an HTML boilerplate with:
- Basic HTML5 structure
- Meta tags for viewport
- Link to stylesheet
- Script tag for JavaScript

### Day 4: Git Commit Message Practice 🟢
Review your commit history and practice good commit messages:
- Use present tense
- Start with type: feat, fix, docs, style, refactor
- Keep under 50 characters
Make 5 commits with perfect messages today.

### Day 5: GitHub Profile README 🟡
Create a README.md for your GitHub profile:
- Introduction
- Your tech stack (with badges)
- Currently learning
- How to reach you
- GitHub stats (optional)

---

## Week 3 Checklist

Before moving to Week 4, ensure you can:

- [ ] Navigate file system using terminal
- [ ] Create, copy, move, delete files via CLI
- [ ] Use `find` and `grep` commands
- [ ] Initialize a Git repository
- [ ] Make commits with meaningful messages
- [ ] Create and merge branches
- [ ] Handle merge conflicts
- [ ] Push to and pull from GitHub
- [ ] Use .gitignore properly
- [ ] Write a professional README

**Milestone:** Your portfolio has a complete Git history and professional documentation! 📚

---

## Useful References

- [MDN: Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Skills](https://skills.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Oh Shit, Git!](https://ohshitgit.com/) - Fixing mistakes
