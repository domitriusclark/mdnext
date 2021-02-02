import Navbar from '@components/Navbar';
import SEO from '@components/SEO';

export default function Layout({ props, children }) {
  return (
    <>
      <SEO {...props} />
      <Navbar />
      <div style={{ maxWidth: "32rem" }}>{children}</div>
    </>
  );
}
