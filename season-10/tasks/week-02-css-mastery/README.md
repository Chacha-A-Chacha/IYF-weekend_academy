# Week 2: CSS Mastery

> 📋 **Before You Start:** Read the [Submission Guidelines](../SUBMISSION_GUIDELINES.md) for repository naming, README requirements, and how to submit.
>
> **Repository Name:** `iyf-s10-week-02-{your-github-username}`

---

## Overview
This week you'll transform your HTML portfolio into a beautifully styled, responsive website. By the end, your portfolio will look professional on any device.

**Lessons:**
- Lesson 3: CSS Fundamentals & Box Model
- Lesson 4: Flexbox, Grid & Responsive Design

**Deliverable:** Fully responsive, styled portfolio site

---

## Lesson 3 Tasks

### Task 3.1: CSS Setup & Basic Styling 🟢
**Time:** 30 minutes

Create a `styles.css` file and link it to your portfolio pages.

**Setup:**
```html
<link rel="stylesheet" href="styles.css">
```

**Complete these exercises:**

1. **Reset default styles:**
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

2. **Set base typography:**
- Choose a font from [Google Fonts](https://fonts.google.com/)
- Set base font-size to 16px
- Set line-height to 1.6
- Define font colors

3. **Style headings:**
- Different sizes for h1-h6
- Consistent margins
- Font weight variations

**Reference:** [MDN: CSS First Steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

---

### Task 3.2: Box Model Mastery 🟡
**Time:** 40 minutes

Create `box-model-practice.html` to practice the box model.

**Exercise 1: Box Model Visualization**
Create 4 boxes showing:
- Content (background color)
- Padding (larger click area)
- Border (visible border)
- Margin (space between boxes)

**Exercise 2: Debug the Layout**
Fix this broken CSS (the boxes should be 300px wide total):

```css
/* This box ends up 340px wide - why? Fix it! */
.broken-box {
    width: 300px;
    padding: 20px;
    border: none;
}
```

**Exercise 3: Card Component**
Create a card with exact spacing:
- Card width: 300px total
- Padding: 20px
- Border: 1px solid gray
- Image at top (full width of card)
- Title with 15px margin-bottom
- Description text
- Button at bottom

**Reference:** [MDN: The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

---

### Task 3.3: Typography System 🟡
**Time:** 30 minutes

Create a typography system for your portfolio.

**Requirements:**

1. **Choose a font pairing:**
   - Heading font (e.g., Montserrat, Poppins)
   - Body font (e.g., Open Sans, Roboto)

2. **Create a type scale:**
   Use [Type Scale Calculator](https://typescale.com/)
   ```css
   :root {
       --font-xs: 0.75rem;    /* 12px */
       --font-sm: 0.875rem;   /* 14px */
       --font-base: 1rem;     /* 16px */
       --font-lg: 1.125rem;   /* 18px */
       --font-xl: 1.25rem;    /* 20px */
       --font-2xl: 1.5rem;    /* 24px */
       --font-3xl: 1.875rem;  /* 30px */
       --font-4xl: 2.25rem;   /* 36px */
   }
   ```

3. **Apply to your portfolio:**
   - h1: `--font-4xl`
   - h2: `--font-3xl`
   - h3: `--font-2xl`
   - Body: `--font-base`
   - Small text: `--font-sm`

---

### Task 3.4: Color Scheme 🟡
**Time:** 30 minutes

Create a color system using CSS custom properties.

**Use [Coolors](https://coolors.co/) to generate a palette with:**
- Primary color (main brand color)
- Secondary color (accent)
- Background color (light)
- Text color (dark)
- Muted/gray color

**Implement:**
```css
:root {
    --color-primary: #your-color;
    --color-secondary: #your-color;
    --color-background: #your-color;
    --color-text: #your-color;
    --color-muted: #your-color;
    
    /* Variations */
    --color-primary-light: #your-color;
    --color-primary-dark: #your-color;
}
```

**Apply colors to:**
- Headings
- Body text
- Links (with hover states)
- Buttons
- Backgrounds

---

## Lesson 4 Tasks

### Task 4.1: Flexbox Layout 🟡
**Time:** 45 minutes

**Before starting:** Complete [Flexbox Froggy](https://flexboxfroggy.com/) (all 24 levels)

**Exercise 1: Navigation Bar**
Create a responsive nav using Flexbox:
```
[Logo]                    [Home] [About] [Projects] [Contact]
```
- Logo on the left
- Links on the right
- Vertically centered
- Spacing between links

**Exercise 2: Card Row**
Create a row of 3 cards that:
- Are evenly spaced
- Have equal heights
- Wrap to next line on smaller screens

**Exercise 3: Footer Layout**
```
[About Column]  [Links Column]  [Contact Column]
              [Copyright - centered]
```

**Reference:** [CSS-Tricks: Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### Task 4.2: CSS Grid Layout 🟡
**Time:** 45 minutes

**Before starting:** Complete [Grid Garden](https://cssgridgarden.com/) (all 28 levels)

**Exercise 1: Photo Gallery**
Create a 3-column grid gallery:
```
[Image 1] [Image 2] [Image 3]
[Image 4] [Image 5] [Image 6]
```
- Equal column widths
- Consistent gap between items
- Images fill their grid cells

**Exercise 2: Magazine Layout**
Create this layout using Grid:
```
[Header - spans full width        ]
[Sidebar] [Main Content           ]
[Sidebar] [Main Content           ]
[Footer - spans full width        ]
```

**Exercise 3: Project Cards Grid**
On your projects page, display projects in a responsive grid:
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile

**Reference:** [CSS-Tricks: Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

### Task 4.3: Mobile-First Responsive Design 🔴
**Time:** 60 minutes

Make your entire portfolio responsive using mobile-first approach.

**Breakpoints:**
```css
/* Mobile first - base styles */

/* Tablet */
@media (min-width: 768px) {
    /* Tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
    /* Desktop styles */
}

/* Large Desktop */
@media (min-width: 1280px) {
    /* Large screen styles */
}
```

**Requirements for each page:**

**Navigation:**
- Mobile: Hamburger menu (can be CSS-only or basic)
- Desktop: Horizontal menu

**Home Page:**
- Mobile: Single column layout
- Desktop: Hero with side image

**Projects Page:**
- Mobile: 1 column of cards
- Tablet: 2 columns
- Desktop: 3 columns

**Contact Page:**
- Mobile: Full-width form
- Desktop: Form with sidebar

**Testing:**
Test at these widths: 320px, 768px, 1024px, 1440px

---

### Task 4.4: Polish & Refinement 🔴
**Time:** 45 minutes

Add finishing touches to your portfolio:

**1. Hover States:**
```css
/* Buttons */
.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* Links */
a:hover {
    color: var(--color-primary);
}

/* Cards */
.card:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
```

**2. Transitions:**
Add smooth transitions to interactive elements:
```css
.button {
    transition: all 0.3s ease;
}
```

**3. Focus States (Accessibility):**
```css
a:focus, button:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
}
```

**4. Final Checklist:**
- [ ] Consistent spacing throughout
- [ ] All interactive elements have hover/focus states
- [ ] Images are responsive (max-width: 100%)
- [ ] No horizontal scroll on any screen size
- [ ] Text is readable at all sizes

---

## Daily Challenges

### Day 1: Button Styles 🟢
Create 4 different button styles:
- Primary (solid background)
- Secondary (outline)
- Danger (red)
- Disabled (grayed out)
Each with hover states.

### Day 2: Card Component 🟢
Build a reusable card with:
- Image at top
- Title
- Description
- Tags/categories
- Call-to-action button
- Hover effect (shadow)

### Day 3: Hero Section 🟡
Create a hero section with:
- Full viewport height
- Background image with overlay
- Centered text
- Call-to-action button
- Responsive sizing

### Day 4: Form Styling 🟡
Style your contact form beautifully:
- Custom input styles
- Focus states
- Error states (use :invalid)
- Submit button
- Mobile-friendly

### Day 5: Footer Design 🟡
Create a multi-column footer:
- 4 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Include social icons (use text or emojis)
- Copyright row at bottom

---

## Week 2 Checklist

Before moving to Week 3, ensure you have:

- [ ] CSS file linked to all pages
- [ ] Typography system with CSS variables
- [ ] Color scheme with CSS variables
- [ ] Flexbox Froggy completed
- [ ] Grid Garden completed
- [ ] Responsive navigation
- [ ] Responsive project grid
- [ ] Mobile-friendly forms
- [ ] Hover and focus states
- [ ] All daily challenges completed
- [ ] Portfolio tested on mobile devices

**Milestone:** Your portfolio is now responsive and beautiful! 🎨
