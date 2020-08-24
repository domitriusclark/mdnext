import { promises as fs } from 'fs';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import glob from 'fast-glob';

import Code from '@components/Code';
import { Chakra } from '@components/Chakra';

const components = { code: Code };

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });

  return (
    <Chakra evaluateThemeLazily>
      <div>
        <h1>{frontMatter.title}</h1>
        {content}
      </div>
    </Chakra>
  );
}

// This glob is what will be used to generate static routes
const contentPath = 'src/blogs';
const contentGlob = `${contentPath}/**/*.mdx`;

export async function getStaticPaths() {
  const files = glob.sync(contentGlob);

  const paths = files.map((file) => {
    const filename = file.replace(`${contentPath}/`, '');
    const slug = filename.replace(new RegExp(path.extname(file) + '$'), '');

    return {
      params: {
        slug: [...slug.split('/')],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob);

  const pathRegex = new RegExp(`^${contentPath}/${path.join(...slug)}.mdx$`);
  const fullPath = files.find((file) => pathRegex.test(file));

  if (!fullPath) {
    console.warn('No MDX file found for slug');
  }

  const mdxSource = await fs.readFile(fullPath);
  const { content, data } = matter(mdxSource);

  const mdx = await renderToString(content, { components, scope: data });

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  };
}
