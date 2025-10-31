# AltCred Frontend

A modern, responsive website for AltCred - Alternative Credit Scoring Platform.

## Features

✨ **Smooth Animations**
- Ultra-smooth custom triangle cursor with sky-blue color
- Animated dotted background
- Fade-in animations on scroll
- Smooth scroll navigation

🎨 **Modern UI/UX**
- Dark theme with sky-blue accents
- Fully responsive design
- Interactive elements with hover effects
- Beautiful gradient text effects

🚀 **Performance Optimized**
- Hardware-accelerated animations
- Optimized cursor tracking
- Smooth scroll behavior
- Lazy loading animations

## File Structure

```
frontend/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── main.js        # JavaScript for interactions and cursor
├── assets/
│   └── logo.png       # AltCred logo
└── README.md          # This file
```

## Getting Started

### Option 1: Simple HTTP Server (Python)

```bash
cd frontend
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Simple HTTP Server (Node.js)

```bash
cd frontend
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Live Server (VS Code)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Direct File

Simply open `index.html` in your browser (some features may not work due to CORS).

## Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --sky-blue: #4FC3F7;
  --sky-blue-light: #81D4FA;
  --sky-blue-dark: #29B6F6;
  /* ... */
}
```

### Cursor Speed

Adjust cursor smoothness in `js/main.js`:

```javascript
// Faster cursor (less smooth)
cursorX = lerp(cursorX, mouseX, 0.3);  // Increase value

// Slower cursor (more smooth)
cursorX = lerp(cursorX, mouseX, 0.1);   // Decrease value
```

### Animation Speed

Modify animation durations in `css/style.css`:

```css
@keyframes dots-move {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 180px 180px;
  }
}
/* Change 180px to adjust speed */
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

Note: Custom cursor may not work on touch devices.

## Features Included

1. **Navigation Bar** - Fixed navbar with smooth scroll
2. **Hero Section** - Eye-catching introduction with score card
3. **Problem Overview** - Three-card layout explaining the problem
4. **Solution Section** - Detailed solution with interactive charts
5. **Dataset Explanation** - Comprehensive table of features
6. **Scoring Model** - Two approaches (Rule-based & ML)
7. **Score Segments** - Visual breakdown of score ranges
8. **Additional Features** - Grid of feature highlights
9. **Tech Stack** - Technology showcase
10. **CTA Section** - Call-to-action for users
11. **Footer** - Brand information

## Performance Tips

- All animations use `transform` and `opacity` for GPU acceleration
- Cursor uses `requestAnimationFrame` for smooth 60fps animation
- Intersection Observer API for efficient scroll animations
- Hardware-accelerated CSS transforms with `translate3d`

## Development

To modify content, edit `index.html`. All styling is in `css/style.css`, and all interactions are in `js/main.js`.

## License

MIT License - See LICENSE file in root directory.
