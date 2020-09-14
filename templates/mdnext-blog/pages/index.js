import { Flex } from '@chakra-ui/core';

import { Layout } from '@components/Layout';
import { Image } from '@mdnext/components';

export default function Index({ cookies }) {
  return (
    <Layout>
      <Flex direction="column">
        <Image publicId="mdnext-light" />
      </Flex>
    </Layout>
  );
}
