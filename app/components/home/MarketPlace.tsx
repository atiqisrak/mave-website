import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

const MarketPlace = () => {
  return (
    <section
      className="w-full bg-[#f7f8fa] py-16 px-4 h-svh md:h-[70svh] lg:h-[80svh] bg-no-repeat bg-top-right bg-cover rounded-t-3xl -mt-5 z-20"
      style={{
        backgroundImage: "url('/images/marketplace.png')",
        backgroundSize: "70%",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row pt-10 md:pt-20 md:items-start gap-10 md:gap-0 ">
        <motion.div
          className="flex-1 flex flex-col items-start justify-center md:pr-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-gray-700 mb-2">Marketplace</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Beautifully-designed and <br className="hidden sm:block" />hand-coded themes.
          </h2>
          <p className="text-gray-700 mb-4 max-w-lg text-base sm:text-lg">
            Say 'No!' to cookie-cutter, derivative, and low-quality websites with bloated code and generic features. Use our professional, predefined templates as a base and build a website that stands out from the crowd.
          </p>
          <motion.a
            href="#"
            className="text-purple-600 font-medium hover:underline flex items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse themes <span aria-hidden>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketPlace