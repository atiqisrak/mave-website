import Link from 'next/link';
import { SocialLink } from '../../../data/footerData';

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary-800 transition-colors flex items-center gap-2"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d={link.icon} />
          </svg>
          {link.label}
        </Link>
      ))}
    </div>
  );
}; 