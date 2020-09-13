import { useColorModeValue } from '@chakra-ui/core';

import { Image } from '@mdnext/components';
import { Layout } from '@components/Layout';


export default function Index({ images }) {
  const logo = useColorModeValue(images.lightLogo, images.darkLogo)
  return (
    <Layout>
      <Image
        alignSelf="center"
        mt={12}
        src={logo}
      />
    </Layout>
  );
}


export async function getStaticProps() {
  const cloudinary = require('cloudinary').v2;

  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  const darkLogo = cloudinary.url("mdnext-dark");

  const lightLogo = cloudinary.url("mdnext-light")

  return {
    props: {
      images: {
        darkLogo,
        lightLogo
      },
    }
  }
}