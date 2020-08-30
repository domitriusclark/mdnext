import { Flex, Text, Box, Link, Image } from '@chakra-ui/core';
import { Link as NextLink } from 'next/link';
import { useImage } from 'use-cloudinary';

function NavLink({ children, ...props }) {
  return (
    <Link as={NextLink} px={2} {...props}>
      {children}
    </Link>
  );
}

export default function Navbar({ logo }) {
  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image src={logo} boxSize={30} alt="Navbar logo" />
        <Text pl={3}>Domitrius Clark</Text>
      </Flex>
      <Box>
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
