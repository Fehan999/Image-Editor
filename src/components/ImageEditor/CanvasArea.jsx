import { motion } from 'framer-motion';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';

const CanvasArea = ({ canvasRef, containerRef, zoom, onZoomIn, onZoomOut }) => {
  return (
    <div className="canvas-container" ref={containerRef}>
      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          className="editor-canvas"
        />
        <div className="canvas-overlay">
          <div className="zoom-controls">
            <motion.button 
              onClick={onZoomOut}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="zoom-btn"
            >
              <FiZoomOut />
            </motion.button>
            <span className="zoom-value">{zoom}%</span>
            <motion.button 
              onClick={onZoomIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="zoom-btn"
            >
              <FiZoomIn />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasArea;