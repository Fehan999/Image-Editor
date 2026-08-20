Image Editor - React App
A modern, feature-rich image editor built with React. Upload, edit, and download images with a beautiful dark-themed UI.

-- Features
Upload: Drag & drop or click to upload (PNG, JPG, WEBP, SVG)

Adjust: Brightness, Contrast, Saturation (0-200%)

Filters: Grayscale, Sepia, Invert, Blur, Hue Rotate

Transform: Rotation (0-360°), Zoom (50-200%)

Export: Download as PNG with original filename

Modern UI: Dark theme with glassmorphism & smooth animations

Responsive: Works on desktop, tablet, and mobile

-- Tech Stack
React 18

Framer Motion (Animations)

React Icons

HTML5 Canvas API

CSS3

-- Installation
bash

# Clone the repository

git clone https://github.com/Fehan999/Image-Editor.git

# Install dependencies

npm install

# Start development server

npm start

# Build for production

npm run build
📁 Project Structure
text
image-editor/
├── src/
│ ├── components/
│ │ └── ImageEditor/
│ │ ├── index.jsx # Main component
│ │ ├── ImageEditor.css # Styles
│ │ ├── UploadScreen.jsx # Upload UI
│ │ ├── EditorHeader.jsx # Header controls
│ │ ├── CanvasArea.jsx # Image canvas
│ │ ├── ControlsPanel.jsx # Main controls
│ │ ├── AdjustControls.jsx # Brightness/Contrast/Saturation
│ │ ├── FilterControls.jsx # Filters
│ │ ├── TransformControls.jsx # Rotation/Zoom
│ │ └── Footer.jsx # Footer credit
│ ├── hooks/
│ │ └── useImageEditor.js # Custom hook (logic)
│ ├── App.js
│ └── App.css
├── package.json
└── README.md
🎯 Usage
Upload: Click or drag image to upload

Edit: Use tabs to switch between controls

Adjust: Slide brightness, contrast, saturation

Filters: Click to apply filter effects

Transform: Rotate or zoom

Save: Click "Download Image" button

👨‍💻 Developer Guide
Architecture
The app uses a custom hook pattern (useImageEditor) to separate logic from UI:

javascript
// All state and logic in one place
const {
brightness, contrast, saturation,
handleImageUpload, handleDownload,
resetFilters
} = useImageEditor();
Key Components
Component Purpose
UploadScreen Handles file upload (drag & drop)
CanvasArea Renders and applies edits to image
ControlsPanel Manages tab switching
AdjustControls Brightness/Contrast/Saturation sliders
FilterControls Filter buttons grid
TransformControls Rotation & Zoom controls
How Image Processing Works
javascript
// Canvas processing in useImageEditor
const ctx = canvas.getContext('2d');
// 1. Draw image with transformations
ctx.translate(centerX, centerY);
ctx.rotate(rotation);
ctx.scale(zoom);
ctx.drawImage(image, -width/2, -height/2);

// 2. Apply pixel manipulation
const imageData = ctx.getImageData(0, 0, width, height);
// Loop through pixels and adjust RGB values
for (let i = 0; i < data.length; i += 4) {
data[i] = data[i] _ (brightness / 100); // Red
data[i+1] = data[i+1] _ (brightness / 100); // Green
data[i+2] = data[i+2] \* (brightness / 100); // Blue
}
ctx.putImageData(imageData, 0, 0);
Adding a New Feature
Example: Add a new filter

Add to filters array in FilterControls.jsx

Add style to filterMap in useImageEditor.js

javascript
// FilterControls.jsx
const filters = ['none', 'grayscale', 'new-filter'];

// useImageEditor.js
const filterMap = {
'new-filter': 'new-filter(100%)'
};
Customization
Change Colors: Update gradients in ImageEditor.css

css
--primary-gradient: linear-gradient(135deg, #667eea, #764ba2);
Responsive Breakpoints: Adjust in CSS

css
@media (max-width: 768px) { /_ Mobile styles _/ }
@media (max-width: 1024px) { /_ Tablet styles _/ }
-- Troubleshooting
Issue Solution
Module not found rm -rf node_modules && npm install
Canvas not updating Check canvasRef.current exists
Download fails Check browser console errors
-- Contributing
Fork the repo

Create branch: git checkout -b feature/NewFeature

Commit changes: git commit -m 'Add NewFeature'

Push: git push origin feature/NewFeature

Open Pull Request

📄 License
MIT License - see LICENSE file

Developed by Ehan Siddique
