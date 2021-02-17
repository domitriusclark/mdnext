import { Chakra } from '@components/Chakra';
import { DefaultSeo } from 'next-seo';
import getShareImage from '@jlengstorf/get-share-image';

const ogImage = getShareImage({
  title: 'MDNext Blog Starter',
  tagline: 'All the power of MDX + Next without the boilerplate 🚀',
  cloudName: process.env.CLOUDNAME,
  imagePublicID: process.env.OG_IMAGE_BASE,
  titleFont: 'Montserrat',
  taglineFont: 'Montserrat',
  textColor: '000000',
});

const App = ({ Component, pageProps, cookies }) => {
  return (
    <Chakra cookies={cookies}>
      <DefaultSeo
        title="MDNext Blog Starter"
        description="Build your blog with best in class tools from the NextJS ecosystem. "
        url="https://mdnext.dev"
        openGraph={{
          title: 'MDNext',
          description: 'Base OG Image for MDNext',
          images: [
            {
              url: ogImage,
              width: 800,
              height: 418,
              alt: 'MDNext Base ogImage',
            },
          ],
        }}
        twitter={{
          handle: '@domitriusclark',
          site: 'https://twitter.com/domitriusclark',
          title: 'MDNext Blog Starter',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </Chakra>
  );
};

export default App;

export { getServerSideProps } from '@components/Chakra';
