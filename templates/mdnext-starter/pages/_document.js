import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

import Navbar from '@components/Navbar';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head></Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
