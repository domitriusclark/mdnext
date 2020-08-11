import NextApp from "next/app";

import { cookieStorageManager, ChakraProvider } from "@chakra-ui/core";
import theme from "@chakra-ui/theme";

import Navbar from "@components/Navbar";
import SEO from "@components/SEO";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider
      resetCSS
      theme={theme}
      storageManager={cookieStorageManager(pageProps.cookies)}
    >
      <SEO
        title="Nextjs + MDX Starter pack"
        description="This is an opinionated way to handle MDX from multiple sources in a Next project with some help styling from ChakraUI"
        url="www.whatever.com"
        ogImage={{
          url: "www.whatever.com",
          title: "OG Image title",
          description: "Describe the OG image",
          image: ``,
          siteName: "Your site name",
        }}
        twitter={{
          handle: "@domitriusclark",
          site: "https://twitter.com/domitriusclark",
        }}
      />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export async function getInitialProps(props) {
  const {
    ctx,
    Component: { getInitialProps },
  } = props;

  const appProps = await NextApp.getInitialProps(props);

  const componentPageProps = getInitialProps ? await getInitialProps(ctx) : {};

  return {
    ...appProps,
    pageProps: {
      cookies: ctx.req.headers.cookie ?? "",
      ...componentPageProps,
    },
  };
}

App.getInitialProps = getInitialProps;
