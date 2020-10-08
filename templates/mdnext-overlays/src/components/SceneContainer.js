import { Container } from '@chakra-ui/core';

export default function SceneContainer({ children }) {
  return (
    <Container minW="1920px" minH="1080px" border="4px solid rebeccapurple">
      {children}
    </Container>
  );
}
