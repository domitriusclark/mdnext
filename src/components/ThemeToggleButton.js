import { Button, DarkMode, LightMode, useColorMode } from '@chakra-ui/core';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useThemePersistence } from '@hooks/useThemePersistance';

export default function ThemeTogglebutton() {
  const { colorMode, toggleColorMode } = useColorMode();
  useThemePersistence(colorMode);

  if (colorMode === 'light') {
    return (
      <LightMode>
        <Button
          role="button"
          aria-label="Toggle Theme"
          onClick={toggleColorMode}
        >
          <FiSun />
        </Button>
      </LightMode>
    );
  } else if (colorMode === 'dark') {
    return (
      <DarkMode>
        <Button
          role="button"
          aria-label="Toggle Theme"
          onClick={toggleColorMode}
        >
          <FiMoon />
        </Button>
      </DarkMode>
    );
  }
}
