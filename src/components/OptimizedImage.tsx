import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  priority = false,
  onError,
  loading = 'lazy',
  width,
  height
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate a simple blurred placeholder based on the image type
  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    
    // Create a simple gradient placeholder based on image context
    if (src.includes('hero')) {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI4MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDU5NjY5O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwZDk0ODg7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iODAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8L3N2Zz4K';
    } else if (src.includes('product') || src.includes('amazon')) {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjlmYWZiIi8+CjxyZWN0IHg9Ijc1IiB5PSI3NSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIxNTAiIGZpbGw9IiMxMGI5ODEiIG9wYWNpdHk9IjAuMiIgcng9IjEwIi8+Cjwvc3ZnPgo=';
    } else {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjlmYWZiIi8+CjxyZWN0IHg9IjE1MCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPgo=';
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    if (onError) onError();
  };

  useEffect(() => {
    // For priority images, start loading immediately
    if (priority && imgRef.current) {
      const img = new window.Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
    }
  }, [src, priority]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder image */}
      {!imageLoaded && !imageError && (
        <img
          src={getPlaceholder()}
          alt=""
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            src.includes('product') || src.includes('amazon') ? 'object-contain p-4' : 'object-cover'
          } ${className}`}
          style={{ filter: 'blur(5px)', transform: 'scale(1.1)' }}
        />
      )}
      
      {/* Main image */}
      {!imageError && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full transition-opacity duration-500 ${
            src.includes('product') || src.includes('amazon') ? 'object-contain' : 'object-cover'
          } ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading={priority ? 'eager' : loading}
          onLoad={handleImageLoad}
          onError={handleImageError}
          width={width}
          height={height}
        />
      )}
      
      {/* Error fallback */}
      {imageError && (
        <div className={`w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center ${className}`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-[#0089CF] font-bold text-xl">N</span>
            </div>
            <p className="text-[#0089CF] font-medium">Nutriota</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;