import Link from 'next/link';
import { ModeToggle, NavbarLink } from '.';
import config from '@config';
import { Flex } from 'reflexjs';

export function Navbar({ ...props }) {
  return (
    <header
      position="static|sticky"
      top="0"
      bg="background"
      opacity="0.85"
      py="8"
      zIndex="1000"
      backdropFilter="saturate(100%) blur(10px)"
      {...props}
    >
      <div
        variant="container"
        display="flex"
        flexDirection="column|row"
        alignItems="flex-start|center"
        justifyContent="space-between"
      >
        <Link href="/" passHref>
          <a
            display="flex"
            textDecoration="none"
            color="text"
            alignItems="center"
            fontSize="4xl|xl"
            fontWeight="semibold"
            mr="0|10"
            mb="2|0"
          >
            {config.site.name}
          </a>
        </Link>
        <Flex w="100%" justifyContent="space-between|flex-end" ml="0|auto">
          <div
            display="inline-grid"
            col={`repeat(${config.links.length}, minmax(0,auto))`}
            gap="6"
          >
            {config.links.map((link) => (
              <NavbarLink key={link.url} href={link.url}>
                {link.title}
              </NavbarLink>
            ))}
          </div>
          <ModeToggle ml="4" />
        </Flex>
      </div>
    </header>
  );
}
