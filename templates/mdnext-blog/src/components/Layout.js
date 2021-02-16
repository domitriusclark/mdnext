import { getShareImage } from '@jlengstorf/get-share-image';
import { Container } from '@chakra-ui/react';
import Navbar from '@components/Navbar';
import SEO from '@components/SEO';

export function Layout({ title, description, twitter, openGraph, children }) {
  const socialImage = getShareImage({
    title: 'MDNext Blog Starter',
    tagline: 'A test of sorts.',
    cloudName: process.env.CLOUDINARY_USER_ID,
    imagePublicID: process.env.CLOUDINARY_IMAGE_ID,
    titleFont: 'Montserrat',
    taglineFont: 'Montserrat',
    textColor: '000000',
  });

  return (
    <>
      <SEO
        title={title}
        description={description}
        twitter={twitter}
        openGraph={openGraph ? openGraph : socialImage}
      />
      <Navbar />
      <Container maxW="lg">{children}</Container>
    </>
  );
}
