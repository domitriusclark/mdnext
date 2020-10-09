import React from 'react';
import useMessages from '@hooks/useMessages';

import { Flex, Text, Box } from '@chakra-ui/core';

export default function TwitchChatBox(props) {
  const { messages } = useMessages({ channel: 'domitriusClark ' });

  return (
    <Flex {...props}>
      {messages.map((message) => (
        <Box border="2px solid green" padding={4}>
          <Text mr={2}>{message.user}</Text>
          <Text>{message.text}</Text>
        </Box>
      ))}
    </Flex>
  );
}
