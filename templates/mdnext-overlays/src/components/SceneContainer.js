import { Container } from '@chakra-ui/core';

export default function SceneContainer(props) {
  return (
    <Container
      minW="1920px"
      minH="1080px"
      backgroundImage="
        linear-gradient(116deg, hsla(319.29999999999995, 58.4%, 19.8%, 0.54) 49%, transparent 90%), 
        linear-gradient(140deg, hsla(0, 0%, 0%, 0.54) 0%, hsla(358.70000000000005, 25.6%, 35.3%, 0.26) 50%), 
        linear-gradient(160deg, hsl(201.20000000000005, 100%, 60%) 0%, hsl(0, 0%, 0%) 87%)
      "
      {...props}
    >
      {props.children}
    </Container>
  );
}
