import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';
import tw from 'twin.macro';

import ContentBox from '@components/ContentBox';
import { contentGlob, getFileSlug } from '../data/[...slug]';

export default function AllData({ allMdx }) {
  return (
    <div tw="flex flex-col px-4 mx-auto lg:flex-row lg:gap-4">
      {allMdx?.map((data) => (
        <ContentBox key={data.slug} data={data} />
      ))}
    </div>
  );
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
