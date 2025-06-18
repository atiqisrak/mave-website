import Link from 'next/link';
import { FooterSection as FooterSectionType } from '../../../data/footerData';

interface FooterSectionProps {
  section: FooterSectionType;
}

export const FooterSection = ({ section }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-primary-800 font-semibold mb-6 uppercase tracking-wider">
        {section.title}
      </h3>
      <ul className="space-y-4">
        {section.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-foreground hover:text-primary-800 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}; 