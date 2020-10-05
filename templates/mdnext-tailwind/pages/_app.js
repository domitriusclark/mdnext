import { DefaultSeo } from 'next-seo';
import '../src/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="Nextjs + MDX + Tailwind starter pack"
        description="This is an opinionated way to handle MDX from multiple sources in a Next project with some help styling from ChakraUI"
        url="www.whatever.com"
        ogImage={{
          url: 'www.whatever.com',
          title: 'OG Image title',
          description: 'Describe the OG image',
          image: ``,
          siteName: 'Your site name',
        }}
        twitter={{
          handle: '@domitriusclark',
          site: 'https://twitter.com/domitriusclark',
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}
