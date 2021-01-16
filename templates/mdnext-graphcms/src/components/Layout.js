import { Container } from '@chakra-ui/react';
import Navbar from '@components/Navbar';
import SEO from '@components/SEO';

export default function Layout({ props, children }) {
  return (
    <>
      <SEO {...props} />
      <Navbar />
      <Container maxW="lg">{children}</Container>
    </>
  );
}
