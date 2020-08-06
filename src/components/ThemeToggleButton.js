import {
  LightMode,
  DarkMode,
  useColorMode,
  Button
} from "@chakra-ui/core";

import { FiSun, FiMoon } from 'react-icons/fi';

import { useThemePersistence } from "@hooks/useThemePersistance";

export default function ThemeTogglebutton() {
  const { colorMode, toggleColorMode } = useColorMode();
  useThemePersistence(colorMode)

  if (colorMode === "light") {
    return (
      <LightMode>
        <Button onClick={toggleColorMode}><FiSun /></Button>
      </LightMode>
    )
  } else if (colorMode === "dark") {
    return (
      <DarkMode>
        <Button onClick={toggleColorMode}><FiMoon /></Button>
      </DarkMode>
    )
  }
}