import { extendTheme } from '@chakra-ui/react';
import components from './components';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  components: {
    ...components,
  },
});

export default theme;
