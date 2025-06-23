import Image from 'next/image'
import React from 'react'

const features = [
  {
    icon: "/images/picker.png",
    title: <>Create completely <br /><span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">custom UIs</span></>,
    description: "Create unique, custom UIs with arbitrary layouts and styling that can be tailored to your specific needs and requirements.",
    image: "/images/ecom.png",
    glowColor: "from-purple-500 to-pink-500",
    imageOrder: "last",
  },
  {
    icon: "/images/petals.png",
    title: <>Import with <br /><span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Figma</span></>,
    description: "Create unique, custom UIs with arbitrary layouts and styling that can be tailored to your specific needs and requirements.",
    image: "/images/side.png",
    glowColor: "from-orange-400 to-yellow-400",
    imageOrder: "first",
  },
]

const bottomFeatures = [
    {
        title: <>Empower <br /><span className="pl-20 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">non-developers</span></>,
        description: "Empower marketing, content, design, and product teams to build and publish. Developers can register custom components as building blocks that other team members can use.",
        align: 'left'
    },
    {
        title: <>Collaborate <br /><span className="pr-20 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">effortlessly</span></>,
        description: "Go from silos and endless backlogs to streamlined workflows between development and business teams. Let everyone focus on what they do best with branching and multiplayer mode.",
        align: 'right'
    }
]

const Collaboration = () => {
  return (
    <div className="bg-[#060318] py-20 sm:py-32 text-white rounded-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-1.5 border border-gray-700 bg-gray-800/50 rounded-full text-sm font-medium text-gray-400 mb-6">
                    COLLABORATION
                </div>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
                    <span className="bg-gradient-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text">Bridge the gap</span><br />between teams
                </h2>
                <p className="mt-6 text-lg sm:text-xl max-w-3xl text-gray-400">
                    <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Mave</span> makes the development process more collaborative, so everyone can build better experiences together.
                </p>
                <div className="mt-10 relative">
                    <div className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full"></div>
                    <Image src="/images/collaboration.png" alt="Collaboration dashboard" width={900} height={500} className="relative rounded-xl shadow-2xl ring-1 ring-white/10" />
                </div>
            </div>
            
            <div className="mt-24 sm:mt-32 space-y-24">
                {features.map((feature, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
                        <div className={`flex flex-col items-start gap-4 md:order-${feature.imageOrder === 'first' ? 'last' : 'first'}`}>
                            <Image src={feature.icon} alt="" width={60} height={60} />
                            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{feature.title}</h3>
                            <p className="text-gray-400 text-lg">{feature.description}</p>
                        </div>
                        <div className={`relative ${feature.imageOrder === 'first' ? 'md:order-first' : 'md:order-last'}`}>
                            <div className={`absolute -inset-4 sm:-inset-6 bg-gradient-to-r ${feature.glowColor} rounded-2xl blur-2xl opacity-40`}></div>
                            <Image src={feature.image} alt="Feature image" width={560} height={320} className="relative rounded-xl shadow-xl ring-1 ring-white/10" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 sm:mt-32 gap-16 flex flex-col">
                {bottomFeatures.map((feature, index) => (
                    <div key={index} className={`flex justify-between items-center ${feature.align === 'right' ? 'flex-row-reverse' : ''}`}>
                        <h3 className={`text-3xl sm:text-4xl font-bold tracking-tight leading-tight ${feature.align === 'right' ? 'text-right' : 'text-left'}`}>{feature.title}</h3>
                        <p className={`mt-4 text-gray-400 text-lg max-w-3xl ${feature.align === 'right' ? 'text-right' : 'text-left'}`}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Collaboration