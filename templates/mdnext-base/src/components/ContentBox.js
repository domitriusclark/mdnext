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
        <Stack>
          <Box>
            <Text _groupHover={{ textDecor: 'underline' }}>{blog.title}</Text>
            <Text> By: {blog.author}</Text>
            <Text>{blog.description}</Text>
          </Box>
          <Stack direction="row" spacing={8}>
            {blog.tags.map((tag) => (
              <Text key={tag}>#{tag}</Text>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
