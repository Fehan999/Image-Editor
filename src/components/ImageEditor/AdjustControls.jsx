import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiAperture, FiDroplet } from 'react-icons/fi';

const AdjustControls = ({ 
  brightness, 
  contrast, 
  saturation, 
  onBrightnessChange, 
  onContrastChange, 
  onSaturationChange 
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
          <FiSun />
          <label>Brightness</label>
          <span>{brightness}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => onBrightnessChange(Number(e.target.value))}
          className="slider"
          style={{
            background: `linear-gradient(to right, #667eea ${brightness}%, rgba(255,255,255,0.1) ${brightness}%)`
          }}
        />
      </div>

      <div className="control-item">
        <div className="control-header">
          <FiAperture />
          <label>Contrast</label>
          <span>{contrast}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="200"
          value={contrast}
          onChange={(e) => onContrastChange(Number(e.target.value))}
          className="slider"
          style={{
            background: `linear-gradient(to right, #667eea ${contrast}%, rgba(255,255,255,0.1) ${contrast}%)`
          }}
        />
      </div>

      <div className="control-item">
        <div className="control-header">
          <FiDroplet />
          <label>Saturation</label>
          <span>{saturation}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="200"
          value={saturation}
          onChange={(e) => onSaturationChange(Number(e.target.value))}
          className="slider"
          style={{
            background: `linear-gradient(to right, #667eea ${saturation}%, rgba(255,255,255,0.1) ${saturation}%)`
          }}
        />
      </div>
    </motion.div>
  );
};

export default AdjustControls;