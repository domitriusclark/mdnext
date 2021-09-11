import { Image as ChakraImage } from '@chakra-ui/react';
import Code from '@components/Code';
import { H1, H2, H3, H4, H5, H6, P } from '@components/Typography';

import { useImage } from 'use-cloudinary';

// You can replace this with our custom built Image component if you'd like
function Image(props) {
  const { generateImageUrl } = useImage('mdnextjs');

  const cloudinaryUrl = generateImageUrl({
    delivery: {
      publicId: props.src,
      storageType: 'fetch',
    },
    transformation: [
      {
        format: 'auto',
        quality: 'auto',
      },
    ],
  });

  return (
    <ChakraImage
      src={cloudinaryUrl}
      borderRadius="8px"
      margin="0 auto"
      {...props}
    />
  );
}

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  code: Code,
  img: Image,
};
