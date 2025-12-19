# Canva Homepage Clone (HTML + CSS)

This project is a front-end clone of the **Canva homepage**, created as a final web development project using **only HTML and CSS**.  
The goal of this project was to replicate the visual layout and user interface of Canva while keeping the implementation simple, clean, and suitable for a student-level submission.

> ⚠️ This project is for **educational purposes only**.  
> All brand names, logos, and media belong to their respective owners.

---

## 🚀 Features

- Full-page **blue to white gradient background**
- Sticky navigation bar with **click-to-open dropdown menus**
- **Pure CSS dropdowns** (no JavaScript used)
- Hero section with **video instead of image**
- Custom **Play / Pause button** on video (no timeline bar)
- Explore section with category tabs and feature cards
- Clean and simplified **multi-column footer**
- Fully responsive layout (desktop + mobile)
- No JavaScript, no framework, no WebKit hacks

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
  - Flexbox
  - Grid
  - Gradients
  - Pseudo-elements
  - Checkbox & radio button hacks

---

## 🎬 Custom Video Controls (Important)

Native HTML video controls cannot be partially customized (for example, removing only the time bar).  
To achieve a Canva-like experience:

- Native controls were **disabled**
- A **custom play/pause button** was built using:
  - `<input type="checkbox">`
  - `<label>` overlay
  - CSS pseudo-elements

This allows:
- Play / Pause functionality
- No timeline bar
- No JavaScript
- Clean, professional UI

---

## 📂 Project Structure
canva-clone/
│
├── index.html
├── style.css
├── README.md
└── images/
    ├── canva_jadu_dadu_hin_16_9.mp4
    └── video-poster.png

---

## 📌 Key UI Components

### Navigation Bar
- Logo
- Six main menu items
- Click-based dropdown panels
- Only one dropdown opens at a time (radio-button logic)

### Hero Section
- Text content on the left
- Video preview on the right
- Custom circular play/pause button overlay

### Explore Section
- Rounded category selector bar
- AI feature cards with gradients

### Footer
- Simplified multi-column layout
- Social links
- Language indicator
- Privacy and Terms

---

## 📱 Responsiveness

- Desktop-first design
- Navigation simplified on smaller screens
- Flexible layout using percentage widths and media queries

---

## 🧠 Learning Outcomes

Through this project, I learned:

- How to structure large webpages using semantic HTML
- Advanced CSS layout techniques
- Building interactive UI components **without JavaScript**
- Handling real-world design limitations
- Writing clean, maintainable front-end code

---

## 📄 Disclaimer

This project is a **UI clone** created strictly for learning and academic purposes.  
It does not represent the actual Canva website and is not intended for commercial use.

---

## 👨‍💻 Author

**Varun**  
Final Web Development Project  
HTML + CSS
