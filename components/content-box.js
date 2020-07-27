import { Link as NextLink } from "next/link";
import { Box, Link, Text } from "@chakra-ui/core";

export default function ContentBox({ blog }) {
  return (
    <Link as={NextLink} href={`/${blog.__resourcePath.replace(".mdx", "")}`}>
      <Box w="500px" border="1px solid black" borderRadius="8px" p={8}>
        <Text>{blog.title}</Text>
        <Text> By: {blog.author}</Text>
        <Text>{blog.description}</Text>
      </Box>
    </Link>
  )
}