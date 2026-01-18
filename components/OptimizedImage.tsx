'use client';

import React, { useState } from 'react';
import Image, { ImageProps as NextImageProps, StaticImageData } from 'next/image';

export interface OptimizedImageProps extends Omit<NextImageProps, 'src' | 'alt'> {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({ 
  src, 
  alt, 
  onError, 
  className,
  priority = false,
  loading,
  ...props 
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  
  // Error fallback UI
  if (error) {
    return (
      <div 
        className={`image-error-fallback flex items-center justify-center bg-gray-100 text-gray-500 ${className || ''}`}
        style={{ 
          minHeight: props.height ? `${props.height}px` : '200px',
          minWidth: props.width ? `${props.width}px` : '200px'
        }}
      >
        <span className="text-sm">Failed to load image: {alt}</span>
      </div>
    );
  }
  
  // Determine loading behavior
  const loadingBehavior = priority ? 'eager' : (loading || 'lazy');
  
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      loading={loadingBehavior}
      onError={(e) => {
        setError(true);
        onError?.();
      }}
      {...props}
    />
  );
}

export default OptimizedImage;
