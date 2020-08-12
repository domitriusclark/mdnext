import {
  LightMode,
  DarkMode,
  useColorMode,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/core';

import { FiSun, FiMoon } from 'react-icons/fi';

import { useThemePersistence } from '@hooks/useThemePersistance';

export default function ThemeTogglebutton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ToggleIcon = useColorModeValue(FiSun, FiMoon);

  useThemePersistence(colorMode);

  return (
    <IconButton
      icon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
    />
  );
}
