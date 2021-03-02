import React from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';
import { useImage } from 'use-cloudinary';

export default function Image({
  src,
  cloudName,
  publicId,
  transforms,
  width,
  height,
  lazy,
  ...props
}) {
  const {
    generateImageUrl,
    blurredPlaceholderUrl,
    ref,
    supportsLazyLoading,
    inView,
  } = useImage(cloudName);

  // Not using Cloudinary
  if (!publicId) {
    // Try to lazy load all images when { lazy === true }
    if (lazy) {
      return (
        <div
          ref={!supportsLazyLoading ? ref : undefined}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {inView ||
            (supportsLazyLoading && (
              <ChakraImage src={src} loading="lazy" width="100%" {...props} />
            ))}
        </div>
      );
    } else {
      // Otherwise, just use the Chakra image component
      return <ChakraImage src={src} {...props} />;
    }

    // Or if you are using Cloudinary, it will move to here
  } else {
    // lazy load w/ a blurred placeholder of the image that's loading
    if (lazy) {
      return (
        <div
          ref={!supportsLazyLoading ? ref : undefined}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            background: `no-repeat url(${blurredPlaceholderUrl(
              publicId,
              width,
              height,
            )})`,
          }}
        >
          {inView ||
            (supportsLazyLoading && (
              <ChakraImage
                src={generateImageUrl({
                  delivery: { publicId },
                  transformation: { ...transforms },
                })}
                loading="lazy"
                width="100%"
                {...props}
              />
            ))}
        </div>
      );
    } else {
      // Just render the image
      return <ChakraImage src={url} width="100%" {...props} />;
    }
  }
}
