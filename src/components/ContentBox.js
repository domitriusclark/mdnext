import { Link as NextLink } from 'next/link';
import { Box, Link, Text, Stack } from '@chakra-ui/core';

export default function ContentBox({ blog }) {
  return (
    <Link
      as={NextLink}
      href={`/blog/${blog.slug}`}
      _hover={{ textDecor: 'none' }}
    >
      <Box
        role="group"
        maxW="500px"
        border="1px"
        borderColor="black"
        borderRadius="8px"
        p={8}
      >
        <Text _groupHover={{ textDecor: 'underline' }}>{blog.title}</Text>
        <Text> By: {blog.author}</Text>
        <Text>{blog.description}</Text>
        <Stack direction="row">
          {blog.tags.map((tag) => (
            <Text mr={8} key={tag}>
              #{tag}
            </Text>
          ))}
        </Stack>
      </Box>
    </Link>
  );
}
