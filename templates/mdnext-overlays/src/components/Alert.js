import React from 'react';

import { Flex, Box, Text, Icon } from '@chakra-ui/core';

import { motion, AnimatePresence } from 'framer-motion';

export default function Alert({ event }) {
  return (
    <AnimatePresence>
      <Flex
        alignSelf="center"
        justifySelf="center"
        as={motion.div}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        alignItems="center"
        w="400px"
        h="100px"
        border="2px solid black"
        borderRadius="8px"
        boxShadow="-webkit-box-shadow: 2px 2px 19px 3px rgba(0,0,0,0.75); -moz-box-shadow: 2px 2px 19px 3px rgba(0,0,0,0.75); box-shadow: 2px 2px 19px 3px rgba(0,0,0,0.75);"
      >
        <Box width="30%">
          <Icon />
        </Box>
        <Box flex="1">
          <p>
            {event.type} from {event.from}
          </p>
        </Box>
      </Flex>
    </AnimatePresence>
  );
}
