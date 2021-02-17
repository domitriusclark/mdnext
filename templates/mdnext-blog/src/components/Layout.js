import { Container } from '@chakra-ui/react';
import Navbar from '@components/Navbar';
import SEO from '@components/SEO';

export function Layout({ title, description, twitter, openGraph, children }) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        twitter={twitter}
        openGraph={openGraph}
      />
      <Navbar />
      <Container maxW="lg">{children}</Container>
    </>
  );
}
