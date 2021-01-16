import { extendTheme } from '@chakra-ui/react';
import components from './components';

const theme = extendTheme({
  components: {
    ...components,
  },
});

export default theme;
