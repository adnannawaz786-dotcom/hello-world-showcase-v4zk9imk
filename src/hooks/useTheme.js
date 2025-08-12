import { useState, useEffect, useContext, createContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e) => {
        setSystemTheme(e.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      const effectiveTheme = theme === 'system' ? systemTheme : theme;

      root.classList.remove('light', 'dark');
      root.classList.add(effectiveTheme);

      localStorage.setItem('theme', theme);
    }
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      switch (prevTheme) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'system';
        case 'system':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  const setThemeMode = (newTheme) => {
    if (['light', 'dark', 'system'].includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  const getEffectiveTheme = () => {
    return theme === 'system' ? systemTheme : theme;
  };

  const isDark = () => {
    return getEffectiveTheme() === 'dark';
  };

  const isLight = () => {
    return getEffectiveTheme() === 'light';
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'system':
        return '💻';
      default:
        return '☀️';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'System';
      default:
        return 'Light';
    }
  };

  const themeColors = {
    light: {
      primary: 'rgb(59, 130, 246)',
      secondary: 'rgb(156, 163, 175)',
      background: 'rgb(255, 255, 255)',
      surface: 'rgb(249, 250, 251)',
      text: 'rgb(17, 24, 39)',
      textSecondary: 'rgb(75, 85, 99)',
      border: 'rgb(229, 231, 235)',
      accent: 'rgb(99, 102, 241)',
      success: 'rgb(34, 197, 94)',
      warning: 'rgb(251, 191, 36)',
      error: 'rgb(239, 68, 68)',
    },
    dark: {
      primary: 'rgb(96, 165, 250)',
      secondary: 'rgb(107, 114, 128)',
      background: 'rgb(17, 24, 39)',
      surface: 'rgb(31, 41, 55)',
      text: 'rgb(243, 244, 246)',
      textSecondary: 'rgb(156, 163, 175)',
      border: 'rgb(55, 65, 81)',
      accent: 'rgb(129, 140, 248)',
      success: 'rgb(74, 222, 128)',
      warning: 'rgb(253, 224, 71)',
      error: 'rgb(248, 113, 113)',
    }
  };

  const getCurrentColors = () => {
    return themeColors[getEffectiveTheme()];
  };

  const getThemeTransition = () => {
    return 'transition-colors duration-300 ease-in-out';
  };

  const applyThemeStyles = (lightStyles, darkStyles) => {
    return getEffectiveTheme() === 'dark' ? darkStyles : lightStyles;
  };

  const value = {
    theme,
    systemTheme,
    effectiveTheme: getEffectiveTheme(),
    mounted,
    toggleTheme,
    setTheme: setThemeMode,
    isDark: isDark(),
    isLight: isLight(),
    icon: getThemeIcon(),
    label: getThemeLabel(),
    colors: getCurrentColors(),
    transition: getThemeTransition(),
    applyStyles: applyThemeStyles,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

export default useTheme;