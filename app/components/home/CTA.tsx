import React from 'react'
import Image from 'next/image'

const CTA = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                VISUAL EDITING CMS WITH <span className="border border-purple-400/50 text-purple-400 rounded-md px-2 py-1">NEXTJS</span>
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                The only headless CMS with true
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                    Visual Editing
                </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
                Turn your components into visual editing blocks. Make marketers autonomous. Keep the design system safe.
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <button className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
                    Get Started
                </button>
                <button className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 
                dark:text-purple-300 py-3 px-6 rounded-lg hover:bg-purple-200 
                dark:hover:bg-purple-900/80 transition-colors">
                    See a demo
                </button>
            </div>
        </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-lg blur-xl opacity-50 animate-pulse"></div>
              <Image src="/images/visualeditor.png" alt="Mave editor" width={700} height={700} className="relative z-10 rounded-lg shadow-2xl" />
            </div>
       
        </div>
    </section>
  )
}

export default CTA