import { Flex } from '@chakra-ui/react';

const Hero = (props) => {
  return (
    <Flex flex={1} {...props}>
      <Flex
        flex={1}
        p={() => {
          switch (props.size) {
            case 'sm':
              return '1.5rem';
            case 'md':
              return '3rem 1.25rem';
            case 'lg':
              return '9rem 5rem';
            default:
              return '1.5rem';
          }
        }}
      >
        {props.children}
      </Flex>
    </Flex>
  );
};

export default Hero;
