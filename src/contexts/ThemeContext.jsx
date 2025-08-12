import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;
        
        setTheme(initialTheme);
        applyTheme(initialTheme);
      } catch (error) {
        console.warn('Failed to initialize theme:', error);
        setTheme('light');
        applyTheme('light');
      } finally {
        setIsLoading(false);
      }
    };

    initializeTheme();
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const systemTheme = e.matches ? 'dark' : 'light';
        setTheme(systemTheme);
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }

    // Add smooth transition for theme changes
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    // Remove transition after animation completes
    setTimeout(() => {
      root.style.transition = '';
    }, 300);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
    
    try {
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  };

  const setThemeMode = (newTheme) => {
    if (newTheme !== 'light' && newTheme !== 'dark') {
      console.warn('Invalid theme mode. Use "light" or "dark"');
      return;
    }
    
    setTheme(newTheme);
    applyTheme(newTheme);
    
    try {
      localStorage.setItem('theme', newTheme);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  };

  const resetTheme = () => {
    try {
      localStorage.removeItem('theme');
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      applyTheme(systemTheme);
    } catch (error) {
      console.warn('Failed to reset theme:', error);
    }
  };

  const getThemeConfig = () => {
    return {
      colors: {
        light: {
          primary: 'rgb(59 130 246)',
          secondary: 'rgb(107 114 128)',
          accent: 'rgb(168 85 247)',
          background: 'rgb(255 255 255)',
          surface: 'rgb(249 250 251)',
          text: 'rgb(17 24 39)',
          textSecondary: 'rgb(107 114 128)',
          border: 'rgb(229 231 235)',
        },
        dark: {
          primary: 'rgb(96 165 250)',
          secondary: 'rgb(156 163 175)',
          accent: 'rgb(196 181 253)',
          background: 'rgb(17 24 39)',
          surface: 'rgb(31 41 55)',
          text: 'rgb(243 244 246)',
          textSecondary: 'rgb(156 163 175)',
          border: 'rgb(75 85 99)',
        }
      },
      animations: {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'bounce 1s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
      }
    };
  };

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  const value = {
    theme,
    isDark,
    isLight,
    isLoading,
    toggleTheme,
    setTheme: setThemeMode,
    resetTheme,
    getThemeConfig,
  };

  // Show loading state while theme is being initialized
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={value}>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;