import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      // Dark theme colors
      dark: {
        primary: '#000000',
        secondary: '#1a1a1a',
        accent: '#333333',
        text: '#ffffff',
        textSecondary: '#cccccc',
        textMuted: '#888888',
        border: '#333333',
        hover: '#2a2a2a',
        success: '#00ff00',
        error: '#ff0000',
        warning: '#ffff00',
        info: '#00ffff',
        gradient: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        cardBg: '#000000',
        navBg: 'rgba(0, 0, 0, 0.9)',
      },
      // Light theme colors
      light: {
        primary: '#ffffff',
        secondary: '#f5f5f5',
        accent: '#e0e0e0',
        text: '#000000',
        textSecondary: '#333333',
        textMuted: '#666666',
        border: '#cccccc',
        hover: '#f0f0f0',
        success: '#008000',
        error: '#cc0000',
        warning: '#cc8800',
        info: '#0088cc',
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)',
        cardBg: '#ffffff',
        navBg: 'rgba(255, 255, 255, 0.9)',
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};