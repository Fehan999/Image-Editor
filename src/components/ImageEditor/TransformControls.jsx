import { motion } from 'framer-motion';
import { FiRotateCw, FiZoomIn } from 'react-icons/fi';

const TransformControls = ({ 
  rotation, 
  zoom, 
  onRotationChange, 
  onZoomChange 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="control-group"
    >
      <div className="control-item">
        <div className="control-header">
          <FiRotateCw />
          <label>Rotation</label>
          <span>{rotation}°</span>
        </div>
        <input
          type="range"
          min="0"
          max="360"
          value={rotation}
          onChange={(e) => onRotationChange(Number(e.target.value))}
          className="slider"
          style={{
            background: `linear-gradient(to right, #667eea ${(rotation/360)*100}%, rgba(255,255,255,0.1) ${(rotation/360)*100}%)`
          }}
        />
      </div>

      <div className="control-item">
        <div className="control-header">
          <FiZoomIn />
          <label>Zoom</label>
          <span>{zoom}%</span>
        </div>
        <input
          type="range"
          min="50"
          max="200"
          value={zoom}
          onChange={(e) => onZoomChange(Number(e.target.value))}
          className="slider"
          style={{
            background: `linear-gradient(to right, #667eea ${(zoom-50)/150*100}%, rgba(255,255,255,0.1) ${(zoom-50)/150*100}%)`
          }}
        />
      </div>
    </motion.div>
  );
};

export default TransformControls;