import { motion } from 'framer-motion'
import React from 'react'

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string; // CSS gradient string
  background?: string; // CSS color string
}

const GradientText = ({
  children,
  gradient = 'linear-gradient(90deg, #3bb3fd, #a855f7, #7b2ff2)',
  background = '#fff',
}: GradientTextProps) => {
  return (
    <div
      className="inline-block p-[2px] rounded-full"
      style={{
        background: gradient,
      }}
    >
      <div className="rounded-full px-6 py-1" style={{ background }}>
        <motion.span
          className="text-lg font-normal text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.span>
      </div>
    </div>
  )
}

export default GradientText