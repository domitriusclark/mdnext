import {
  LightMode,
  DarkMode,
  useColorMode,
  Button
} from "@chakra-ui/core";

import { FiSun, FiMoon } from 'react-icons/fi';


export default function ThemeTogglebutton() {
  const { colorMode, toggleColorMode } = useColorMode();

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