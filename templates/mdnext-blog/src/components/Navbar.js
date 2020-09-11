import { Flex, Text, Box, Link, Image } from '@chakra-ui/core';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import { Link as NextLink } from 'next/link';
import { useImage } from 'use-cloudinary';

function NavLink({ children, ...props }) {
  return (
    <Link as={NextLink} px={2} {...props}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
      </Flex>
      <Box>
        <ThemeTogglebutton />
        <NavLink ml={4} href="/">
          Home
        </NavLink>
        <NavLink ml={4} href="/blog">
          Blog
        </NavLink>
      </Box>
    </Flex>
  );
}
