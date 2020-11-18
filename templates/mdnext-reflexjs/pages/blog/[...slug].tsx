import { Layout, BlogPage } from '@components';
import { getMdxPaths, getMdxContent } from '@utils';
import config from '@config';
import { BlogPost } from 'types';

export interface BlogsPageProps {
  blog: BlogPost;
}

export default function BlogPostPage({ blog }: BlogsPageProps) {
  return (
    <Layout>
      <BlogPage blog={blog} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const mdxPaths = await getMdxPaths(config.blog.contentPath);
  const paths = mdxPaths.map(({ slug }) => ({
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
  const [blog] = await getMdxContent(config.blog.contentPath, slug.join('/'));

  return {
    props: {
      blog,
    },
  };
}
