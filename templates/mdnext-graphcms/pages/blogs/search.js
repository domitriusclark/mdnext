import { Box, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import ContentBox from '@components/ContentBox';
import Layout from '@components/Layout';
import Search from '@components/Search';
import { GraphQLClient } from 'graphql-request';

export default function SearchPage({ blogs }) {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };

  return (
    <Layout>
      <Box pb={3}>
        {/* Content Area + Input + Tag filter */}
        <Stack spacing={[4, 8, 12]} justify="center" alignItems="center">
          <Search blogs={blogs} handleFilter={handleFilter} />
          <Stack spacing={[2, 6, 12]}>
            {filteredBlogs?.map((blog) => {
              return <ContentBox key={blog.slug} blog={blog} />;
            })}
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);

  const { blogPosts } = await graphcms.request(`
    {
      blogPosts {
        content
        title
        description 
        tags   
        slug    
      }
    }
  `);

  return {
    props: {
      blogs: [...blogPosts],
    },
  }
};