
# School Timetable Implementation Guide

![School Timetable](timetable_photo.jpeg "2024/2025 School Timetable")


---

### **Objective**
Recreate the 2024/2025 academic year timetable as shown in the image using HTML and CSS. Ensure the final files are properly organized for submission. This assignment is designed to test your knowledge of HTML tables, CSS styling, and accessibility.

---

### **Layout Specifications**

#### **Structure**
1. **Fixed Layout**: The timetable should be centered on the page with consistent dimensions. It does not need to be responsive, as breaking it down into smaller pieces would reduce readability.
2. **Columns**:
   - **Days** (MON-FRI): Narrow width.
   - **Time Slots** (13 periods): Equal width.
   - **Break/Lunch/Activities**: Narrower widths.
3. **Rows**:
   - **Header Row**: Time slots (8:00-4:00).
   - **Content Rows**: Yr. 7-11 for each day.

#### **Merging**
1. **Vertical**: Breaks, lunch, and end activities span multiple year groups.
2. **Horizontal**: Combined subjects or periods span across columns.
   - **Note**: You will need to figure out how to merge cells using `rowspan` and `colspan` based on the image.

---

### **Styling Guidelines**
1. **Borders**: Uniform, no double borders.
2. **Text**:
   - **Font**: Sans-serif, centered alignment.
   - **Sizes**: Larger for headers, consistent for content.
3. **Spacing**: Equal padding and consistent vertical alignment.
4. **Highlighting**: Use distinct styles for breaks and end activities.
   - **Note**: You are expected to determine the exact styling based on the image.

---

### **Accessibility Considerations**
1. **Table Headers**: Use `<th>` tags for headers and specify `scope="col"` or `scope="row"` to improve screen-reader compatibility.
2. **Alt Text for Image**: Add `alt` text to the timetable preview image in the `README.txt` file.
3. **Semantic HTML**: Ensure the HTML structure is semantic and logical (e.g., use `<thead>` for headers and `<tbody>` for content).

---

### **Implementation Options**
1. **HTML Tables**:
   - Use `<table>`, `<thead>`, and `<tbody>` elements.
   - Merge cells using `rowspan` and `colspan` as needed.
2. **CSS Grid** (Optional):
   - If you prefer, you can use CSS Grid to create the layout, but this is not required.

---

### **File Submission**

#### **File Structure**
Your project files should be organized as follows:

```
firstName_lastName/
   │
   ├── index.html      # Main HTML file
   ├── style.css       # CSS stylesheet
   ├── README.md      # Brief description of the project and accessibility considerations
   └── timetable_preview.png # Screenshot of your timetable
```

#### **Naming and Submission**
1. **File Name**: Compress your folder into a `.zip` file.
2. **Zip File Name**: Use your first and last name as the file name.
   - Example: `Martin_Maina.zip`
3. **Contents**: Ensure all files are included and the structure is maintained.

---

### **Validation Instructions**
1. **HTML Validation**:
   - Use the [W3C Markup Validation Service](https://validator.w3.org/) to validate your HTML file.
   - Fix any errors or warnings before submission.
2. **CSS Validation**:
   - Use the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to validate your CSS file.
   - Fix any errors or warnings before submission.

---


### **Grading Rubric**

The assignment will be graded based on the following criteria. Points are allocated based on the correctness, completeness, and quality of the implementation. If you choose to use **CSS Grid** instead of HTML tables, the rubric will adjust accordingly to evaluate your approach.

---

| **Criteria**               | **Points** | **Description**                                                                 |
|----------------------------|------------|---------------------------------------------------------------------------------|
| **HTML Structure**          | 20         | Proper use of semantic HTML elements. For tables: `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>`. For CSS Grid: Proper use of `<div>` or other semantic elements. |
| **Layout Implementation**   | 30         | **For Tables**: Correct use of `rowspan` and `colspan` to merge cells as shown in the image. <br> **For CSS Grid**: Correct use of `grid-template-areas`, `grid-row`, and `grid-column` to replicate the layout. |
| **CSS Styling**             | 20         | Consistent styling, including borders, fonts, spacing, and highlighting. Applies to both tables and CSS Grid implementations. |
| **Accessibility**           | 15         | Use of `<th>` with `scope` for tables or ARIA roles for CSS Grid. Semantic HTML and alt text for the image are required for both approaches. |
| **File Structure**          | 10         | Proper organization of files and submission in a zipped folder. Applies to all students. |
| **Validation**              | 5          | HTML and CSS files pass validation with no errors. Applies to all students. |

---

### **Detailed Breakdown of Criteria**

#### **1. HTML Structure (20 Points)**
- **Tables**: 
  - Correct use of `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` elements.
  - Logical structure that matches the timetable layout.
- **CSS Grid**:
  - Proper use of semantic HTML elements like `<section>`.
  - Logical structure that matches the timetable layout.

#### **2. Layout Implementation (30 Points)**
- **Tables**:
  - Correct use of `rowspan` and `colspan` to merge cells for breaks, lunch, and activities.
  - Accurate replication of the timetable layout as shown in the image.
- **CSS Grid**:
  - Correct use of `grid-template-areas`, `grid-row`, and `grid-column` to replicate the layout.
  - Accurate replication of the timetable layout as shown in the image.

#### **3. CSS Styling (20 Points)**
- **Applies to Both Tables and CSS Grid**:
  - Consistent styling for borders, fonts, spacing, and alignment.
  - Distinct styles for breaks, lunch, and activities.
  - Centered text and uniform padding throughout the timetable.

#### **4. Accessibility (15 Points)**
- **Tables**:
  - Use of `<th>` with `scope="col"` or `scope="row"` for headers.
  - Semantic HTML structure for screen-reader compatibility.
- **CSS Grid**:
  - Use of ARIA roles (e.g., `role="grid"`, `role="row"`, `role="cell"`) for accessibility.
  - Semantic HTML structure for screen-reader compatibility.
- **Both**:
  - Alt text for the timetable preview image in the `README.txt` file.

#### **5. File Structure (10 Points)**
- Proper organization of files:
  - `index.html`
  - `style.css`
  - `README.txt`
  - `timetable_preview.png`
- Submission in a zipped folder named correctly (e.g., `Martin_Maina.zip`).

#### **6. Validation (5 Points)**
- HTML and CSS files must pass validation using:
  - [W3C Markup Validation Service](https://validator.w3.org/) for HTML.
  - [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) for CSS.
- No errors or warnings should be present in the final submission.

---

---

### **Deliverables**
1. **Complete HTML and CSS Files**: Matching the layout and content of the provided timetable.
2. **README.txt**: Brief description of the project and accessibility considerations.
3. **Timetable Preview Screenshot**: A screenshot of your timetable.
4. **Zipped Folder**: Properly named and structured for submission.

---

### **Notes for Students**
- This assignment is designed to test your ability to recreate a fixed layout using HTML and CSS.
- Some aspects, such as cell merging and styling, are left for you to figure out based on the image.
- Focus on creating a clean, accessible, and well-structured timetable.

---


Here’s a revised version of the **Grading Rubric** section, including considerations for students who might choose to use **CSS Grid** instead of HTML tables. The rubric now accounts for both implementation options while maintaining fairness and clarity.

---

### **Additional Notes**
- **CSS Grid Bonus (Optional)**: If you choose to use CSS Grid and implement it flawlessly, you may receive up to **5 bonus points** for creativity and advanced CSS usage. This is optional and not required.
- **Partial Credit**: Partial credit will be awarded for partially correct implementations (e.g., some cells merged correctly, some styling applied, etc.).
- **Deductions**: Points will be deducted for:
  - Missing or incorrect file structure.
  - Accessibility issues (e.g., missing `<th>` or ARIA roles).
  - Validation errors in HTML or CSS.

