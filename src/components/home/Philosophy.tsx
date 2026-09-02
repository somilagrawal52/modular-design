import { motion } from 'motion/react';
import Reveal from '../Reveal';
import ParallaxImage from '../ParallaxImage';
import StaggerText from '../StaggerText';
import ParallaxElement from '../ParallaxElement';
import { MANAGER_DEMO_MODE } from '../../config/siteMode';

export default function Philosophy() {
  return (
    <section id="about" className="py-48 px-8 bg-ivory text-ink relative overflow-hidden">
      {/* Background Parallax */}
      <ParallaxElement speed={-0.08} className="absolute top-40 right-[-5%] text-[25vw] font-display font-bold text-stone/5 pointer-events-none select-none leading-none z-0">
        MODULAR
      </ParallaxElement>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7">
            <ParallaxElement speed={0.02}>
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-12">
                  <span className="text-gold font-mono text-xs">01</span>
                  <div className="h-[1px] w-12 bg-gold" />
                  <span className="text-xs uppercase tracking-[0.4em] text-stone font-bold">Why modular</span>
                </div>
              </Reveal>
              
              <StaggerText
                el="h2"
                text="Premium capsule models for extraordinary settings."
                className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.92] mb-16 text-stone"
                delay={0.2}
                stagger={0.05}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <StaggerText
                  text="Dream Realty Ventures presents design-led space capsules and modular living solutions for hospitality, retreats, commercial spaces, and private projects."
                  className="text-xl text-stone/80 font-light leading-relaxed"
                  delay={0.6}
                  stagger={0.02}
                />
                {!MANAGER_DEMO_MODE && <StaggerText
                  text="Each model is a clear starting point for conversations about site conditions, interior character, application, and the experience you want to create."
                  className="text-sm text-stone/60 font-light leading-relaxed pt-2"
                  delay={1.2}
                  stagger={0.01}
                />}
              </div>

            </ParallaxElement>
          </div>

          <div className="lg:col-span-5">
            <ParallaxElement speed={-0.04}>
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-stone/10 pointer-events-none z-20" />
                
                <Reveal direction="left" delay={0.3} className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                  <ParallaxImage
                    src="/images/modular-campus-aerial-hero.jpg"
                    alt="Aerial view of a modular living campus"
                    className="w-full h-full transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gold/5 mix-blend-overlay z-10" />
                </Reveal>
                
                <div className="absolute -bottom-12 -left-12 z-30 hidden xl:block">
                  <div className="vertical-text text-[10px] uppercase tracking-[0.5em] text-gold font-bold bg-ivory/80 backdrop-blur-md p-6 border border-gold/20 shadow-xl">
                    MODULAR LIVING CAMPUS
                  </div>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
}
