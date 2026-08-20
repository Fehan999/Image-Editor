import React from 'react';
import { motion } from 'framer-motion';

const FilterControls = ({ currentFilter, onFilterChange }) => {
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
      {filters.map((filter) => (
        <motion.button
          key={filter}
          className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
          onClick={() => onFilterChange(filter)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="filter-preview" 
            style={{ background: getFilterPreviewStyle(filter) }} 
          />
          <span>{filter === 'none' ? 'Original' : filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default FilterControls;