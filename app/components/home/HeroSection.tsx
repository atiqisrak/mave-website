'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/app/contexts/ThemeContext';
import RotatingText from '../ui/RotatingText';
import Image from 'next/image';

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`relative z-10 container mx-auto px-4 py-20 pt-40`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl lg:text-heading-1 font-graphik font-bold mb-6">
          Build{" "}
          <span className="inline-block">
            <RotatingText
              texts={[
                "web apps",
                "landing pages",
                "dashboards",
                "portfolios"
              ]}
              mainClassName="inline-flex bg-gradient-to-r from-primary-600 to-orange-400 text-transparent bg-clip-text px-2"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              elementLevelClassName="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-400"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
          {" "}faster
          <br />
          Powered by AI
        </h1>
        
        <p className="text-lg md:text-body-large font-manrope text-foreground/80 max-w-2xl mx-auto mb-8">
          Mave is an open-source visual editing and content platform for building
          websites and apps. Integrate with existing codebases. Performs incredibly fast.
        </p>

        <div className="flex justify-center items-center">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1000}
          height={1000}
            className="w-[60vw] h-auto rounded-lg border-2 border-primary-700/20"
          />
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="w-full sm:w-auto glass-button bg-primary-700 text-white hover:bg-primary-800 flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto glass-button text-foreground hover:text-primary-700">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
