# Week 0: Git, GitHub & Your Developer Identity

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repositories this week:** `{your-github-username}` · `{your-github-username}.github.io` · `iyf-s12-week-00-team-{lead-username}`

---

## Overview

Week 0 runs the week before Lesson 1 and is self-paced after one onboarding session. By the end of it you have a registered identity the course can grade against, a locked GitHub username, a live web page, one merged pull request of your own, and a commit identity that GitHub attributes to you.

Everything in Weeks 1–12 depends on this week. A student the course cannot identify cannot be graded.

**Reading:** [Introduction to Git and GitHub](https://github.com/CardenDante/Introduction-To-Github-and-git) — a beginner guide with no programming required. Read it first; the tasks below follow its structure but use this course's naming, team size and submission rules where they differ.

**Deliverable:** Your GitHub profile, with your Pages site, Markdown practice and team repository all linked from it.

---

## Task 0.1: Register 🟢
**Time:** 5 minutes

Do **Task 0.3 first** (lock your GitHub username), then fill in the **Season 12 registration form** (link posted in Google Classroom). **Sign in with the Google account you'll use for Classroom all season** — the form records that account's email automatically.

You'll need:

- Your admission number (4 digits, including any leading zeros) — entered twice
- Your name exactly as registered with the school
- Whether you've ever used another Google account for IYF Classroom, and which
- Your GitHub username, exactly as in `github.com/<username>`
- The email on your GitHub account (GitHub → Settings → Emails) — the same one you put in `git config` in Task 0.2

**Rules:**
- One Google Classroom account per student, for the whole season. Work split across two accounts is graded as one account.
- Your Classroom display name must be your registered name.

> ⚠️ **This is a gate.** Until the form is submitted and matches your Classroom account, Week 0 scores 0 and nothing else you submit is marked.

---

## Task 0.2: Environment Setup 🟢
**Time:** 45 minutes

- [ ] Install [Git](https://git-scm.com/downloads)
- [ ] Install [VS Code](https://code.visualstudio.com/) with the **Live Server** and **Prettier** extensions
- [ ] Install [Node.js LTS](https://nodejs.org/) — **version 22 or 24** (check with `node --version`). First used in Week 7: the test runner (Vitest) and Vite need Node 22.12 or newer, and Node 20 will fail with an "unsupported engine" error
- [ ] Chrome or Firefox for DevTools

Then tell Git who you are. **The email must be the one on your GitHub account** — otherwise GitHub cannot attribute your commits to you, and unattributed commits earn nothing on team weeks.

```bash
git config --global user.name "Your Name"
git config --global user.email "the-email-on-your-github-account@example.com"
git config --global --list
```

**Verification:** paste the output of `git config --global --list` into your profile README under a *Setup* heading (Task 0.3).

---

## Task 0.3: Lock Your Username & Create Your Profile README 🟢
**Time:** 30 minutes

GitHub shows the `README.md` of a repository named **exactly** your username on your profile page.

**Choose your username first.** The username you register in Task 0.1 is the one that appears in every repository name this season — `iyf-s12-week-01-{username}`, `iyf-s12-week-02-{username}` and so on. It is the exact string in your profile URL, `github.com/<username>`, including case and any suffix GitHub added when you signed up (`-sys`, `-pixel`, `-dev`…). GitHub lets you rename an account: if you want a cleaner username, rename **now**, then never again.

1. New repository → name it exactly your username → Public → *Add a README file*.
2. Replace the default README with your own content. Use the [starter template in the guide](https://github.com/CardenDante/Introduction-To-Github-and-git/tree/main/01-profile-readme) and replace **every** `[bracket]`.
3. Add a *Setup* heading with your `git config --global --list` output (Task 0.2).
4. Commit with a descriptive message.

> Unreplaced placeholders are penalised from Week 0 onward — see the Submission Guidelines.

---

## Task 0.4: Host a Page on GitHub Pages 🟢
**Time:** 30 minutes

1. New repository → name it `{your-github-username}.github.io` → Public → *Add a README file*.
2. Create `index.html` with your own content — the guide has a [starter file](https://github.com/CardenDante/Introduction-To-Github-and-git/tree/main/02-github-pages). Replace every `[bracket]`.
3. Settings → Pages → branch `main`, folder `/ (root)` → Save.
4. Wait a few minutes, then open `https://{your-github-username}.github.io`.

**Verification:** the site loads. Link it from your profile README under a *Links* heading.

---

## Task 0.5: Markdown Practice 🟢
**Time:** 45 minutes

In your profile repository, create `markdown-practice.md` and complete all 8 exercises from the guide's [Markdown task](https://github.com/CardenDante/Introduction-To-Github-and-git/tree/main/03-markdown-basics): headings, text formatting, links, lists, a table, a task list, a code block with a language, and a blockquote.

**Verification:** the file renders correctly on GitHub — tables as tables, headings as headings. Link it from your profile README under *Links*.

---

## Task 0.6: Team Collaboration 🟡
**Time:** 90 minutes

**Find your own team of 2–3.** The instructor pins a *Week 0 Team Board* in Classroom; reply with your GitHub username to start a team or to join one that has fewer than three members, and name your **lead**. Do it in the first days of the week — if the deadline passes and no team has taken you, reply to the smallest team on the board: **a team of fewer than three must take anyone who asks.** Nobody is assigned a team, so nobody is waiting to be told. This rehearses exactly the workflow you will use in Week 3 and in the Weeks 8–12 team project.

> **If you end up alone** — the board ran odd, or your team never pushed anything — do the task anyway: create `iyf-s12-week-00-team-{your-username}` yourself, work on a branch, open your PR and merge it. You can still resolve a merge conflict on your own: make two branches that edit the same line, merge the first, resolve the second. The only mark that needs a second person is the teammate's review, and it is waived if you name under *Week 0 Team* who went missing. Say what happened; do not leave it blank.

**Team lead:**
1. New repository → `iyf-s12-week-00-team-{lead-username}` → Public → *Add a README file*.
2. Set up a README with a title, a short introduction and one empty section per member (a mini knowledge base on any topic — tools, languages, study techniques).
3. Settings → Collaborators → add every member. Members must **accept** the invitation.

**Every member, including the lead:**
1. Clone the repository. Create a branch named after your section (`add-vscode-section`).
2. Write your section — at least one paragraph, using real Markdown formatting.
3. Commit and push the branch. Open a pull request with a descriptive title and a description.
4. **A teammate** — not you — reviews it (*Files changed → Review changes → Approve*) and it is merged. The lead does not merge everything; each member reviews at least one PR.
5. Afterwards, `git checkout main && git pull` before any new work.

**Required — resolve one merge conflict.** Two members edit the same line of the introduction on separate branches. Merge the first PR; resolve the conflict in the second on GitHub (*Resolve conflicts* → choose the text to keep → remove the `<<<<<<<`, `=======`, `>>>>>>>` markers → *Mark as resolved* → *Commit merge*). Week 3 requires this; learn it here.

**Verification — do not skip:** open the repository's **Insights → Contributors**. Every member must appear with their commits. If you are missing, your `git config user.email` (Task 0.2) does not match your GitHub account — fix it and re-commit. Commits GitHub cannot attribute to you earn nothing.

---

## Task 0.7: Issues & Project Board 🟡
**Time:** 45 minutes

In the team repository, following the guide's [Issues and Projects task](https://github.com/CardenDante/Introduction-To-Github-and-git/tree/main/05-issues-and-projects):

1. **Each member** creates at least **2 issues** — each with a title, a one-line description, an assignee and a label.
2. **Lead** creates a Board project named *Team Sprint Board* and adds every issue to *Todo*.
3. **Each member** resolves at least one issue through a pull request whose description contains `Closes #n`. The issue closes on merge and moves to *Done*.

Week 8 opens with one issue per MVP feature. This is that habit.

---

## Week 0 Checklist

- [ ] Registration form submitted (Task 0.1) — **gate**
- [ ] Git, VS Code, Node, browser installed; `git config` email matches GitHub
- [ ] Profile repository named exactly your username, README personalised, setup output included
- [ ] `{username}.github.io` live
- [ ] `markdown-practice.md` with all 8 exercises, rendering correctly
- [ ] Team repo `iyf-s12-week-00-team-{lead}`: your own PR, reviewed by a teammate, merged
- [ ] One merge conflict resolved
- [ ] You appear in Insights → Contributors
- [ ] ≥2 issues each, board exists, ≥1 issue closed via `Closes #n`
- [ ] Profile README has **Links** (Pages site, `markdown-practice.md`) and **Week 0 Team** (teammates, team repo, my PR, PR I reviewed, conflict PR, my issues, `Closes #n` PR)

---

## Submission

Submit **one URL** in the Week 0 assignment's link field: your GitHub profile, `https://github.com/{your-github-username}`.

Everything else is reached from there. Your profile README must have a **Links** section and a **Week 0 Team** section:

- **Links:** your Pages site · your `markdown-practice.md`
- **Week 0 Team:** your teammates' GitHub usernames · the team repo · **the PR you opened** · **the PR you reviewed** · **the merge-conflict PR** · **your two issues** · **the PR that closed an issue with `Closes #n`**

Every item is a full link. The marker follows these links and checks each was authored by your account — it does **not** search the team repo for you. Anything not linked from your profile is not marked. Your teammates each list their own; yours tell your story, not theirs.

**What scores 0:** a file attachment, a Drive or Codespaces link, a URL only in the private comments, a classmate's profile, "Turned in" with nothing attached.

**Before you turn in:** open your profile URL in a private/incognito window and click every link in it.

---

## Marking

Week 0 is scored out of 100 with its own table (the weekly A–E rubric starts in Week 1):

| Component | Points |
|---|---|
| Registration (Task 0.1) | **gate** — not scored; without it the week is 0 |
| Identity & setup (0.2, 0.3): exact-name repo 8 · personalised README 8 · git identity 4 | 20 |
| Live page (0.4) | 15 |
| Markdown (0.5) | 15 |
| Collaboration (0.6): own PR 10 · teammate review 5 · merged 5 · conflict resolved 10 · in Contributors 5 | 35 |
| Issues & board (0.7): 2 issues 5 · board 5 · closed via PR 5 | 15 |

Standard penalties apply: unreplaced placeholders, private repository, an invalid submission link. A member with no attributed commits in the team repository scores 0 on Task 0.6 — the same rule as Weeks 8–12.

---

## Resources

- [Introduction to Git and GitHub](https://github.com/CardenDante/Introduction-To-Github-and-git) — the reading for this week, with starter templates for Tasks 0.3–0.7
- [GitHub Skills: Introduction to GitHub](https://skills.github.com/) — hands-on course that runs inside a repository
- [Learn Git Branching](https://learngitbranching.js.org/) — visual, interactive branching practice
- [GitHub Docs: Hello World](https://docs.github.com/en/get-started/start-your-journey/hello-world) — the pull-request workflow, from GitHub
- [GitHub Student Developer Pack](https://github.com/education/students) — free tools for students, including Copilot
