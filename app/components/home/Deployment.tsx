import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Deployment = () => {
  return (
    <motion.section 
      className="py-20 sm:py-32 overflow-hidden bg-no-repeat bg-right-top bg-cover lg:bg-[length:60%_auto]"
      style={{backgroundImage: 'url(/images/deploy.png)'}}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24">         
         <div className="flex flex-col gap-10 lg:gap-0" >
           <motion.div 
             className="lg:pl-20 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start"
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.6, delay: 0.2 }}
            >
             <h2 className="text-5xl md:text-7xl font-graphik-semibold 
             tracking-tighter text-gray-800 dark:text-white">
               Deploy
               <br />
               <span className="lg:pl-20 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
                 anywhere
               </span>
             </h2>
             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
               Deploy to your choice of hosting infrastructure, so you can maintain control and easily scale your app.
             </p>
           </motion.div>
           
           <motion.div 
            className="flex justify-center lg:justify-end mt-12 lg:mt-[-10rem]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
           >
             <Image 
               src="/images/deploy2.png" 
               alt="Deployment UI screenshots" 
               width={650} 
               height={450}
             />
            </motion.div>
        </div>
        </div>
    </motion.section>
  )
}

export default Deployment