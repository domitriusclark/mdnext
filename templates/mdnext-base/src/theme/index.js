import defaultTheme from '@chakra-ui/theme';
import components from './components';

const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    ...components,
  },
};

export default theme;
