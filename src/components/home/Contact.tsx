import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import Reveal from '../Reveal';
import StaggerText from '../StaggerText';
import ParallaxElement from '../ParallaxElement';
import Magnetic from '../Magnetic';
import { companyEmail } from '../../config/siteMode';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 px-8 relative overflow-hidden">
      {/* Background Parallax */}
      <ParallaxElement speed={-0.08} className="absolute top-40 right-[-10%] text-[25vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
        CONNECT
      </ParallaxElement>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <ParallaxElement speed={0.02}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-gold font-mono text-xs">04</span>
                  <div className="h-[1px] w-12 bg-gold" />
                  <span className="text-xs uppercase tracking-[0.4em] text-ivory/60 font-bold">Inquiries</span>
                </div>
              </Reveal>
              <StaggerText
                el="h2"
                text="LET'S DEFINE THE FUTURE."
                className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] mb-16"
                delay={0.2}
                stagger={0.08}
              />
              
              <div className="space-y-16">
                {[
                  { label: 'New Projects', value: companyEmail('projects') },
                  { label: 'Press & Media', value: companyEmail('press') },
                  { label: 'Careers', value: companyEmail('careers') }
                ].map((item, i) => (
                  <Reveal key={item.label} direction="right" delay={i * 0.1 + 0.2}>
                    <div className="group cursor-pointer">
                      <h4 className="text-[10px] uppercase tracking-[0.4em] text-ivory/60 font-bold mb-4 group-hover:text-gold transition-colors">{item.label}</h4>
                      <p className="text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">{item.value}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-24 pt-12 border-t border-stone/10 flex gap-8">
                {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                  <a key={social} href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-ivory/60 hover:text-gold transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </ParallaxElement>
          </div>

          <div className="lg:col-span-7 lg:pl-24">
            <ParallaxElement speed={-0.02}>
              <Reveal direction="left" delay={0.2}>
                <div className="bg-stone/5 p-8 md:p-20 border border-stone/10 relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/20" />
                  
                  <form className="space-y-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div className="relative group">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-ivory/60 font-bold mb-4 block">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/20 text-ivory text-xl font-light"
                        />
                      </div>
                      <div className="relative group">
                        <label className="text-[10px] uppercase tracking-[0.4em] text-ivory/60 font-bold mb-4 block">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="hello@example.com"
                          className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/20 text-ivory text-xl font-light"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-ivory/60 font-bold mb-4 block">Project Type</label>
                      <select className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 text-ivory/40 text-xl font-light appearance-none">
                        <option>Select Sector</option>
                        <option>Private Residential</option>
                        <option>Commercial Development</option>
                        <option>Hospitality & Leisure</option>
                        <option>Urban Masterplan</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-ivory/60 font-bold mb-4 block">Message</label>
                      <textarea 
                        placeholder="Tell us about your vision..."
                        rows={4}
                        className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/20 text-ivory text-xl font-light resize-none"
                      />
                    </div>
                    <Magnetic strength={0.2}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-8 bg-gold text-ink uppercase tracking-[0.4em] font-bold text-[10px] flex items-center justify-center gap-6 group overflow-hidden relative"
                      >
                        <span className="relative z-10">Send Inquiry</span>
                        <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </motion.button>
                    </Magnetic>
                  </form>
                </div>
              </Reveal>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
}
