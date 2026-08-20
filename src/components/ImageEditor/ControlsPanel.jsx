import { AnimatePresence, motion } from 'framer-motion';
import { BiFilter } from 'react-icons/bi';
import { FiAperture, FiDownload, FiDroplet, FiRotateCw, FiSliders, FiSun, FiZoomIn } from 'react-icons/fi';

// All controls in one file to avoid import issues
const ControlsPanel = ({ 
  activeTab, 
  onTabChange,
  brightness,
  contrast,
  saturation,
  rotation,
  zoom,
  filter,
  isLoading,
  onBrightnessChange,
  onContrastChange,
  onSaturationChange,
  onRotationChange,
  onZoomChange,
  onFilterChange,
  onDownload
}) => {
  // Adjust Controls
  const AdjustControls = () => (
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

  // Filter Controls
  const FilterControls = () => {
    const filters = ['none', 'grayscale', 'sepia', 'invert', 'blur', 'hue-rotate'];
    
    const getFilterPreviewStyle = (filter) => {
      const styles = {
        none: '#f0f0f0',
        grayscale: 'linear-gradient(45deg, #666, #999)',
        sepia: 'linear-gradient(45deg, #8B7355, #CD9B75)',
        invert: 'linear-gradient(45deg, #000, #fff)',
        blur: 'linear-gradient(45deg, #ccc, #eee)',
        'hue-rotate': 'linear-gradient(45deg, #ff6b6b, #4ecdc4)'
      };
      return styles[filter] || styles.none;
    };

    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="filter-grid"
      >
        {filters.map((f) => (
          <motion.button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => onFilterChange(f)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              className="filter-preview" 
              style={{ background: getFilterPreviewStyle(f) }} 
            />
            <span>{f === 'none' ? 'Original' : f.charAt(0).toUpperCase() + f.slice(1)}</span>
          </motion.button>
        ))}
      </motion.div>
    );
  };

  // Transform Controls
  const TransformControls = () => (
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

  return (
    <div className="controls-panel">
      <div className="controls-tabs">
        <motion.button
          className={`tab-btn ${activeTab === 'adjust' ? 'active' : ''}`}
          onClick={() => onTabChange('adjust')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiSliders />
          <span>Adjust</span>
        </motion.button>
        <motion.button
          className={`tab-btn ${activeTab === 'filters' ? 'active' : ''}`}
          onClick={() => onTabChange('filters')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BiFilter />
          <span>Filters</span>
        </motion.button>
        <motion.button
          className={`tab-btn ${activeTab === 'transform' ? 'active' : ''}`}
          onClick={() => onTabChange('transform')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiRotateCw />
          <span>Transform</span>
        </motion.button>
      </div>

      <div className="controls-content">
        <AnimatePresence mode="wait">
          {activeTab === 'adjust' && <AdjustControls key="adjust" />}
          {activeTab === 'filters' && <FilterControls key="filters" />}
          {activeTab === 'transform' && <TransformControls key="transform" />}
        </AnimatePresence>
      </div>

      <div className="controls-actions">
        <motion.button
          className="download-btn"
          onClick={onDownload}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiDownload />
          {isLoading ? 'Processing...' : 'Download Image'}
        </motion.button>
      </div>
    </div>
  );
};

export default ControlsPanel;