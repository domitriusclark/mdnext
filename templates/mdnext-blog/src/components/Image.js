import NextImage from 'next/image';

import { Box } from '@chakra-ui/react';
import { buildImageUrl } from 'cloudinary-build-url';
import useBlurredPlaceholder from '@hooks/useBlurredPlaceholder';

const isUrl = (string) =>
  string.match(
    /^(ht|f)tps?:\/\/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|\\^[\]`]+)?$/,
  );

function decideStorageDefault(string) {
  if (isUrl(string)) {
    return 'fetch';
  } else {
    return 'upload';
  }
}

export default function Image({
  src,
  cloudName,
  publicId,
  transforms,
  width,
  height,
  storageType,
  alt,
  blurPlaceholder,
  styles,
  ...rest
}) {
  const {
    blurredPlaceholderUrl,
    supportsLazyLoading,
    ref,
    inView,
  } = useBlurredPlaceholder(cloudName ? cloudName : '');

  const cloudinaryUrl =
    cloudName &&
    buildImageUrl(publicId, {
      cloud: {
        cloudName,
        storageType: storageType ? storageType : decideStorageDefault(publicId),
      },
      transformations: {
        ...transforms,
      },
    });

  if (blurPlaceholder) {
    return (
      <Box
        ref={!supportsLazyLoading ? ref : undefined}
        sx={{
          width: 'auto',
          background: `no-repeat url(${blurredPlaceholderUrl({
            publicId,
            width,
            height,
          })})`,
          ...styles,
        }}
      >
        {inView ||
          (supportsLazyLoading && (
            <NextImage
              src={cloudName ? cloudinaryUrl : src}
              width={width}
              height={height}
              quality={quality || '100'}
              alt={alt}
              {...rest}
            />
          ))}
      </Box>
    );
  } else {
    return (
      <Box sx={{ ...styles }}>
        <NextImage
          src={cloudName ? cloudinaryUrl : src}
          width={width}
          height={height}
          alt={alt}
          {...rest}
        />
      </Box>
    );
  }
}
