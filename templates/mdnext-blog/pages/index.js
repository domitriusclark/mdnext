import { Flex } from '@chakra-ui/core';

import { Layout } from '@components/Layout';
import { Image } from '@mdnextjs/components';

export default function Index() {
  return (
    <Layout>
      <Flex direction="column">
        <Image publicId="mdnext-light" cloudName="mdnextjs" />
      </Flex>
    </Layout>
  );
}
