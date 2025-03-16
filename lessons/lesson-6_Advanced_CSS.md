# Advanced CSS Techniques: Box Model, Positioning, and Modern Layouts

## 1. The CSS Box Model

### Core Concept
Every HTML element is represented as a rectangular box with four parts:

- **Content**: The inner area where text and images appear
- **Padding**: Clear space between the content and the border
- **Border**: A line that surrounds the padding
- **Margin**: Clear space outside the border

```css
.box {
  /* Content dimensions */
  width: 300px;
  height: 200px;
  
  /* Padding (inside the border) */
  padding: 20px;
  
  /* Border */
  border: 2px solid black;
  
  /* Margin (outside the border) */
  margin: 30px;
}
```

### Box Sizing
By default, `width` and `height` control only the content area. The `box-sizing` property changes this:

```css
/* Default behavior - width applies to content only */
.content-box {
  box-sizing: content-box;
  width: 300px; /* Total width will be 300px + padding + border */
}

/* Better behavior - width includes padding and border */
.border-box {
  box-sizing: border-box;
  width: 300px; /* Total width will be exactly 300px */
}

/* Best practice - apply to all elements */
* {
  box-sizing: border-box;
}
```

## 2. CSS Positioning

### Position Properties

```css
/* Static - Default flow (not positioned) */
.static {
  position: static;
}

/* Relative - Positioned relative to its normal position */
.relative {
  position: relative;
  top: 20px;   /* Moves down 20px from normal position */
  left: 30px;  /* Moves right 30px from normal position */
}

/* Absolute - Positioned relative to nearest positioned ancestor */
.absolute {
  position: absolute;
  top: 0;      /* 0px from top of positioned parent */
  right: 0;    /* 0px from right of positioned parent */
}

/* Fixed - Positioned relative to viewport (stays in place during scroll) */
.fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* Sticky - Becomes fixed when it reaches a threshold during scrolling */
.sticky {
  position: sticky;
  top: 0;      /* Sticks at top of viewport when scrolled to */
}
```

### Z-Index
Controls the stacking order of positioned elements:

```css
.back {
  position: relative;
  z-index: 1;
}

.front {
  position: relative;
  z-index: 2; /* Higher z-index appears in front */
}
```

## 3. Flexbox Layout

### Container Properties

```css
.flex-container {
  display: flex;
  
  /* Direction of flex items */
  flex-direction: row;         /* Default: left to right */
  /* Other options: row-reverse, column, column-reverse */
  
  /* Wrapping behavior */
  flex-wrap: wrap;             /* Wrap to next line if needed */
  /* Other options: nowrap, wrap-reverse */
  
  /* Horizontal alignment (main axis) */
  justify-content: space-between;
  /* Other options: flex-start, flex-end, center, space-around, space-evenly */
  
  /* Vertical alignment (cross axis) */
  align-items: center;
  /* Other options: flex-start, flex-end, stretch, baseline */
  
  /* Alignment of multiple lines */
  align-content: space-between;
  /* Other options: flex-start, flex-end, center, space-around, stretch */
  
  /* Gap between items */
  gap: 20px;
}
```

### Item Properties

```css
.flex-item {
  /* Growth ratio (0 = don't grow) */
  flex-grow: 1;
  
  /* Shrink ratio (1 = can shrink) */
  flex-shrink: 1;
  
  /* Starting/base size */
  flex-basis: 250px;
  
  /* Shorthand for grow, shrink, basis */
  flex: 1 1 250px;
  
  /* Override container's align-items for this item */
  align-self: flex-start;
  
  /* Change order (default is 0) */
  order: 2;
}
```

## 4. CSS Grid Layout

### Container Properties

```css
.grid-container {
  display: grid;
  
  /* Define columns */
  grid-template-columns: 1fr 2fr 1fr;   /* Three columns of different widths */
  
  /* Define rows */
  grid-template-rows: 100px auto 100px;  /* Fixed, automatic, and fixed heights */
  
  /* Repeating patterns */
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  
  /* Minimum and maximum sizes */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive columns */
  
  /* Named grid areas */
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
    
  /* Spacing between cells */
  gap: 20px;                  /* Equal row and column gaps */
  row-gap: 20px;              /* Just row gaps */
  column-gap: 10px;           /* Just column gaps */
}
```

### Item Properties

```css
.grid-item {
  /* Placement by column lines */
  grid-column: 1 / 3;         /* Start at line 1, end at line 3 */
  
  /* Placement by row lines */
  grid-row: 2 / 4;            /* Start at line 2, end at line 4 */
  
  /* Placement by area name */
  grid-area: header;          /* Place in area named "header" */
  
  /* Spans */
  grid-column: span 2;        /* Span 2 columns */
  grid-row: span 3;           /* Span 3 rows */
}
```

## 5. Common Layout Patterns

### Centering with Flexbox

```css
.center-flex {
  display: flex;
  justify-content: center;    /* Horizontal center */
  align-items: center;        /* Vertical center */
  min-height: 100vh;          /* Full viewport height */
}
```

### Card Grid Layout

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
```

### Holy Grail Layout (Header, Footer, Sidebar, Main)

```css
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

## 6. Responsive Design with Modern CSS

### Media Queries with Grid

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Tablet layout */
@media (max-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile layout */
@media (max-width: 480px) {
  .responsive-grid {
    grid-template-columns: 1fr;
  }
}
```

### Flexbox Responsiveness

```css
.responsive-flex {
  display: flex;
  flex-wrap: wrap;
}

.flex-item {
  flex: 1 1 250px; /* Grow, shrink, and base width */
  min-width: 250px; /* Ensures minimum size */
}
```
