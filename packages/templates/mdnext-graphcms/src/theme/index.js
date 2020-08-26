import defaultTheme from '@chakra-ui/theme';
import TagButton from './components/tag-button';

const theme = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    TagButton,
  },
};

export default theme;
