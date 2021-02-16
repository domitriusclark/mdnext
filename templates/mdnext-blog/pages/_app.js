import { Chakra } from '@components/Chakra';
import { DefaultSeo } from 'next-seo';
import getShareImage from '@jlengstorf/get-share-image';

const socialImage = getShareImage({
  title,
  tagline: 'A test of sorts.',
  cloudName: process.env.CLOUDINARY_USER_ID,
  imagePublicID: process.env.CLOUDINARY_IMAGE_ID,
  titleFont: 'Montserrat',
  taglineFont: 'Montserrat',
  textColor: '000000',
});

const App = ({ Component, pageProps, cookies }) => {
  return (
    <Chakra cookies={cookies}>
      <DefaultSeo
        title="Nextjs + MDX Starter pack"
        description="This is an opinionated way to handle MDX from multiple sources in a Next project with some help styling from ChakraUI"
        url="www.whatever.com"
        openGraph={{
          title: 'Nextjs + MDX Starter pack',
          description: 'MDNext Title Card',
          images: [
            {
              url: socialImage,
              width: 800,
              height: 418,
              alt: 'Nextjs + MDX Starter pack',
            },
          ],
        }}
        twitter={{
          handle: '@domitriusclark',
          site: 'https://twitter.com/domitriusclark',
          title: 'Nextjs + MDX Starter pack',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Chakra>
  );
};

export default App;

export { getServerSideProps } from '@components/Chakra';
