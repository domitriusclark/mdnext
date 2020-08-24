const colorModeTheme = {
  dark: {
    bg: 'whiteAlpha.200',
    _checked: {
      borderColor: 'whiteAlpha.800',
    },
    _hover: {
      bg: 'whiteAlpha.300',
    },
    _active: {
      bg: 'whiteAlpha.400',
    },
  },
  light: {
    bg: 'gray.100',
    _checked: {
      borderColor: 'blackAlpha.800',
    },
    _hover: {
      bg: 'gray.200',
    },
    _active: {
      bg: 'gray.300',
    },
  },
};
const TagButton = {
  baseStyle: ({ colorMode }) => {
    const colorModeStyles =
      colorMode === 'light' ? colorModeTheme.light : colorModeTheme.dark;

    return {
      cursor: 'pointer',
      borderRadius: 'md',
      textAlign: 'center',
      px: 5,
      py: 3,
      fontWeight: 'semibold',
      borderWidth: '1px',
      _focus: { boxShadow: 'outline' },
      ...colorModeStyles,
    };
  },
};

export default TagButton;
