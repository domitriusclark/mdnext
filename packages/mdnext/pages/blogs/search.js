import { Box, Flex, Stack } from '@chakra-ui/core';

import glob from 'fast-glob';
import fs from 'fs';
import matter from 'gray-matter';

import ContentBox from '@components/ContentBox';
import Search from '@components/Search';
import { Chakra } from '@components/Chakra';

export default function SearchPage({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(allMdx);

  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };

  return (
    <Chakra evaluateThemeLazily>
      <Box pb={3}>
        {/* Content Area + Input + Tag filter */}
        <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
          <Search blogs={allMdx} handleFilter={handleFilter} />
          <Stack spacing={[2, 6, 12]}>
            {filteredBlogs?.map((blog) => (
              <ContentBox key={blog.slug} blog={blog} />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Chakra>
  );
}

export function getStaticProps() {
  const files = glob.sync('src/blogs/*.mdx');

  const allMdx = files.map((file) => {
    const split = file.split('/');
    const filename = split[split.length - 1];
    const slug = filename.replace('.mdx', '');

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
