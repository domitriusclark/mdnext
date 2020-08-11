import { Flex } from "@chakra-ui/core";
import { Chakra } from "@components/Chakra";

export default function Index({ cookies }) {
  return (
    <Chakra cookies={cookies}>
      <Flex direction="column"></Flex>
    </Chakra>
  );
}

export { getServerSideProps } from "@components/Chakra";
