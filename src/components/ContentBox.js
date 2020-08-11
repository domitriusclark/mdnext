import { Box, Flex, Link, Text } from '@chakra-ui/core';

import { Link as NextLink } from 'next/link';

export default function ContentBox({ blog }) {
  return (
    <Link as={NextLink} href={`/blog/${blog.slug}`}>
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
  );
}
