import { useInView } from 'react-intersection-observer';
import useNativeLazyLoading from '@charlietango/use-native-lazy-loading';
import { buildImageUrl } from 'cloudinary-build-url';

export default function useBlurredPlaceholder(cloudName) {
  const supportsLazyLoading = useNativeLazyLoading();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  function blurredPlaceholderUrl({ publicId, width = '', height = '' }) {
    if (!cloudName) {
      return;
    }

    return buildImageUrl(publicId, {
      cloud: {
        cloudName,
      },
      transformations: {
        crop: 'scale',
        width,
        height,
        effect: 'blur:1000',
        quality: 1,
        fetch: 'auto',
      },
    });
  }

  return {
    blurredPlaceholderUrl,
    supportsLazyLoading,
    ref,
    inView,
  };
}
