# Submission Guidelines - Season 10

## Repository Setup

### Naming Convention
Name your repository following this format:
```
iyf-s10-week-{number}-{your-github-username}
```

**Examples:**
- `iyf-s10-week-01-johndoe`
- `iyf-s10-week-05-janedoe`

For team projects, use the team lead's username:
```
iyf-s10-week-{number}-team-{team-lead-username}
```

---

## Required Files

### Every Repository Must Have:

```
your-repo/
├── README.md          # Required
├── index.html         # Or appropriate main file
├── CONTRIBUTORS.md    # Required for team projects only
└── ... other files
```

---

## README.md Template

Your README must include these sections:

```markdown
# Week {Number}: {Project Title}

## Author
- **Name:** Your Full Name
- **GitHub:** [@yourusername](https://github.com/yourusername)
- **Date:** Month Day, Year

## Project Description
Brief description of what you built and why.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- (list all technologies)

## Features
- Feature 1
- Feature 2
- Feature 3

## How to Run
1. Clone this repository
2. Open `index.html` in your browser
   OR
   Run `npm install` then `npm start`

## Lessons Learned
What did you learn while building this project?

## Challenges Faced
What problems did you encounter and how did you solve them?

## Screenshots (optional)
![Screenshot description](path/to/screenshot.png)

## Live Demo (if deployed)
[View Live Demo](https://your-deployed-url.com)
```

---

## Team Projects - CONTRIBUTORS.md

For team projects, create a `CONTRIBUTORS.md` file:

```markdown
# Contributors

## Team Members

| Name | GitHub | Role | Contributions |
|------|--------|------|---------------|
| John Doe | [@johndoe](https://github.com/johndoe) | Team Lead | Setup, Header component, API integration |
| Jane Smith | [@janesmith](https://github.com/janesmith) | Developer | Footer, Forms, Styling |
| Bob Wilson | [@bobwilson](https://github.com/bobwilson) | Developer | Navigation, Routing |

## Contribution Breakdown

### John Doe
- Set up project structure
- Created header component
- Implemented API calls
- Code review for all PRs

### Jane Smith
- Built footer component
- Styled all forms
- Added responsive design
- Wrote documentation

### Bob Wilson
- Created navigation menu
- Set up React Router
- Fixed accessibility issues
```

---

## Verifiable Contributions (Team Projects)

**All team contributions MUST happen on GitHub.** We verify contributions through:

### 1. Pull Request Workflow (Required)

**DO NOT push directly to `main` branch.** Follow this workflow:

```
1. Create a branch for your feature
   git checkout -b feature/your-feature-name

2. Make your changes and commit
   git add .
   git commit -m "Add: description of changes"

3. Push your branch
   git push origin feature/your-feature-name

4. Create a Pull Request on GitHub
   - Go to your repo on GitHub
   - Click "Compare & pull request"
   - Add description of your changes
   - Request review from team member

5. After approval, merge the PR on GitHub
```

### 2. Branch Protection Setup (Team Lead)

Team leads must enable branch protection:

1. Go to repository **Settings** → **Branches**
2. Click **Add branch protection rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1)
   - ✅ Dismiss stale PR approvals when new commits are pushed
5. Click **Create**

### 3. What Counts as Verified Contribution

✅ **Verified (counts):**
- Pull Requests created and merged on GitHub
- Code reviews on teammates' PRs
- Issues created and resolved
- Commits within merged PRs
- GitHub web edits (shows "Committed on GitHub")

❌ **Not Verified (may not count):**
- Commits pushed directly to main (bypassing PR)
- Changes made locally then pushed in bulk
- Contributions that cannot be traced to your GitHub account

### 4. How Instructors Verify

We check:
- **Insights → Contributors** - Shows commits per person
- **Pull Requests → Closed** - Shows who created/merged PRs
- **Commits** - Shows commit history and authors
- **Network Graph** - Visual branch/merge history

---

## Commit Message Guidelines

Write clear, descriptive commit messages:

```
Type: Brief description

Types:
- Add: New feature or file
- Fix: Bug fix
- Update: Changes to existing feature
- Remove: Deleted code or files
- Refactor: Code restructuring
- Style: CSS/formatting changes
- Docs: Documentation updates
```

**Examples:**
```
Add: navigation component with mobile menu
Fix: form validation not showing errors
Update: increase font size for accessibility
Docs: add installation instructions to README
```

---

## Submission Process

### Step 1: Complete Your Work
- Finish all required tasks
- Ensure code works without errors
- Test in multiple browsers (if applicable)

### Step 2: Finalize Repository
- README.md is complete
- CONTRIBUTORS.md exists (team projects)
- All PRs are merged (team projects)
- Repository is PUBLIC

### Step 3: Submit to Google Classroom
- Copy your repository URL
- Submit the link in Google Classroom assignment
- **Format:** `https://github.com/username/iyf-s10-week-XX-username`

### Step 4: Verify Submission
- Click your submitted link
- Confirm repository is accessible
- Check README displays properly

---

## Common Issues

### "My contributions don't show on GitHub"
- Ensure your Git email matches your GitHub email
- Check: `git config user.email`
- Set: `git config --global user.email "your-github-email@example.com"`

### "I can't push to main"
- This is intentional! Create a branch and PR instead
- See "Pull Request Workflow" above

### "My PR won't merge"
- Check for merge conflicts
- Ensure a teammate has approved your PR
- Resolve any failing checks

---

## Questions?

Ask in the class Discord/WhatsApp group or during office hours.
