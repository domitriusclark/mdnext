import { Box } from '@chakra-ui/core';

export default () => {
  return ({ children }) => (
    <Box m={16}>
      {children}
    </Box>
  )
}