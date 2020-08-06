import NextApp from 'next/app';

import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  GlobalStyle,
} from "@chakra-ui/core"

import {
  withPersistedTheme,
  detectInitialColorMode,
} from '@hooks/useThemePersistance';

import Navbar from '@components/navbar'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={withPersistedTheme(pageProps.initialColorMode)}>
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
    Component: { getInitialProps }
  } = props;

  const appProps = await NextApp.getInitialProps(props);

  const initialColorMode = detectInitialColorMode(ctx);

  const componentPageProps = getInitialProps ? await getInitialProps(ctx) : {};

  return {
    ...appProps,
    pageProps: {
      initialColorMode,
      ...componentPageProps
    }
  }
};

App.getInitialProps = getInitialProps;
