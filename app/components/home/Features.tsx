'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const featureData = [
  {
    title: 'Developers',
    description: 'Leverage React and TypeScript with any CSS framework, external data integration, easy to learn, great docs.',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
  },
  {
    title: 'Creators',
    description: 'Ignite your creativity & bring your next idea or project faster and more effortlessly to life.',
    bgColor: 'bg-pink-500/10',
    textColor: 'text-pink-500',
  },
  {
    title: 'E-commerce',
    description: 'See how you can create a visually editable e-commerce website using the React Bricks external API integration.',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-500',
  },
  {
    title: 'Marketers',
    description: 'The best Visual Editor on the market with DAM, Advanced SEO, Scheduled publishing, Multilanguage and more.',
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-500',
  },
  {
    title: 'Enterprise',
    description: 'Collaboration, Approval workflow, Multiple environments, SSO, Permissions, Scheduled backup.',
    bgColor: 'bg-indigo-500/10',
    textColor: 'text-indigo-500',
  },
];

const FeatureCard = ({ title, description, bgColor, textColor, className }: { title: string; description: string; bgColor: string; textColor: string; className?: string }) => (
  <div className={`p-8 rounded-2xl ${bgColor} ${className}`}>
    <h3 className={`text-2xl font-bold font-graphik mb-4 ${textColor}`}>{title}</h3>
    <p className="text-foreground/80 font-manrope mb-6">{description}</p>
    <a href="#" className={`flex items-center gap-2 font-semibold ${textColor} hover:underline`}>
      Learn more
      <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

const MotionFeatureCard = ({
  feature,
  y = 0,
  className = ''
}: {
  feature: typeof featureData[0];
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: y }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <FeatureCard {...feature} className={className} />
  </motion.div>
);

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <Image
              src="/images/features.png"
              alt="World-class features illustration"
              width={450}
              height={300}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-left lg:pl-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-graphik text-foreground">
              World-class features
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                loved by everybody.
              </span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-8">
            <MotionFeatureCard feature={featureData[0]} />
            <MotionFeatureCard feature={featureData[2]} />
            <MotionFeatureCard feature={featureData[3]} />
          </div>

          <div className="flex flex-col gap-8 md:-translate-y-20">
            <MotionFeatureCard feature={featureData[1]} />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-8 rounded-2xl bg-gray-500/10 min-h-[300px]"
            >
              <Image
                src="/images/shop.png"
                alt="E-commerce shop illustration"
                width={400}
                height={400}
                className="w-full max-w-[300px] h-auto"
              />
            </motion.div>
            <MotionFeatureCard feature={featureData[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}
