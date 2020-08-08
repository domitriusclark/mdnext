import { GraphQLClient } from 'graphql-request';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import Code from '@components/Code';

const components = { code: Code };

export default ({ mdx, frontMatter }) => {
  const content = hydrate(mdx, components)
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      {content}
    </div>
  )
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

  const { blogPosts } = await graphcms.request(
    `
      {
        blogPosts {
          content
          id
        }
      }
    `
  )

  const blog = blogPosts[0];
  const { content, data } = matter(blog.content);

  const mdx = await renderToString(
    content,
    components,
    null,
    data
  )

  return {
    props: {
      mdx,
      frontMatter: data
    }
  }
}