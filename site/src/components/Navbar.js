import { Flex, Box, Link } from '@chakra-ui/react';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import { Link as NextLink } from 'next/link';
import { LogoBasic } from '@components/Logo';

const NavLink = ({ children, ...props }) => {
  return (
    <Link as={NextLink} px={2} {...props}>
      {children}
    </Link>
  );
};

const links = [
  {
    title: 'Home',
    slug: '/',
  },
  {
    title: 'Blog',
    slug: '/blog',
  },
  {
    title: 'Snippets',
    slug: '/snippets',
  },
  {
    title: 'Documentation',
    slug: '/documentation',
  },
];

const Navbar = () => {
  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <LogoBasic w={140} h="auto" />
      </Flex>
      <Flex alignItems="center">
        <ThemeTogglebutton />
        {links.map((link, i) => (
          <NavLink key={i} m={4} href={link.slug} fontSize="lg">
            {link.title}
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default Navbar;
