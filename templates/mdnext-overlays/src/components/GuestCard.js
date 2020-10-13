import React from 'react';

import { Flex, Text, Icon } from '@chakra-ui/core';

import { FaTwitter } from 'react-icons/fa';

export default function GuestCard({ guest }) {
  return (
    <Flex
      height="400px"
      width="400px"
      border="2px solid black"
      borderRadius="8px"
      alignItems="flex-start"
      mr={24}
    >
      <Flex
        alignItems="center "
        w="50%"
        justifyContent="space-evenly"
        alignSelf="flex-end"
      >
        <Text>{guest.name}</Text>
        <Icon as={FaTwitter} />
      </Flex>
    </Flex>
  );
}
