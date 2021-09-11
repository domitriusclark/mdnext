import NextImage from 'next/image';
import { useImage } from 'use-cloudinary';
import { chakra } from '@chakra-ui/react';

const ChakraNextImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
    ].includes(prop),
});

export default function Image({
  // Cloudinary Props
  publicId,
  transformations,
  cloudName,
  storageType,

  // Next Image props
  src,
  width,
  height,
  alt,

  // Everything else
  ...rest
}) {
  const { generateImageUrl } = useImage(cloudName);

  const cloudinaryUrl =
    cloudName &&
    generateImageUrl({
      delivery: {
        publicId: props.src,
        storageType: 'fetch',
      },

      // Auto apply crop to size provided by width & height props
      transformation: [
        {
          crop: 'scale',
          width,
          height,
        },
        // Auto apply best format and quality transformations -- tweak where needed
        {
          format: 'auto',
          quality: 'auto',
        },
      ],
    });

  return (
    <Box pos="relative" cursor="pointer" {...rest}>
      <ChakraNextImage
        w="auto"
        h="auto"
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(60, 60))}`}
        src={cloudinaryUrl !== undefined ? cloudinaryUrl : src}
        alt={alt}
      />
    </Box>
  );
}
