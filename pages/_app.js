import {
  CSSReset,
  ColorModeProvider,
  GlobalStyle,
  ThemeProvider,
} from '@chakra-ui/core';
import {
  detectInitialColorMode,
  withPersistedTheme,
} from '@hooks/useThemePersistance';

import Navbar from '@components/Navbar';
import NextApp from 'next/app';
import SEO from '@components/SEO';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={withPersistedTheme(pageProps.initialColorMode)}>
      <SEO
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
      <ColorModeProvider defaultValue={pageProps.initialColorMode}>
        <CSSReset />
        <Navbar />
        <GlobalStyle />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export async function getInitialProps(props) {
  const {
    ctx,
    Component: { getInitialProps },
  } = props;

  const appProps = await NextApp.getInitialProps(props);

  const initialColorMode = detectInitialColorMode(ctx);

  const componentPageProps = getInitialProps ? await getInitialProps(ctx) : {};

  return {
    ...appProps,
    pageProps: {
      initialColorMode,
      ...componentPageProps,
    },
  };
}

App.getInitialProps = getInitialProps;
