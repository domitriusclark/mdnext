import React from "react";
import App from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";
import Code from '../components/code';

const components = {
  code: Code
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider>
        <MDXProvider components={components}>
          <CSSReset />
          <Flex margin="16px" direction="column" justifyContent="space-between">
            <Component {...pageProps} />
          </Flex >
        </MDXProvider>
      </ThemeProvider>
    );
  }
}




export default MyApp;