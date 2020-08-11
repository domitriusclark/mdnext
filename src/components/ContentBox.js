import { Box, Flex, Link, Text } from '@chakra-ui/core';

import NextLink from 'next/link';

export default function ContentBox({ blog }) {
  return (
    <NextLink href="/blog/[slug]" as={`/blog/${blog.slug}`} passHref>
      <Link>
        <Box w="500px" border="1px solid black" borderRadius="8px" p={8}>
          <Text>{blog.title}</Text>
          <Text> By: {blog.author}</Text>
          <Text>{blog.description}</Text>
          <Flex>
            {blog.tags.map((tag) => (
              <Text mt="8px" mr={8} key="tag">
                #{tag}
              </Text>
            ))}
          </Flex>
        </Box>
      </Link>
    </NextLink>
  );
}
