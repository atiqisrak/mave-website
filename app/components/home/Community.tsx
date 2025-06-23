import React from 'react'
import GradientText from '../ui/GradientText'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    image: "/images/avatar.png",
    name: "Cole Bemis",
    role: "Design Systems Engineer",
    company: "@GitHub",
    companyUrl: "https://github.com/",
    text: "I had the opportunity to test out an early version of Mave and it's awesome! Excited for the future of this design tool.",
  },
  {
    image: "/images/avatar.png",
    name: "Sarah Lee",
    role: "Frontend Developer",
    company: "@Shopify",
    companyUrl: "https://shopify.com/",
    text: "Mave has made our workflow so much smoother. The visual editing is a game changer for our marketing team!",
  },
  {
    image: "/images/avatar.png",
    name: "James Ametsa",
    role: "Backend Software Engineer",
    company: "@Stripe",
    companyUrl: "https://stripe.com/",
    text: "It's already been a huge increase in efficiency for me, personally. I'm really looking forward to a huge drop in scope for tests that require new components (most of them).",
  },
  {
    image: "/images/avatar.png",
    name: "Priya Nair",
    role: "Product Manager",
    company: "@Notion",
    companyUrl: "https://notion.so/",
    text: "The ability to collaborate visually has brought our dev and design teams closer than ever. Highly recommend!",
  },
  {
    image: "/images/avatar.png",
    name: "Alex Kim",
    role: "UI/UX Designer",
    company: "@Figma",
    companyUrl: "https://figma.com/",
    text: "I love how easy it is to turn my designs into live components. Mave bridges the gap between design and code!",
  },
  {
    image: "/images/avatar.png",
    name: "Maria Gonzales",
    role: "Content Strategist",
    company: "@HubSpot",
    companyUrl: "https://hubspot.com/",
    text: "Publishing and updating content is now a breeze. Mave's visual blocks are intuitive and powerful.",
  },
  {
    image: "/images/avatar.png",
    name: "Liam O'Connor",
    role: "Full Stack Developer",
    company: "@Vercel",
    companyUrl: "https://vercel.com/",
    text: "The integration with our existing stack was seamless. Performance and flexibility are top-notch!",
  },
  {
    image: "/images/avatar.png",
    name: "Emily Chen",
    role: "QA Engineer",
    company: "@Atlassian",
    companyUrl: "https://atlassian.com/",
    text: "Testing new features is so much faster now. Mave's preview and rollback features are a lifesaver!",
  },
  {
    image: "/images/avatar.png",
    name: "David Park",
    role: "DevOps Engineer",
    company: "@AWS",
    companyUrl: "https://aws.amazon.com/",
    text: "Deployments are more reliable and less stressful. Mave's auto-scaling and CDN support are fantastic.",
  },
]

const Community = () => {
  return (
    <section className="w-full bg-white pt-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative">
        {/* Left: Pill, Heading, Testimonial */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full">
          <GradientText
            gradient="linear-gradient(90deg, #3bb3fd, #a855f7, #7b2ff2)"
            background="#fff"
          >
            THE COMMUNITY LOVE
          </GradientText>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            from the <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Community</span>
          </h2>
          {/* Main Testimonial Card */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-lg w-full flex flex-col gap-4">
            <p className="text-lg text-black font-medium">“{testimonials[0].text}”</p>
            <div className="flex items-center gap-3 mt-2">
              <img src={testimonials[0].image} alt={testimonials[0].name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold text-gray-900 text-base">{testimonials[0].name}</div>
                <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1">
                  {testimonials[0].role}
                  <a href={testimonials[0].companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium ml-1">{testimonials[0].company}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Deer Image */}
        <div className="flex-1 flex items-center justify-center w-full">
          <Image src="/images/raindeer.png" alt="raindeer" width={380} height={380} 
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
        </div>
      </div>
      {/* Masonry Testimonials */}
      <div className="relative w-full max-w-5xl mx-auto mt-12">
        {/* White overlay gradient */}
        <div className="pointer-events-none absolute inset-0 z-10" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.0) 0%, #fff 100%)'}} />
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid bg-white rounded-2xl shadow-lg p-6 mb-4 flex flex-col gap-4 relative z-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <p className="text-base text-black font-medium">“{t.text}”</p>
              <div className="flex items-center gap-3 mt-2">
                <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 flex flex-wrap items-center gap-1">
                    {t.role}
                    {t.company && (
                      <a href={t.companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium ml-1">{t.company}</a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Astronaut illustration at the bottom */}
      <div className="flex flex-col items-center justify-center mt-10">
        <Image src="/images/astro.png" alt="astro" width={380} height={380} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto" />
      </div>
    </section>
  )
}

export default Community