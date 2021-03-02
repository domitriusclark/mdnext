import { Link as NextLink } from 'next/link';
import { Box, Link, Heading, Text, Stack, Tag } from '@chakra-ui/react';

export default function ContentBox({ blog }) {
  const { title, author, description, tags } = blog;
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
            <Heading as="h2" size="lg" _groupHover={{ textDecor: 'underline' }}>
              {title}
            </Heading>
            <Heading as="h3" size="md" pb="0.5rem">
              By: {blog.author}
            </Heading>
            <Text pb="0.5rem">{description}</Text>
          </Box>
          <Stack direction="row" spacing={3}>
            {tags.map((tag) => (
              <Tag key={tag}>#{tag}</Tag>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
