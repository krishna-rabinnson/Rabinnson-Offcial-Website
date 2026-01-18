import React from "react";
import { OptimizedImage } from "../OptimizedImage";

interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    fill?: boolean;
}

const Image: React.FC<ImageProps> = ({ 
    src, 
    alt = "Image", 
    className = "", 
    width,
    height,
    priority = false,
    fill = false
}) => {
    // If neither width/height nor fill is provided, use fill mode
    const shouldUseFill = fill || (!width && !height);
    
    return (
        <OptimizedImage
            src={src}
            alt={alt}
            className={className}
            priority={priority}
            {...(shouldUseFill ? { fill: true } : { width, height })}
        />
    );
};

export default Image;
