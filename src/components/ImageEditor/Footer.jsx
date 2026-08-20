import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <motion.footer 
      className="editor-footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="footer-content">
        <p>
          Designed & Developed with <FiHeart className="heart-icon" /> by 
          <span className="developer-name"> Ehan Siddique</span>
        </p>
        <div className="footer-divider"></div>
        <p className="footer-year">© {new Date().getFullYear()} Image Editor</p>
      </div>
    </motion.footer>
  );
};

export default Footer;