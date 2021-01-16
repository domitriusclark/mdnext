import { Flex, Text, Box, Link } from '@chakra-ui/react';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import { Link as NextLink } from 'next/link';

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
        <Text pl={3}>MDNEXT</Text>
      </Flex>
      <Box>
        <ThemeTogglebutton />
        <NavLink ml={4} href="/">
          Home
        </NavLink>
        <NavLink ml={4} href="/blogs/search">
          Search
        </NavLink>
      </Box>
    </Flex>
  );
}
