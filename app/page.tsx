'use client';

import { motion } from 'framer-motion';
import { Star, Zap, Sparkles } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';
import HeroSection from './components/home/HeroSection';
import Clients from './components/home/Clients';
import Features from './components/home/Features';
import HowItWorks from './components/home/HowItWorks';
import CTA from './components/home/CTA';
import Collaboration from './components/home/Collaboration';
import Deployment from './components/home/Deployment';
import ScakeUp from './components/home/ScaleUp';
import MarketPlace from './components/home/MarketPlace';
import Plugins from './components/home/Plugins';
import Community from './components/home/Community';
import BuildCTA from './components/home/BuildCTA';

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
      <Clients />
      <Features />
      <HowItWorks />
      <CTA />
      <Collaboration />
      <Deployment />
      <ScakeUp />
      <MarketPlace />
      <Plugins />
      <Community />
      <BuildCTA />
    </div>
  );
}
