import { motion } from 'framer-motion';
import { FiArrowLeft, FiRefreshCw } from 'react-icons/fi';

const EditorHeader = ({ imageName, originalImage, onBack, onReset }) => {
  return (
    <div className="editor-header">
      <motion.button 
        className="back-btn"
        onClick={onBack}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiArrowLeft />
        <span>New Image</span>
      </motion.button>
      
      <div className="header-info">
        <span className="image-name">{imageName || 'Untitled'}</span>
        <span className="image-size">
          {originalImage ? `${originalImage.width}×${originalImage.height}` : ''}
        </span>
      </div>
      
      <motion.button 
        className="reset-btn"
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiRefreshCw />
        <span>Reset</span>
      </motion.button>
    </div>
  );
};

export default EditorHeader;