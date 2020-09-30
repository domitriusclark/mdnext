import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

import Navbar from '@components/Navbar';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
