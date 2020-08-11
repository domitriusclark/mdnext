import { Box, Flex, Image, Link, Text } from '@chakra-ui/core';

import NextLink from 'next/link';
import ThemeTogglebutton from '@components/ThemeToggleButton';
import { useImage } from 'use-cloudinary';

function NavLink({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <Link px={2} {...props}>
        {children}
      </Link>
    </NextLink>
  );
}

export default function Navbar() {
  const { generateUrl, url, isLoading } = useImage({
    cloudName: 'testing-hooks-upload',
  });

  React.useEffect(() => {
    generateUrl({
      publicId: 'transparent_dom_logo',
      transforms: {
        height: 30,
        width: 30,
      },
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Flex
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image src={url} boxSize={30} alt="Navbar logo" />
        <Text pl={3}>Domitrius Clark</Text>
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
