import { Container } from '@chakra-ui/core';

export default function SceneContainer(props) {
  return (
    <Container
      minW="1920px"
      minH="1080px"
      border="8px solid rebeccapurple"
      {...props}
    >
      {props.children}
    </Container>
  );
}
