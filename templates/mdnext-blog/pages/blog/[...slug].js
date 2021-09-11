import { BLOG_CONTENT_PATH } from '@config/constants';
import getLocalMdx from '@utils/getLocalMdx';
import components from '@components/MDXComponents';
import { Box, Heading } from '@chakra-ui/react';
import { Layout } from '@components/Layout';
import { MDXRemote } from 'next-mdx-remote';

export default function BlogPost({ post, frontMatter }) {
  return (
    <Layout
      title={frontMatter.title}
      description={frontMatter.description}
      twitter={{
        title: frontMatter.title,
        cardType: 'summary_large_image',
      }}
    >
      <Box>
        <Heading as="h1" pb="1rem">
          {frontMatter.title}
        </Heading>
        <MDXRemote {...post.mdx} components={components} />
      </Box>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getLocalMdx(BLOG_CONTENT_PATH);
  const paths = posts.map(({ slug }) => ({
    params: {
      slug: slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getLocalMdx(BLOG_CONTENT_PATH);
  const postSlug = slug.join('/');
  const [post] = posts.filter((post) => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      post,
      frontMatter: { ...post.data },
    },
  };
}
