# Season 12 — Planned Improvements

Season 12 is forked from Season 11 with `iyf-s11-` → `iyf-s12-`. All ten items below are applied.
This file is the plan for what *should* change, derived from what broke while marking and
grading Season 11. Each item names the loophole, the evidence, the change, and the files it
lands in. Tick the box when the change is applied.

Evidence figures are from the Season 11 cohort: 119 registered students, 121 Google
Classroom accounts, submission audits for Weeks 3–12.

---

## 1. Identity gate in Week 0

**Loophole.** Nothing ties a student's admission number, Google Classroom account and GitHub
username together. Season 10 had a name-matching form; Season 11 did not.

**Season 11 evidence.**
- 51 of 119 students could not be matched to a Classroom account by name alone; 20 needed
  manual identification and 5 had work split across two Classroom accounts.
- Several Classroom display names bore no relation to the registry name. One student was
  recorded by the team-project audit as a non-contributor because her commits were under
  her other name.
- One student never matched at all and was graded entirely from instructor-entered marks.

**Change.**
- Week 0 becomes a graded, gated week (`tasks/week-00-git-github/`), built on the
  [Introduction to Git and GitHub](https://github.com/CardenDante/Introduction-To-Github-and-git)
  guide: registration form (gate) → environment + `git config` with the GitHub email →
  profile repo named exactly the username → Pages site → Markdown → team PR cycle with a
  required merge conflict and an Insights → Contributors check → issues + board.
- Registration captures admission number, registered name, Classroom email, GitHub
  username — **in the private form only.** The admission number does not go into public
  READMEs; the locked username is the chain from registry to repo.
- Rule: one Classroom account per student; display name must match the registered name.
- Week 0 has its own 100-point table (collaboration 35, identity 20, page 15, Markdown 15,
  issues 15); the marking guide records the gate checks and the identity triple.

**Files.** `tasks/week-00-git-github/README.md` (new) · `course_outline.md` (Week 0
section) · `tasks/README.md` · `MARKING_GUIDE.md` (Week 0 notes, scope line).

- [x] Applied — 2026-09-13

---

## 2. Define "your GitHub username"

**Loophole.** The naming convention says `{your-github-username}` without saying what that is.

**Season 11 evidence.** Repos named with a truncated username (`…-week-03-kennedymurimi`
under a `kennedymurimi100` account), a capitalised one (`Ninjago618` vs `ninjago618`), a
trailing hyphen, and a dozen GitHub auto-generated suffixes (`-sys`, `-pixel`, `-gif`,
`-cmd`, `-hue`, `-dot`, `-debug`, `-lab`, `-coder`, `-art`, `-hash`, `-juice`) that students
kept or dropped at random. A1 could not be scored consistently.

**Change.**
- Definition: the exact string in `github.com/<username>`, case and suffix included; it
  is the username registered in Week 0.
- Week 0 Task 0.3: GitHub allows a rename — choose a clean username *before* registering,
  and never rename after it.
- A1 checks the `{username}` segment against the Week 0 registration; truncated or
  re-cased = *wrong but identifiable* (1); a different owning account is a Tracing Rule
  matter, not an A1 deduction.

**Files.** `tasks/SUBMISSION_GUIDELINES.md` (Naming Convention) ·
`tasks/week-00-git-github/README.md` (Task 0.3) · `MARKING_GUIDE.md` (A1).

- [x] Applied — 2026-09-13

---

## 3. Student-facing definition of a valid submission

**Loophole.** The marking guide's Tracing Rule and automatic-0 are instructor-private. The
student-facing guidelines say "copy your repository URL" and nothing about what happens
otherwise.

**Season 11 evidence.** Google Drive folder links; a Codespaces session link; a malformed
URL (`http://iyf-s11-week-06-<user>/`); assignments marked "Turned in" with nothing
attached; file attachments instead of a link; URLs placed only in private comments;
students attaching a *classmate's* repository (four cases); a team repo submitted for a
solo week; the same repo submitted by two students.

**Change.** Add a **Valid submission** section to the guidelines:
- Exactly one URL, in the link field, of the form
  `https://github.com/{your-username}/iyf-s12-week-XX-{your-username}`.
- On solo weeks the repository owner must be the submitting student.
- Anything else — attachment, Drive, Codespaces, private comment, someone else's repo,
  "turned in" with nothing — scores 0. Say so plainly.
- Self-check before turning in: open your own link in a private/incognito window.

**Marking guide.** Penalty table gains a row: *repository owner ≠ submitter on a solo week
→ 0*.

**Files.** `tasks/SUBMISSION_GUIDELINES.md` (Steps 3–4) · `MARKING_GUIDE.md` (Penalty
Schedule: owner ≠ submitter → 0; turned in with nothing → 0, entered as 0).

- [x] Applied — 2026-09-13

---

## 4. Per-member credit on the team project (Weeks 8–12)

**Loophole.** Nothing requires each team member to submit individually, and nothing ties a
git author identity to a GitHub account or an admission number.

**Season 11 evidence.**
- A member with 6 commits never submitted Week 12 and was credited 30; a member with 3
  commits under a different display name was credited 0 until manually identified.
- Commits authored under a name unlinked to any GitHub account; one lead committing under
  two identities.
- Team repos named `…-team-Tr` (truncated) and `<lead>/…-street-vendor-hub-<lead>`
  (ignoring the `-team-` convention).
- No audit sheet carried a per-member Week 12 score at all.

**Change.**
- Every member submits the team repo URL individually in each of Weeks 8–12. No
  submission, no grade — commits alone do not earn one.
- `CONTRIBUTORS.md` lists each member's exact GitHub username. (Admission number dropped —
  public repo; the Week 0 username lock is the chain.)
- `git config user.email` linked to the GitHub account is a Week 8 kickoff checklist item
  with a verification step (Insights → Contributors must show you).
- Weeks 8–12 are scored per member: the team score is the ceiling; zero attributed
  commits is the floor; no individual submission is 0 regardless of commits; unattributed
  authors are credited to nobody. One number per member in Classroom.

**Files.** `tasks/week-08-react-fundamentals/README.md` (Flagship Kickoff) ·
`tasks/SUBMISSION_GUIDELINES.md` (Team Projects) · `MARKING_GUIDE.md` (B3 penalties +
per-member scoring, CONTRIBUTORS verification steps 5–6).

- [x] Applied — 2026-09-13

---

## 5. A course-grade rule, published before Week 1

**Loophole.** The marking guide scores a *week* out of 100 with bands A ≥ 90. It says
nothing about how thirteen weeks combine into a course grade.

**Season 11 evidence.** Week weights, the aggregation formula and the aggregate bands were
all decided *during* grading. One student's band changed on a denominator rule no student
had ever been shown.

**Change.** Add a **Course Grade** section to the marking guide and a student-facing
summary to the outline's "How You're Assessed". Carry forward the Season 11 decisions as
the starting point — confirm or revise before publishing:

| Tier | Weeks | Weight each | Subtotal |
|---|---|---|---|
| Final project | 12 | 30 | 30 |
| Heavy | 0, 8, 9, 10, 11 | 7 | 35 |
| Core | 1–7 | 5 | 35 |

- A student is scored against the weight of the weeks they were assessed on, with the
  divisor never below **70**. (Prevents the full-syllabus denominator failing a student
  with eight submitted weeks, while stopping a two-week submitter from taking an A.)
- Aggregate bands: A ≥ 70, B ≥ 55, C ≥ 40, D ≥ 20, F < 20. These are distinct from the
  per-week bands and must be labelled as such.
- Decide and state whether a submitted-and-failed week (score 0) counts in the divisor.
  Season 11 excluded zeros; including them moved four students down a band.

**Files.** `MARKING_GUIDE.md` (new section) · `course_outline.md` (How You're Assessed).

- [x] Weights and bands confirmed — Season 11's, published as-is
- [x] Zero-in-divisor rule decided — **excluded**: counting zeros would rank an empty
      repo below no submission at all, rewarding ghosting
- [x] Applied — 2026-09-13 (`MARKING_GUIDE.md` Course Grade section; `course_outline.md`
      How You're Assessed)

---

## 6. One gradebook, and zeros are zeros

**Loophole.** No recording procedure. Classroom cells were left blank when a student turned
in nothing gradeable, and audit spreadsheets became a parallel gradebook.

**Season 11 evidence.**
- Weeks 10 and 11 had 9 and 8 graded cells for 121 accounts.
- "Turned in with no attachment" was left blank rather than scored 0, so it was
  indistinguishable from never attempted.
- Audit workbooks existed in three versions with 16 conflicting Week 3 scores between them.

**Change.** Marking Procedure gains **Step 7 — Record**:
- The Classroom gradebook is the single source of truth.
- Every turned-in item gets a number. Nothing gradeable is a **0**, not a blank.
- Audit workbooks are working papers: one file per week, no `_v2` / `_UPDATED` copies.
  A corrected score is corrected in Classroom.

**Files.** `MARKING_GUIDE.md` (Marking Procedure, Step 7).

- [x] Applied — 2026-09-13

---

## 7. Secrets in Week 6 and Week 12

**Loophole.** Week 6 says "get your free API key" and nothing about keeping it out of git.
It is a pre-Node week, so the `.env` / `dotenv` pattern does not apply and students had no
alternative to follow. The penalty table charges a committed `.env` but not a key pasted
into a script.

**Season 11 evidence.** The weather API key was hardcoded in **31 of 34** Week 6 repos.
Six Week 12 repos committed `frontend/.env`.

**Change.**
- Week 6 task: `config.js` (git-ignored, holds the key) + `config.example.js` (committed),
  with an honest note that a static site exposes the key to the browser regardless — so
  use a free-tier key and never commit it.
- Penalty table row: *API key or secret hardcoded in source → -5*.
- Week 12 checklist: `.env` is git-ignored in **both** `frontend/` and `backend/`.

**Files.** `tasks/week-06-async-javascript/README.md` · `tasks/week-12-deployment/README.md`
· `MARKING_GUIDE.md` (Penalty Schedule, Weeks 4–7 notes incl. history check).

- [x] Applied — 2026-09-13

---

## 8. Assigned partners for the collaborative weeks

**Loophole.** Weeks 3 and 7 score B3 at 0/5 for solo work, but nothing assigns partners. A
student who cannot find one is penalised for a logistics gap.

**Season 11 evidence.** Repeated "solo work on every collaborative week" findings; many Week
3 repos with no partner, no PR and no merge conflict to resolve.

**Change.**
- Instructor assigns pairs from the Week 0 registration and posts them by Week 2 (and
  again before Week 7). Teams for Weeks 8–12 are self-formed by the kickoff deadline;
  anyone unplaced is assigned. Week 3 and Week 7 READMEs now say where the pair
  evidence must be linked (Collaboration heading) — the pair repo / review PR live
  outside the submitted repo, and B3 is marked from the link.
- A no-show partner is recorded in the active student's README; the active student
  receives full B3.

**Files.** `course_outline.md` (Collaboration Model, "Who you work with") ·
`MARKING_GUIDE.md` (B3, no-show rule).

- [x] Applied — 2026-09-13

---

## 9. Small ones

- **Delete the generated Vite README.** Several Week 8/9 repos shipped it. Add to Task
  15.1: "delete the generated `README.md` and replace it with the template".
  → `tasks/week-08-react-fundamentals/README.md`
- **Team repo naming.** Restated in the Week 8 kickoff with the exact-username rule from
  item 2 — now `iyf-s12-communityhub-team-{lead-username}` (see item 10).
  → `tasks/week-08-react-fundamentals/README.md`

- [x] Applied — 2026-09-13 (folded into the item 10 rewrite of Task 15.1)

---

## 10. Which repository is graded in Weeks 8–12

**Loophole.** Three documents disagreed. The week task files headed Weeks 8–11 with an
individual `iyf-s11-week-0X-{username}` and had every student scaffold their own Vite
project; the outline and the marking guide expected a team repo; Week 12 said "or team".
The `…-team-{lead}` convention also implied a new team repo every week, for what is one
codebase built over five weeks.

**Season 11 evidence.** Students split both ways. Week 9 verdicts of "you built lesson
demos, not CommunityHub" came from students following the task file literally; one
student submitted the team repo for Week 11 because nothing said not to; teams made a
single repo and named it `week-12-…`.

**Change.**
- Weeks 8–12 submit **one team repository**, `iyf-s12-communityhub-team-{lead-username}`,
  created in Week 8 with `frontend/` and gaining `backend/` in Week 10. Every member
  submits it every week. No individual repos for these weeks.
- Task 15.1 is now a lead-runs-once scaffold on a PR (with the generated Vite README
  deleted); members clone and verify Insights → Contributors. Week 10 Task 19.1 scaffolds
  `backend/` inside the same repo.
- Lesson exercises live on personal branches under `frontend/src/exercises/{username}/`
  and `backend/exercises/{username}/` so C1 can be marked per member.
- Marking guide: grade each week's **increment** — `main` at the deadline against that
  week's deliverable row, C1 from that week's merged exercises, B from that week's PRs.
  An individual `iyf-s12-week-09-{username}` submission is the wrong repo.

**Files.** `tasks/week-08…12/README.md` (headers; Task 15.1; Task 19.1; Week 10 tree) ·
`tasks/SUBMISSION_GUIDELINES.md` (Naming Convention) · `MARKING_GUIDE.md` (A1 formats,
Weeks 8–9 notes) · `course_outline.md` (Week 8 milestone, Week 8 task call-out, naming
line).

- [x] Applied — 2026-09-13

---

## Observed, not changing

- **Late-course attrition.** Weeks 10 and 11 were reached by four students each. The
  outline's graded gates (Weeks 3, 6, 9, 11) exist but were not enforced. This is a
  delivery question, not a document one.
- **School registry.** Arrived mid-course with one duplicated student. Item 1 makes
  admission numbers come from students directly, so the registry stops being the bridge.
