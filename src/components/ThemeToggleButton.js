import { useColorMode, Button } from '@chakra-ui/core';

import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeTogglebutton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === 'light' ? <FiSun /> : <FiMoon />;

  return (
    <Button role="button" aria-label="Toggle Theme" onClick={toggleColorMode}>
      {icon}
    </Button>
  );
}
