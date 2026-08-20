import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiCamera } from 'react-icons/fi';

const UploadScreen = ({ isDragging, onDragOver, onDragLeave, onDrop, onUpload }) => {
  const fileInputRef = useRef(null);

  return (
    <motion.div 
      className="upload-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="upload-container">
        <motion.div
          className={`upload-area ${isDragging ? 'dragging' : ''}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current.click()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => onUpload(e.target.files[0])}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <div className="upload-content">
            <motion.div 
              className="upload-icon-wrapper"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FiCamera className="upload-icon" />
            </motion.div>
            <h2>Drop your image here</h2>
            <p>or click to browse</p>
            <div className="upload-formats">
              <span>PNG</span>
              <span>JPG</span>
              <span>WEBP</span>
              <span>SVG</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UploadScreen;