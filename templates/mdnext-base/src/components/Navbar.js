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
        <NavLink ml={4} href="/blog">
          Blog
        </NavLink>
      </Box>
    </Flex>
  );
}
