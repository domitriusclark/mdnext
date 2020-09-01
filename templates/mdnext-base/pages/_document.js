import NextDocument, { Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/core';
import React from 'react';

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="en">
        <Head></Head>
        <body>
          <ColorModeScript defaultMode="system" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
