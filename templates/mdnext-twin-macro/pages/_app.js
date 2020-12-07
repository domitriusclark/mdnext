import { DefaultSeo } from 'next-seo';
import { GlobalStyles } from 'twin.macro';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';

import { Layout } from '@components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        title="Nextjs + MDX Starter pack"
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
      {/* This provider ensures our styles get distributed by Next */}
      <CacheProvider value={cache}>
        {/* This component applies the tailwind preflight base styles to our app */}
        <GlobalStyles />
        <Component {...pageProps} />;
      </CacheProvider>
    </Layout>
  );
}
