import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { dreamRealtyEmail, SITE_NAME, SITE_STUDIO_NAME } from '../config/siteMode';

const footerGroups = [
  {
    title: 'Explore',
    links: [
      { label: 'Capsule Collection', to: '/work' },
      { label: 'Our Services', to: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Technology Behind It', to: '/system' },
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-stone/10 pt-16 md:pt-32 pb-12 px-8 relative overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute bottom-0 left-0 w-full text-[20vw] font-brand font-semibold tracking-[0.08em] text-ivory/5 pointer-events-none select-none leading-none translate-y-1/2">
        {SITE_NAME}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
        <div className="lg:col-span-7">
          <Reveal direction="right">
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] mb-12">
              Let's build
              <span className="text-gold font-display font-medium">something timeless.</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.4}>
            <a
              href={`mailto:${dreamRealtyEmail('studio')}`}
              className="group inline-flex items-center gap-6 text-2xl md:text-4xl font-light tracking-tight hover:text-gold transition-all duration-500"
            >
              {dreamRealtyEmail('studio')}
              <div className="w-12 h-12 rounded-full border border-stone/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                <ArrowUpRight className="group-hover:text-ink transition-colors" size={24} />
              </div>
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
          {footerGroups.map((group, index) => (
            <Reveal key={group.title} direction="up" delay={0.2 + index * 0.1}>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-6">{group.title}</h4>
              <div className="flex flex-col items-start gap-1">
                {group.links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="inline-flex min-h-11 items-center text-[10px] uppercase tracking-[0.3em] font-bold text-ivory/70 transition-colors duration-500 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-32 pt-8 md:pt-12 border-t border-stone/10 flex justify-center md:justify-start text-center md:text-left text-[9px] uppercase tracking-[0.32em] text-ivory/60 font-brand font-semibold relative z-10">
        <Reveal direction="up" delay={0.5}>
          <p>© {new Date().getFullYear()} {SITE_STUDIO_NAME}. ALL RIGHTS RESERVED.</p>
        </Reveal>
      </div>
    </footer>
  );
}
