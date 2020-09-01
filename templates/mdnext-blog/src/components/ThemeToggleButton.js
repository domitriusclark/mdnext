import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/core';

import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeTogglebutton() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const ToggleIcon = useColorModeValue(FiSun, FiMoon);

  return (
    <IconButton
      icon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
  );
}
