# Artist Portfolio — Setup Guide

## Folder structure

```
artist-portfolio/
├── index.html              ← the whole site
├── style.css               ← all styling
├── main.js                 ← navigation, lightbox, form
├── README.md               ← you're here
└── images/
    ├── nav/                ← images used AS the nav buttons
    │   ├── nav-gallery.png     ← shown on the Gallery card
    │   ├── nav-about.png       ← shown on the About card
    │   ├── nav-commissions.png ← shown on the Commissions card
    │   └── nav-send.png        ← tiny image on the send button
    ├── gallery/            ← your artwork for the gallery grid
    │   ├── piece-01.png
    │   ├── piece-02.png
    │   └── ...
    └── about/
        └── portrait.png    ← photo or art piece for your About page
```

---

## How to add / swap images

### Nav buttons (the big art cards on the home screen)
Drop any image you want into `images/nav/` and name it exactly:
- `nav-gallery.png` — the Gallery button
- `nav-about.png` — the About button
- `nav-commissions.png` — the Commissions button
- `nav-send.png` — the tiny icon on the send button (44×44 works great)

These can be JPGs too — just change the extension in `index.html`.

### Gallery pieces
Drop your artwork into `images/gallery/` named `piece-01.png`, `piece-02.png`, etc.
To add more pieces, copy one of the `<div class="gallery-item">` blocks in `index.html` and update the `src` and `alt` attributes.

### About portrait
Drop your photo (or any art) into `images/about/portrait.png`.

---

## Personalise the text

In `index.html`, search for and replace:
- `Your Name` — your name (appears twice: page title + `<h1>`)
- `your@email.com` — your real email (in `main.js` too)
- The About paragraph — write your own bio

---

## Going live
Upload the whole `artist-portfolio/` folder to any static host:
- **Netlify** (drag-and-drop the folder at netlify.com) — free
- **GitHub Pages** — free

No build step required. It's plain HTML/CSS/JS.

---

## Tips
- Nav card images look best in **portrait orientation (3:4 ratio)** — like a canvas
- Gallery images look best **square (1:1)**
- Any format works: `.png`, `.jpg`, `.webp`
- The site is fully mobile-responsive
