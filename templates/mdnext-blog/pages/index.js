import { promises as fs } from 'fs';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  Link
} from '@chakra-ui/core';
import { Image } from '@mdnext/components';
import { Layout } from '@components/Layout';

const MarkdownH1 = ({ children }) => (
  <Heading as="h1">
    {children}
  </Heading>
);


function Section({ image, heading, subtext, reverse }) {
  return (
    <Flex direction={reverse ? "row-reverse" : "row"} alignItems="center" justify="space-between">
      <Box>
        <Heading size="2xl" as="h1">{heading}</Heading>
        <Text>{subtext}</Text>
      </Box>
      <Image w="50%" src={image} />
    </Flex>
  )
}

function Features({ images }) {
  return (
    <Stack direction="column" >
      <Image
        alignSelf="center"
        mt={12}
        src={images.logo}
      />
      <Section
        heading="Start quick with our templates"
        subtext={<span>With the ever-growing <Link href="">list</Link> of templates, MDNEXT will help you get started on your next idea with less friction</ span>}
        image={images.multitool}
        reverse
      />
      <Section
        heading="Markdown as data"
        subtext="MDNEXT takes your markdown and passes it through to MDX, locally or remotely"
        image={images.data}
      />
      <Section
        heading="Media management via Cloudinary"
        subtext="Serve your Images at build time or in the client with Cloudinary API's, or throw in your URL as usual"
        image={images.media}
        reverse
      />
      <Section
        heading="Plug and play styling"
        subtext="Next integrates with many frameworks & styling methods. Don't see your favorite? Submit here"
        image={images.styles}
      />
    </Stack>
  )
}

export default function Index({ images, data }) {

  const content = hydrate(data, {
    components: {
      Image,
      h1: MarkdownH1,
      p: Text
    }
  });
  return (
    <Layout>
      <Features images={images} />

      {content}
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

  const transforms = {
    height: 0.5,
    crop: "scale"
  };

  const publicIds = [
    "styles",
    "multitool",
    "data",
    "media"
  ];

  const logo = cloudinary.url("mdnext-logo");

  let urls = {}

  publicIds.map((pid) => {
    const url = cloudinary.url(pid, transforms);
    return urls = {
      ...urls,
      [pid]: url
    }
  });

  const mdxSource = await fs.readFile("src/blogs/getting-started.mdx");

  const mdx = await renderToString(mdxSource, {
    components: {
      Image,
      h1: MarkdownH1,
      p: Text
    }
  });

  return {
    props: {
      images: {
        logo,
        ...urls
      },
      data: mdx
    }
  }
}