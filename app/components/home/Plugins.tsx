import React from 'react'
import { motion } from 'framer-motion'

const plugins = [
  'salesforce', 'paypal', 'figma', 'woo', 'shopify', 'hubspot', 'youtube', 'cloudflare', 'linkedin', 'twitter', 'magento', 'stripe', 'facebook', 'google', 'mailchimp', 'zoho', 'notion', 'gatsby', 'hotjar'
]

const Plugins = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.span
          className="inline-block border border-blue-400 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4 bg-white/80"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Plugins
        </motion.span>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Expand your site with your favorite tools and apps.
        </motion.h2>
        <motion.p
          className="text-gray-700 text-center max-w-2xl mb-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From analytics to searches, comments to image decoding, Mave includes plugins to connect your site with great features from a range of providers.
        </motion.p>
        <motion.a
          href="#"
          className="text-blue-600 font-medium hover:underline flex items-center gap-1 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore plugins <span aria-hidden>→</span>
        </motion.a>
        <motion.img
          src="/images/plugins.png"
          alt="Plugins"
          className="w-full max-w-2xl h-auto object-contain -mt-10 sm:-mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
      </div>
    </section>
  )
}

export default Plugins