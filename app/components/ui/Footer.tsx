'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../../contexts/ThemeContext';
import { footerData } from '../../data/footerData';
import { FooterSection } from './footer/FooterSection';
import { SocialLinks } from './footer/SocialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="relative bg-background text-white py-16 overflow-hidden">
      {/* Floating Astronaut */}
      <div className="absolute right-0 bottom-80 lg:right-36 lg:bottom-56 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] opacity-80">
        <Image
          src="/images/astronaut.png"
          alt="Floating Astronaut"
          width={400}
          height={400}
          className="animate-float"
          style={{
            transform: 'scaleX(-1)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Main Sections */}
          <FooterSection section={footerData.sections.product} />
          <FooterSection section={footerData.sections.resources} />
          <FooterSection section={footerData.sections.comparison} />
          <FooterSection section={footerData.sections.frameworks} />

          {/* Company and Social Links */}
          {/* <div className="space-y-8 "> */}
            <FooterSection section={footerData.sections.partnerships} />
            
            {/* Connect with Us Section */}
            <div>
              <h3 className="text-primary-800 font-semibold mb-6 uppercase tracking-wider">
                Connect with Us
              </h3>
              <SocialLinks links={footerData.social} />
            </div>

            <FooterSection section={footerData.sections.company} />
          {/* </div> */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src={theme === 'dark' ? '/images/logo-dark.svg' : '/images/logo-light.svg'}
                  alt="Mave Logo"
                  width={110}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-400 text-center lg:text-left max-w-md">
                {footerData.companyInfo.description}
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm text-gray-400">
              {footerData.bottomLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <span>© {currentYear} Mave Labs.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
