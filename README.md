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

📄 License
MIT License - see LICENSE file

Developed by Ehan Siddique
