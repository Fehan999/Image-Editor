import { useImageEditor } from '../hooks/useImageEditor';
import './ImageEditor.css';
import CanvasArea from './ImageEditor/CanvasArea';
import ControlsPanel from './ImageEditor/ControlsPanel';
import EditorHeader from './ImageEditor/EditorHeader';
import Footer from './ImageEditor/Footer';
import UploadScreen from './ImageEditor/UploadScreen';

const ImageEditor = () => {
  const {
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
    setBrightness,
    setContrast,
    setSaturation,
    setRotation,
    setZoom,
    setFilter,
    setActiveTab,
    setIsDragging,
    handleImageUpload,
    handleDownload,
    resetFilters,
    handleZoomIn,
    handleZoomOut,
    clearImage,
  } = useImageEditor();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  if (!image) {
    return (
      <>
        <UploadScreen
          isDragging={isDragging}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onUpload={handleImageUpload}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="editor-screen">
        <div className="editor-wrapper">
          <EditorHeader
            imageName={imageName}
            originalImage={originalImage}
            onBack={clearImage}
            onReset={resetFilters}
          />

          <div className="editor-content">
            <CanvasArea
              canvasRef={canvasRef}
              containerRef={containerRef}
              zoom={zoom}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
            />

            <ControlsPanel
              activeTab={activeTab}
              onTabChange={setActiveTab}
              brightness={brightness}
              contrast={contrast}
              saturation={saturation}
              rotation={rotation}
              zoom={zoom}
              filter={filter}
              isLoading={isLoading}
              onBrightnessChange={setBrightness}
              onContrastChange={setContrast}
              onSaturationChange={setSaturation}
              onRotationChange={setRotation}
              onZoomChange={setZoom}
              onFilterChange={setFilter}
              onDownload={handleDownload}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ImageEditor;