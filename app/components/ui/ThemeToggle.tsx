'use client';

import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="glass-button fixed top-6 right-6 z-50 flex items-center gap-2 text-foreground hover:text-primary-700"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
      <span className="hidden sm:inline font-manrope">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
} 