# Submission Guidelines - Season 12

## Repository Setup

### Naming Convention
Name your repository following this format:
```
iyf-s12-week-{number}-{your-github-username}
```

**Examples:**
- `iyf-s12-week-01-MaisoriKitayama`
- `iyf-s12-week-05-MaisoriKitayama`

**What `{your-github-username}` means.** It is the exact string in your profile URL, `github.com/<username>` — same letters, same case, including any suffix GitHub added when you signed up (`-sys`, `-pixel`, `-dev`…). It is the username you registered in Week 0. Never shorten it, re-case it, or rename your account after Week 0: repositories are matched to you by this string, and a repository under a different one is not yours as far as marking is concerned.

**Team repositories** use the team lead's username. The Week 0 team task is a one-off; CommunityHub (Weeks 8–12) is **one repository for all five weeks**, created in Week 8 and submitted every week after:
```
iyf-s12-week-00-team-{team-lead-username}        # Week 0 only
iyf-s12-week-03-pair-{lead-username}             # Week 3 pair lab — linked from your README, not submitted
iyf-s12-communityhub-team-{team-lead-username}   # Weeks 8–12, one repo
```
Inside the CommunityHub repo: `frontend/` (Weeks 8–9), `backend/` (Weeks 10–11), deployed together in Week 12.

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
- **GitHub:** [@MaisoriKitayama](https://github.com/MaisoriKitayama)
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

## Collaboration (required in Weeks 0, 3 and 7; omit on other solo weeks)
- **Team / partner:** [@partner](https://github.com/partner)
- **Shared repo:** https://github.com/...
- **PR I opened:** https://github.com/.../pull/N
- **PR I reviewed:** https://github.com/.../pull/N
- **Merge conflict I resolved** (Weeks 0 and 3): https://github.com/.../pull/N
(Collaboration happens outside this repository. It is marked **only** from these links — the marker does not search the shared repo for your work. Every link must point to something authored by your own GitHub account.)

## Screenshots (optional)
![Screenshot description](path/to/screenshot.png)

## Live Demo (if deployed)
[View Live Demo](https://your-deployed-url.com)
```

---

## Team Projects - CONTRIBUTORS.md

**Weeks 8–12 are team weeks. The team repository is the submission.** Every member submits the team repo URL to Classroom individually, every week — the lead submitting does not count for anyone else.

**Your submission has to tell your own story.** Three teammates submitting the same URL tells the marker nothing about any one of you, so each week **you** add your own entry to `CONTRIBUTORS.md`, in a PR of your own, before the deadline: links to the PRs you opened, the PRs you reviewed, and the issues you closed that week. The marker goes from your Classroom account → your registered GitHub username → your section of `CONTRIBUTORS.md` → those links, and checks that each one is authored by you. **Work you don't list is not marked**; the marker does not search the repo for it. No submission → 0, whatever your commits. Listing someone else's PR as yours is an academic-integrity matter.

For team projects, create a `CONTRIBUTORS.md` file:

```markdown
# Contributors

## Team Members

| Name | GitHub | Role | Contributions |
|------|--------|------|---------------|
| Maisori Kitayama | [@MaisoriKitayama](https://github.com/MaisoriKitayama) | Team Lead | Setup, Header component, API integration |
| Team Member 2 | [@teammate2](https://github.com/teammate2) | Developer | Footer, Forms, Styling |
| Team Member 3 | [@teammate3](https://github.com/teammate3) | Developer | Navigation, Routing |

## Weekly Log — one section per member, each member edits only their own

### @MaisoriKitayama

#### Week 8
- **PRs I opened:** [#3 Add header component](https://github.com/MaisoriKitayama/iyf-s12-communityhub-team-MaisoriKitayama/pull/3), [#7 Add PostCard](https://github.com/MaisoriKitayama/iyf-s12-communityhub-team-MaisoriKitayama/pull/7)
- **PRs I reviewed:** [#5](https://github.com/MaisoriKitayama/iyf-s12-communityhub-team-MaisoriKitayama/pull/5)
- **Issues I closed:** [#2 Profiles page](https://github.com/MaisoriKitayama/iyf-s12-communityhub-team-MaisoriKitayama/issues/2)

#### Week 9
- ...

### @teammate2

#### Week 8
- **PRs I opened:** ...
- **PRs I reviewed:** ...
- **Issues I closed:** ...
```

**Rules for the log:** add your week's entry through **your own PR** (so the log itself is attributed to you); use full links, not bare `#3`; list only what your account authored; a week with no entry is marked on nothing.

---

## Verifiable Contributions (Collaborative Weeks: 0, 3, 7, 8–12)

**All collaborative work MUST happen on GitHub** — the Week 0 team task, the Week 3 pair lab, the Week 7 peer review, and CommunityHub. We verify contributions through:

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

**What counts as a submission.** One URL, pasted into the assignment's **link** field, of exactly this form:

```
https://github.com/{your-username}/iyf-s12-week-XX-{your-username}
```

On solo weeks the repository must be owned by **your** account — the one you registered in Week 0. On team weeks (8–12) every member submits the team repository URL individually; see [Team Projects](#team-projects---contributorsmd). On the pair weeks (3 and 7) you still submit your own repository — the pair repo or review PR is **linked from its README** under *Collaboration*, and is marked only from that link.

**What scores 0** — no exceptions, no chasing:
- A file attachment instead of a link
- A Google Drive, Codespaces, `localhost`, or any non-GitHub link
- A URL written only in the private comments, or only as link *text* without being a link
- A classmate's repository, or a team repository on a solo week
- "Turned in" with nothing attached
- A link that does not open in a browser

### Step 4: Verify Before You Turn In
- Open your submitted link in a **private / incognito window** — if it does not load there, the marker will not see it either
- Confirm the repository is public and the README renders
- Then click **Turn in**

---

## Common Issues

### "My contributions don't show on GitHub"
- Your Git email must be the email on your GitHub account — you set this in Week 0, Task 0.2
- Check: `git config --global user.email`
- Fix: `git config --global user.email "the-email-on-your-github-account"` — then commit again; earlier commits stay unattributed
- Commits GitHub cannot attribute to your account earn nothing on any collaborative week. Check **Insights → Contributors** after your first merged PR, every time.

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
