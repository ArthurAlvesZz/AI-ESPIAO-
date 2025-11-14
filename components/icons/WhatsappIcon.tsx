import React from 'react';

// The props will now be for an <img> element. We can use a general type to pass className etc.
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const WhatsappIcon: React.FC<ImageProps> = ({ className, ...props }) => (
  <img
    src="https://img.cdndsgni.com/preview/10000403.jpg"
    alt="WhatsApp Icon"
    // Combine existing className with rounded-full for a consistent circular look
    className={`rounded-full ${className || ''}`}
    {...props}
  />
);
