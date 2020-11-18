import Link from 'next/link';
import { ModeToggle, NavbarLink } from '.';
import config from '@config';

export function Navbar({ ...props }) {
  return (
    <header
      position="sticky"
      top="0"
      bg="background"
      opacity="0.85"
      py="8"
      zIndex="1000"
      backdropFilter="saturate(100%) blur(10px)"
      {...props}
    >
      <div variant="container.sm" display="flex" alignItems="center" h="14">
        <Link href="/" passHref>
          <a
            display="flex"
            textDecoration="none"
            color="text"
            alignItems="center"
            fontSize="xl"
            fontWeight="semibold"
            mr="10"
          >
            {config.site.name}
          </a>
        </Link>
        <div display="inline-grid" col={config.links.length} gap="6">
          {config.links.map((link) => (
            <NavbarLink
              key={link.url}
              href={link.url}
              activePathNames={link.pathnames}
            >
              {link.title}
            </NavbarLink>
          ))}
        </div>
        <ModeToggle ml="auto" />
      </div>
    </header>
  );
}
