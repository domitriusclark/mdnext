import hydrate from 'next-mdx-remote/hydrate';

import { BLOG_CONTENT_PATH } from '@config/constants';
import { getMdxContent } from '@utils/get-mdx-content';
import components from '@components/MDXComponents';
import { Layout } from '@components/Layout';

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });

  return (
    <Layout>
      <div>
        <h1>{frontMatter.title}</h1>
        {content}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
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
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const postSlug = slug.join('/');
  const [post] = posts.filter((post) => post.slug === postSlug);

  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  };
}
