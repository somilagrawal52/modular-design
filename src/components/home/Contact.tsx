import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import Reveal from '../Reveal';
import StaggerText from '../StaggerText';
import ParallaxElement from '../ParallaxElement';
import Magnetic from '../Magnetic';
import { dreamRealtyEmail } from '../../config/siteMode';

export default function Contact() {
  return (
    <section id="contact" className="section-space relative overflow-hidden">
      {/* Background Parallax */}
      <ParallaxElement speed={-0.08} className="absolute top-40 right-[-10%] text-[25vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
        CONNECT
      </ParallaxElement>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <ParallaxElement speed={0.02}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-gold font-mono text-xs">05</span>
                  <div className="h-[1px] w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.1em] text-ivory/60 font-semibold">Inquiries</span>
                </div>
              </Reveal>
              <StaggerText
                el="h2"
                text="Let's define the future."
                className="type-section mb-10"
                delay={0.2}
                stagger={0.08}
              />
              
              <div className="space-y-10 md:space-y-12">
                {[
                  { label: 'New Projects', value: dreamRealtyEmail('projects') },
                  { label: 'Press & Media', value: dreamRealtyEmail('press') },
                  { label: 'Careers', value: dreamRealtyEmail('careers') }
                ].map((item, i) => (
                  <Reveal key={item.label} direction="right" delay={i * 0.1 + 0.2}>
                    <a href={`mailto:${item.value}`} className="group block w-fit">
                      <h4 className="text-xs uppercase tracking-[0.1em] text-ivory/60 font-semibold mb-3 group-hover:text-gold transition-colors">{item.label}</h4>
                      <p className="text-2xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">{item.value}</p>
                    </a>
                  </Reveal>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-stone/10 flex flex-wrap gap-x-8 gap-y-3">
                {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                  <a key={social} href="#" className="inline-flex min-h-11 items-center text-xs uppercase tracking-[0.08em] font-semibold text-ivory/60 hover:text-gold transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </ParallaxElement>
          </div>

          <div className="lg:col-span-7 lg:pl-24">
            <ParallaxElement speed={-0.02}>
              <Reveal direction="left" delay={0.2}>
                <div className="bg-stone/5 p-6 md:p-12 xl:p-16 border border-stone/10 relative">
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/20" />
                  
                  <form className="space-y-9 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                      <div className="relative group">
                        <label htmlFor="home-contact-name" className="text-xs uppercase tracking-[0.08em] text-ivory/60 font-semibold mb-3 block">Full Name</label>
                        <input 
                          type="text" 
                          id="home-contact-name"
                          name="name"
                          autoComplete="name"
                          placeholder="Your Name"
                          className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/40 text-ivory text-lg font-light"
                        />
                      </div>
                      <div className="relative group">
                        <label htmlFor="home-contact-email" className="text-xs uppercase tracking-[0.08em] text-ivory/60 font-semibold mb-3 block">Email Address</label>
                        <input 
                          type="email" 
                          id="home-contact-email"
                          name="email"
                          autoComplete="email"
                          placeholder="hello@example.com"
                          className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/40 text-ivory text-lg font-light"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <label htmlFor="home-contact-project-type" className="text-xs uppercase tracking-[0.08em] text-ivory/60 font-semibold mb-3 block">Project Type</label>
                      <select id="home-contact-project-type" name="projectType" className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 text-ivory/70 text-lg font-light appearance-none">
                        <option>Select Sector</option>
                        <option>Modular Home</option>
                        <option>Modular Hotel or Retreat</option>
                        <option>Modular Office</option>
                        <option>Café, Bar, or Restaurant</option>
                        <option>Retail or Pop-Up</option>
                        <option>Pool or Outdoor Amenity</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <label htmlFor="home-contact-message" className="text-xs uppercase tracking-[0.08em] text-ivory/60 font-semibold mb-3 block">Message</label>
                      <textarea 
                        placeholder="Tell us about your vision..."
                        id="home-contact-message"
                        name="message"
                        rows={4}
                        className="w-full bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/40 text-ivory text-lg font-light resize-none"
                      />
                    </div>
                    <Magnetic strength={0.2}>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-6 bg-gold text-ink uppercase tracking-[0.1em] font-semibold text-xs flex items-center justify-center gap-6 group overflow-hidden relative"
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
