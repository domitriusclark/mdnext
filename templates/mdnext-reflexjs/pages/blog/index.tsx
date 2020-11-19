import { Layout, BlogTeaser, Bio } from '@components';
import { getMdxContent } from '@utils';
import config from '@config';
import { BlogPost } from 'types';
import { NextSeo } from 'next-seo';

export interface BlogPageProps {
  blogs: BlogPost[];
}

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <Layout>
      <NextSeo title="Blog" />
      <div variant="container.sm" py="10|12">
        {blogs.map((blog) => (
          <BlogTeaser key={blog.slug} blog={blog} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await getMdxContent(config.blog.contentPath, null, '/blog');

  return {
    props: {
      blogs,
    },
  };
}
