import tw from 'twin.macro';

import Navbar from '@components/Navbar';
import SEO from '@components/SEO';

export function Layout({ props, children }) {
  return (
    <>
      <SEO {...props} />
      <Navbar />
      <div tw="flex justify-center px-4 lg:px-0">{children}</div>
    </>
  );
}
