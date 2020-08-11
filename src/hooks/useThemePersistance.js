import nextCookies from 'next-cookies';
import { set } from 'js-cookie';
import theme from '@chakra-ui/theme';
import { useEffect } from 'react';

export const THEME_COOKIE_NAME = 'chakra-ui-color-mode';

/**
 * Detects the current color mode based on previous preference.
 * If none is present, uses the theme.
 * If theme.config.initialColorMode is missing, falls back to 'light'.
 */
export const detectInitialColorMode = (ctx) => {
  return (
    nextCookies(ctx)[THEME_COOKIE_NAME] ||
    theme.config?.initialColorMode ||
    'light'
  );
};

/**
 *  Spreads the theme, overwriting `initialColorMode` key to `theme.config`.
 */
export const withPersistedTheme = (initialColorMode) => ({
  ...theme,
  config: {
    ...theme.config,
    initialColorMode,
  },
});

const cookieOptions = {
  sameSite: 'lax',
};

export const useThemePersistence = (colorMode) => {
  useEffect(() => {
    set(THEME_COOKIE_NAME, colorMode, cookieOptions);
  }, [colorMode]);
};
