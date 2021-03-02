import { Box, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import Hero from '@components/Hero';
import { Layout } from '@components/Layout';
import { LogoOutlined } from '@components/Logo';

export default function Index() {
  return (
    <Layout>
      <Flex direction="column">
        <Hero
          size="lg"
          alignItems="center"
          backgroundImage={`url("/hero-background.svg")`}
          backgroundSize="1600px auto"
          backgroundPosition="center"
          backgroundRepeat="repeat"
        >
          <Container
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="2xl"
            textAlign="center"
          >
            <Stack spacing={12}>
              <Heading size="4xl" lineHeight="1.25em">
                Jumpstart your Next project with
              </Heading>
              <LogoOutlined w="auto" h={28} />
            </Stack>
          </Container>
        </Hero>
        <Container p="3rem 1.25rem" maxW="2xl" textAlign="center">
          <Heading size="3xl" lineHeight="1.25em">
            Lean Templates Robust Ecosystem
          </Heading>
        </Container>
      </Flex>
    </Layout>
  );
}
