import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export default function TwitchChatBox(props) {
  return (
    <Flex {...props}>
      {props.messages.map((message) => (
        <Flex padding={2}>
          <Text color="tomato" mr={2}>
            {message.user}
          </Text>
          <Text>{message.text}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
