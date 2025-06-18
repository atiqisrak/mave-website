'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-white'
    }`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary-700" />
            <span className="font-manrope text-sm font-semibold text-foreground">
              Welcome to Mave
            </span>
          </motion.div>

          <h1 className="text-heading-1 font-graphik font-bold text-gradient mb-6">
            Beautiful Glassmorphism
          </h1>
          
          <p className="text-body-large font-manrope text-foreground/80 max-w-2xl mx-auto mb-8">
            Experience the future of web design with our stunning glassmorphism interface. 
            Smooth, modern, and absolutely breathtaking.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="glass-button bg-primary-700 text-white hover:bg-primary-800 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="glass-button text-foreground hover:text-primary-700">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="glass-card text-center group hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
              <Star className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-heading-3 font-graphik font-semibold mb-4 text-foreground">
              Stunning Design
            </h3>
            <p className="text-body font-manrope text-foreground/70">
              Beautiful glassmorphism effects that create depth and visual interest.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card text-center group hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
              <Zap className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-heading-3 font-graphik font-semibold mb-4 text-foreground">
              Lightning Fast
            </h3>
            <p className="text-body font-manrope text-foreground/70">
              Optimized performance with smooth animations and instant interactions.
            </p>
          </motion.div>

          <motion.div 
            className="glass-card text-center group hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -10 }}
          >
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
              <Sparkles className="w-8 h-8 text-primary-800" />
            </div>
            <h3 className="text-heading-3 font-graphik font-semibold mb-4 text-foreground">
              Modern Tech
            </h3>
            <p className="text-body font-manrope text-foreground/70">
              Built with the latest technologies for the best user experience.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="glass-card text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-heading-2 font-graphik font-semibold mb-6 text-gradient">
            Ready to Experience Magic?
          </h2>
          <p className="text-body-large font-manrope text-foreground/80 mb-8">
            Join thousands of users who have already discovered the beauty of glassmorphism design.
          </p>
          <button className="glass-button bg-primary-700 text-white hover:bg-primary-800">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </div>
  );
}
