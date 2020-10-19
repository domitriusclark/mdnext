import React from 'react';

import { Flex, Box, Text, Icon } from '@chakra-ui/core';

import { FaTwitter } from 'react-icons/fa';

export default function GuestCard({ guest }) {
  return (
    <Flex direction="column" height="500px" width="500px">
      <Box
        boxShadow="0px 0px 58px 13px rgba(110,75,163,0.83)"
        borderRadius="8px"
        h="100%"
      ></Box>

      <Flex alignItems="center " justifyContent="center" textAlign="center">
        <Icon fontSize="3xl" as={FaTwitter} mr={1} />
        <Text fontSize="3xl" pb={2}>
          {guest.twitter}
        </Text>
      </Flex>
    </Flex>
  );
}
