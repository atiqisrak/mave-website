'use client';

import { motion } from 'framer-motion';
import { Star, Zap, Sparkles } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';
import HeroSection from './components/home/HeroSection';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-white'
    }`}>
      <HeroSection />
    </div>
  );
}
