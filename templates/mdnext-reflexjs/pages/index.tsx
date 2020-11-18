import { Layout, BlogTeaser, Bio } from '@components';
import { getMdxContent } from '@utils';
import config from '@config';
import { BlogPost } from 'types';

export interface BlogPageProps {
  blogs: BlogPost[];
}

export default function BlogPage({ blogs }: BlogPageProps) {
  return (
    <Layout>
      <div variant="container.sm" py="10|12">
        <Bio {...config.bio} />
        {blogs.map((blog) => (
          <BlogTeaser key={blog.slug} blog={blog} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = await getMdxContent(config.blog.contentPath);

  return {
    props: {
      blogs,
    },
  };
}
