import { Flex } from '@chakra-ui/react';

import { Chakra } from '@components/Chakra';
import Layout from '@components/Layout';

export default function Index({ cookies }) {
  return (
    <Chakra cookies={cookies}>
      <Layout>
        <Flex direction="column"></Flex>
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from '@components/Chakra';
