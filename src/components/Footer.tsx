import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import StaggerText from './StaggerText';
import { dreamRealtyEmail, MANAGER_DEMO_MODE, SITE_NAME, SITE_STUDIO_NAME } from '../config/siteMode';
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

        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <Reveal direction="up" delay={0.2}>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Start a conversation</h4>
              <p className="text-sm text-ivory/75 leading-relaxed max-w-xs">
                Explore a capsule model or discuss the modular application you have in mind with our team.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal direction="up" delay={0.3}>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8">Social Anthology</h4>
              <div className="flex flex-col gap-6">
                {[
                  { name: 'Instagram', icon: <Instagram size={14} /> },
                  { name: 'Twitter', icon: <Twitter size={14} /> },
                  { name: 'LinkedIn', icon: <Linkedin size={14} /> }
                ].slice(0, MANAGER_DEMO_MODE ? 2 : undefined).map((social) => (
                  <a key={social.name} href="#" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-ivory/60 hover:text-gold transition-all duration-500">
                    <span className="opacity-40 group-hover:opacity-100 transition-opacity">{social.icon}</span>
                    {social.name}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-32 pt-12 border-t border-stone/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.32em] text-ivory/60 font-brand font-semibold relative z-10">
        <Reveal direction="up" delay={0.5}>
          <p>© 2026 {SITE_STUDIO_NAME}. ALL RIGHTS RESERVED.</p>
        </Reveal>
        <div className="flex gap-12">
          <Reveal direction="up" delay={0.6}>
            <a href="#" className="hover:text-gold transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
            </a>
          </Reveal>
          <Reveal direction="up" delay={0.7}>
            <a href="#" className="hover:text-gold transition-colors relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full" />
            </a>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
