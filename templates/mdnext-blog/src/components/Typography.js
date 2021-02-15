import { Heading, Text } from '@chakra-ui/react';

export const H1 = ({ children }) => (
  <Heading as="h1" size="xl" pb="1rem">
    {children}
  </Heading>
);

export const H2 = ({ children }) => (
  <Heading as="h2" size="lg" pb="1rem">
    {children}
  </Heading>
);

export const H3 = ({ children }) => (
  <Heading as="h3" size="lg" pb="1rem">
    {children}
  </Heading>
);

export const H4 = ({ children }) => (
  <Heading as="h4" size="md" pb="1rem">
    {children}
  </Heading>
);

export const H5 = ({ children }) => (
  <Heading as="h5" size="md" pb="1rem">
    {children}
  </Heading>
);

export const H6 = ({ children }) => (
  <Heading as="h6" size="xl" pb="1rem">
    {children}
  </Heading>
);

export const P = ({ children }) => (
  <Text as="p" pb="1rem">
    {children}
  </Text>
);
