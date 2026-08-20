import { useEffect, useRef, useState } from 'react';

export const useImageEditor = () => {
  const [image, setImage] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [filter, setFilter] = useState('none');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('adjust');
  const [isDragging, setIsDragging] = useState(false);
  const [imageName, setImageName] = useState('');

  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Apply filters and effects
  useEffect(() => {
    if (image) {
      applyFilters();
    }
  }, [image, brightness, contrast, saturation, rotation, zoom, filter]);

  const applyFilters = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!image) return;

    const containerWidth = containerRef.current?.clientWidth || 800;
    const containerHeight = containerRef.current?.clientHeight || 600;
    
    let width, height;
    const aspectRatio = image.width / image.height;
    
    if (aspectRatio > containerWidth / containerHeight) {
      width = containerWidth;
      height = containerWidth / aspectRatio;
    } else {
      height = containerHeight;
      width = containerHeight * aspectRatio;
    }

    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((rotation * Math.PI) / 180);
    
    const scale = zoom / 100;
    ctx.scale(scale, scale);
    
    ctx.drawImage(
      image,
      -image.width / 2,
      -image.height / 2,
      image.width,
      image.height
    );
    
    ctx.restore();

    // Apply filters
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Brightness
      data[i] = Math.min(255, data[i] * (brightness / 100));
      data[i + 1] = Math.min(255, data[i + 1] * (brightness / 100));
      data[i + 2] = Math.min(255, data[i + 2] * (brightness / 100));

      // Contrast
      const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
      data[i] = Math.min(255, Math.max(0, factor * (data[i] - 128) + 128));
      data[i + 1] = Math.min(255, Math.max(0, factor * (data[i + 1] - 128) + 128));
      data[i + 2] = Math.min(255, Math.max(0, factor * (data[i + 2] - 128) + 128));

      // Saturation
      const gray = 0.2989 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      data[i] = Math.min(255, gray + (data[i] - gray) * (saturation / 100));
      data[i + 1] = Math.min(255, gray + (data[i + 1] - gray) * (saturation / 100));
      data[i + 2] = Math.min(255, gray + (data[i + 2] - gray) * (saturation / 100));
    }

    ctx.putImageData(imageData, 0, 0);

    // Apply CSS filters
    const filterMap = {
      none: 'none',
      grayscale: 'grayscale(100%)',
      sepia: 'sepia(100%)',
      invert: 'invert(100%)',
      blur: 'blur(5px)',
      'hue-rotate': 'hue-rotate(180deg)',
    };

    canvas.style.filter = filterMap[filter] || 'none';
  };

  const handleImageUpload = (file) => {
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          setOriginalImage(img);
          setImage(img);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);
    const canvas = canvasRef.current;
    try {
      const link = document.createElement('a');
      link.download = imageName ? `edited-${imageName}` : 'edited-image.png';
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Download failed:', error);
    }
    setIsLoading(false);
  };

  const resetFilters = () => {
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
    setRotation(0);
    setZoom(100);
    setFilter('none');
  };

  const handleZoomIn = () => setZoom(Math.min(200, zoom + 10));
  const handleZoomOut = () => setZoom(Math.max(50, zoom - 10));

  const clearImage = () => {
    setImage(null);
    setOriginalImage(null);
    resetFilters();
  };

  return {
    // State
    image,
    originalImage,
    brightness,
    contrast,
    saturation,
    rotation,
    zoom,
    filter,
    isLoading,
    activeTab,
    isDragging,
    imageName,
    canvasRef,
    containerRef,
    
    // Setters
    setBrightness,
    setContrast,
    setSaturation,
    setRotation,
    setZoom,
    setFilter,
    setActiveTab,
    setIsDragging,
    
    // Actions
    handleImageUpload,
    handleDownload,
    resetFilters,
    handleZoomIn,
    handleZoomOut,
    clearImage,
  };
};