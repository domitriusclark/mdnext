import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';
import { contentGlob, getBlogFileSlug } from '../data/[...slug]';

export default function ListData({ allMdx }) {
  return (
    <div>
      {allMdx}
    </div>
  )
}

export function getStaticProps() {
  const files = glob.sync(contentGlob);

  const allMdx = files.map((file) => {
    const slug = getBlogFileSlug(file);

    const mdxSource = fs.readFileSync(file);
    const { data } = matter(mdxSource);

    return {
      slug,
      ...data,
    };
  });

  return {
    props: {
      allMdx,
    },
  };
}
