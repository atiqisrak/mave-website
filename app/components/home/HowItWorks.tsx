import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 mb-8">
          HOW IT WORKS
        </div>
        <div className="flex flex-col items-center">
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter ">
            Build Experiences
          </h2>

          <div className="flex gap-6 justify-center items-center my-4 ml-0 sm:ml-32 md:ml-64">
            
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">blazingly fast</h2>
          <Image src="/images/3row.svg" alt="3row" width={50} height={50} />
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-xl max-w-3xl mx-auto mt-6">
          Get started with a growing library of ready-made components and popular data and
          app integrations. Build custom experiences with interactions and dynamic values.
        </p>

        <div className="w-full max-w-6xl mx-auto mt-16">
          <Image
            src="/images/howitworks.png"
            alt="Mave editor"
            width={1920}
            height={1080}
            className="rounded-xl shadow-2xl ring-1 ring-black/10"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;