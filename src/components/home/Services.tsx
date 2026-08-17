import { motion } from 'motion/react';
import { SERVICES } from '../../constants';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import Reveal from '../Reveal';
import StaggerText from '../StaggerText';
import ParallaxElement from '../ParallaxElement';
import Magnetic from '../Magnetic';

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="py-24 md:py-48 px-8 bg-stone/5 relative overflow-hidden">
      {/* Background Parallax */}
      <ParallaxElement speed={-0.06} className="absolute bottom-20 left-[-5%] text-[25vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
        EXPERTISE
      </ParallaxElement>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <ParallaxElement speed={0.03}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-gold font-mono text-xs">03</span>
                  <div className="h-[1px] w-12 bg-gold" />
                  <span className="text-xs uppercase tracking-[0.4em] text-ivory/60 font-bold">Expertise</span>
                </div>
              </Reveal>
              <StaggerText
                el="h2"
                text="THE ART OF SPATIAL STORYTELLING."
                className="text-6xl font-display font-bold tracking-tighter leading-[0.85] mb-12"
                delay={0.2}
                stagger={0.08}
              />
              <StaggerText
                text="From private residences to urban landmarks, we provide a full spectrum of architectural services tailored for the most discerning clients."
                className="text-ivory/70 text-lg font-light leading-relaxed max-w-xs italic font-serif"
                delay={0.6}
                stagger={0.02}
              />
            </ParallaxElement>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} direction="up" delay={i * 0.1} fullWidth>
                <div
                  className="border-b border-stone/10 py-16 cursor-pointer group"
                  onMouseEnter={() => setActiveId(service.id)}
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-8">
                      <span className="text-gold font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                      <h3 className={`text-5xl md:text-6xl font-display font-bold tracking-tighter transition-all duration-700 ${activeId === service.id ? 'text-gold pl-8' : 'text-ivory group-hover:pl-4'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <Magnetic strength={0.5}>
                      <div className={`w-12 h-12 rounded-full border border-stone/20 flex items-center justify-center transition-all duration-500 ${activeId === service.id ? 'bg-gold border-gold rotate-45' : 'group-hover:border-gold'}`}>
                        <Plus 
                          className={`transition-colors duration-500 ${activeId === service.id ? 'text-ink' : 'text-ivory/40 group-hover:text-gold'}`} 
                          size={24} 
                        />
                      </div>
                    </Magnetic>
                  </div>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: activeId === service.id ? 'auto' : 0,
                      opacity: activeId === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-4 md:pl-16 flex flex-col md:flex-row gap-12 md:gap-24">
                      <p className="flex-1 text-ivory/70 text-lg font-light leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex-1 grid grid-cols-1 gap-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center justify-between border-b border-stone/10 pb-4 group/item">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60 font-bold group-hover/item:text-gold transition-colors">
                              {feature}
                            </span>
                            <div className="w-1.5 h-1.5 bg-gold/20 group-hover/item:bg-gold transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
