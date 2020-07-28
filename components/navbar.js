import {
  Flex,
  Text,
  Box,
  Link,
  Image,
} from "@chakra-ui/core";
import ThemeTogglebutton from '../components/theme-toggle-button';
import { Link as NextLink } from 'next/link'

function NavLink({ children, ...props }) {
  return (
    <Link as={NextLink} px={2} {...props}>
      <a>
        {children}
      </a>
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
        <Image
          src="https://res.cloudinary.com/testing-hooks-upload/image/upload/v1595904057/dom-logo_fddwxc.png"
          boxSize={30}
        />
        <Text pl={3}>
          Domitrius Clark
    </Text>
      </Flex>
      <Box>
        <ThemeTogglebutton />
        <NavLink ml={4} href="/">Home</NavLink>
      </Box>
    </Flex>
  )
}