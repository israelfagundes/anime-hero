import {
  useState,
  useCallback,
  useMemo,
  createContext,
  useEffect,
} from 'react';

import { composeStorageKey } from '../../utils/composeStorageKey';

import { PropsWithRequiredChildren } from '../../common/types';

export type ThemeModes = 'light' | 'dark';

export type AppThemeContext = {
  currentTheme: ThemeModes;
  toggleTheme(): void;
};

export const ThemeContext = createContext<AppThemeContext | null>(null);

export function ThemeProvider({ children }: PropsWithRequiredChildren) {
  const [currentTheme, setCurrentTheme] = useState<ThemeModes>(() => {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      const storedTheme = localStorage.getItem(
        composeStorageKey('theme'),
      ) as ThemeModes;

      if (storedTheme) {
        return JSON.parse(storedTheme);
      }

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    }

    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setCurrentTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';

      localStorage.setItem(
        composeStorageKey('theme'),
        JSON.stringify(newTheme),
      );

      return newTheme;
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      currentTheme,
      toggleTheme,
    }),
    [currentTheme, toggleTheme],
  );

  useEffect(() => {
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const systemColorScheme: ThemeModes = e.matches ? 'dark' : 'light';

      setCurrentTheme(systemColorScheme);
    };

    const matchMediaPrefDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );

    matchMediaPrefDark?.addEventListener('change', handleSystemThemeChange);

    return () => {
      matchMediaPrefDark?.removeEventListener(
        'change',
        handleSystemThemeChange,
      );
    };
  }, []);

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      document.body.dataset.theme = currentTheme;

      window.localStorage.setItem(
        composeStorageKey('theme'),
        JSON.stringify(currentTheme),
      );
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
