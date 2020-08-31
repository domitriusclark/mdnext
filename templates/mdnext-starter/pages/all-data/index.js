import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';
import ContentBox from '@components/ContentBox'
import { contentGlob, getFileSlug } from '../data/[...slug]';

export default function AllData({ allMdx }) {
  console.log(allMdx)
  return (
    <div>
      {allMdx?.map(data => <ContentBox data={data} />)}
    </div>
  )
}

export function getStaticProps() {
  const files = glob.sync(contentGlob);

  const allMdx = files.map((file) => {
    const slug = getFileSlug(file);

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
