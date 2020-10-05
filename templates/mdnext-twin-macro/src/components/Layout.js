import tw from 'twin.macro';

import Navbar from '@components/Navbar';
import SEO from '@components/SEO';

export function Layout({ props, children }) {
  return (
    <>
      <SEO {...props} />
      <Navbar />
      <div tw="bg-gray-200 min-h-screen">{children}</div>
    </>
  );
}
