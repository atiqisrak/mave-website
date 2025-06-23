import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Self-hosted",
    additionalTitle: "CDN",
    image: "/images/cdn.svg",
    description: "Accelerate your website's performance by distributing content across multiple servers worldwide, ensuring lightning-fast loading times for your visitors.",
  },
  {
    title: "Unlimited",
    additionalTitle: "Cloud Storage",
    image: "/images/cloud.svg",
    description: "Store and manage your website's data effortlessly with unlimited storage options from industry-leading cloud providers like Amazon Web Services (AWS), Google Cloud Platform (GCP), or Microsoft Azure.",
  },
  {
    title: "Global",
    additionalTitle: "Content Distribution",
    image: "/images/distribution.svg",
    description: "Reach a global audience effortlessly by distributing your content across a network of servers strategically located around the world, ensuring optimal performance and accessibility for users regardless of their location.",
  },
  {
    title: "Auto-scaling",
    additionalTitle: "Infrastructure",
    image: "/images/scale.svg",
    description: "Seamlessly handle fluctuating traffic demands with Mave CMS's auto-scaling infrastructure, automatically adjusting resources to accommodate sudden surges in visitors without downtime or performance issues.",
  },
  {
    title: "Dynamic",
    additionalTitle: "Content Caching",
    image: "/images/dynamic.svg",
    description: "Deliver dynamic content to your audience with ease while minimizing server load through advanced caching techniques, ensuring a smooth and responsive user experience even during traffic spikes.",
  },
  {
    title: "SEO-Friendly",
    additionalTitle: "Architecture",
    image: "/images/seo.svg",
    description: "Enhance your website's visibility and reach with Mave CMS's SEO-friendly architecture, designed to help you climb search engine rankings and attract more organic traffic.",
  }
]

const cardMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 }
}

const ScaleUp = () => {
  return (
    <div className="bg-[#060318] py-16 sm:py-24 md:py-32 text-white rounded-t-3xl overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-64 bg-gradient-to-b 
      from-white/10 via-blue-500/10 to-transparent blur-2xl opacity-60 pointer-events-none" />
      <div className="max-w-5xl mx-auto flex flex-col items-center px-4">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-semibold border border-gray-700 rounded-full px-4 py-1 bg-white/5 tracking-wide">SCALE UP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center mb-4">Scale anytime <span className="text-white">Effortlessly</span></h2>
          <p className="text-gray-300 text-center max-w-2xl mb-6 text-base sm:text-lg">
            Manage enterprise-level growth with ease. Scale up and maintain control, even as your application grows and evolves.
          </p>
          <motion.button
            className="group relative flex items-center gap-2 px-6 py-2 rounded-full 
            font-semibold shadow-lg transition hover:scale-105 border-4 border-transparent 
            bg-transparent overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative z-10 text-white">See Demos</span>
            <ArrowRightIcon className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform relative z-10" />
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full p-[3px] bg-[conic-gradient(at_left,_#8636F8,_#F020B3,_#F8475E,_#FF9421,_#8636F8)]" />
            <span aria-hidden className="absolute inset-[3px] rounded-full bg-[#060318]" style={{ zIndex: 1 }} />
          </motion.button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start sm:items-start justify-start bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md hover:shadow-blue-500/20 transition-shadow min-h-[220px]"
              {...cardMotion}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/10">
                <Image src={feature.image} alt="" width={32} height={32} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold leading-tight mb-1 flex flex-wrap items-center gap-1">
                <span>{feature.title}</span>
                <span className="bg-gradient-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text pl-2">{feature.additionalTitle}</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mt-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScaleUp