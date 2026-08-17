import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import CinematicSection from '../components/CinematicSection';
import { ArrowDown } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="bg-ink min-h-screen">
      <SEO
        title="Our Services"
        description="AURELIAN Studios offers specialized expertise in architectural design, interior architecture, and urban planning."
      />
      {/* Hero Section */}
      <CinematicSection parallax={false} className="h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2000"
            alt="Architecture Blueprint"
            speed={0.2}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-ink/60 z-10" />
        </div>

        <div className="relative z-20 text-center px-4">
          <ParallaxElement speed={0.05}>
            <Reveal direction="up">
              <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-8 block">Our Capabilities</span>
            </Reveal>
            <StaggerText
              el="h1"
              text="THE ART OF PRECISION."
              className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.85] tracking-tighter mt-40"
              delay={0.4}
              stagger={0.08}
            />
          </ParallaxElement>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Explore Services</span>
          <ArrowDown size={16} className="text-gold animate-bounce" />
        </div>
      </CinematicSection>

      {/* Services Showcase */}
      <div className="relative">
        {SERVICES.map((service, i) => (
          <CinematicSection key={service.id} className="py-16 md:py-32 px-8 md:px-24 border-b border-stone/10">
            {/* Background Number */}
            <ParallaxElement speed={-0.1} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
              0{i + 1}
            </ParallaxElement>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <ParallaxElement speed={0.03}>
                  <Reveal direction="right">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-gold font-mono text-xs">0{i + 1}</span>
                      <div className="h-[1px] w-12 bg-gold" />
                      <span className="text-xs uppercase tracking-[0.3em] text-ivory/60 font-bold">Service Sector</span>
                    </div>
                  </Reveal>
                  <StaggerText
                    el="h2"
                    text={service.title}
                    className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-12"
                    delay={0.2}
                  />
                  <StaggerText
                    text={service.description}
                    className="text-2xl font-light text-ivory/80 leading-tight mb-16"
                    delay={0.4}
                    stagger={0.02}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.features.map((feature, j) => (
                      <Reveal key={feature} direction="up" delay={j * 0.1 + 0.6}>
                        <div className="group flex items-start gap-4 p-6 border border-stone/10 bg-stone/5 hover:border-gold/30 transition-colors duration-500">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 group-hover:scale-150 transition-transform" />
                          <div>
                            <StaggerText
                              text={feature}
                              className="text-[10px] uppercase tracking-widest text-ivory/60 font-bold mb-2"
                              delay={0.2}
                            />
                            <p className="text-xs text-ivory/40 font-light">Specialized expertise in {feature.toLowerCase()} for complex projects.</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </ParallaxElement>
              </div>

              <ParallaxElement speed={i % 2 === 0 ? -0.05 : 0.05}>
                <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Technical Overlay */}
                  <div className="absolute -inset-4 border border-gold/10 pointer-events-none z-20" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gold/5 mix-blend-overlay z-10" />

                  <Reveal
                    direction={i % 2 === 1 ? 'right' : 'left'}
                    delay={0.2}
                    className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
                  >
                    <ParallaxImage
                      src={`https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000&sig=${i}`}
                      alt={service.title}
                      className="w-full h-full transition-all duration-1000"
                    />
                  </Reveal>

                  {/* Floating Metadata */}
                  <div className={`absolute bottom-12 ${i % 2 === 1 ? '-left-12' : '-right-12'} z-30 hidden xl:block`}>
                    <div className="vertical-text text-[10px] uppercase tracking-[0.5em] text-gold font-bold bg-ink/80 backdrop-blur-md p-4 border border-gold/20">
                      CAPABILITY — 0{i + 1}
                    </div>
                  </div>
                </div>
              </ParallaxElement>
            </div>
          </CinematicSection>
        ))}
      </div>

      {/* Process Section */}
      <CinematicSection className="py-24 md:py-48 px-8 md:px-24 bg-stone/5">
        <ParallaxElement speed={-0.05} className="absolute top-20 right-[-10%] text-[25vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
          METHOD
        </ParallaxElement>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 md:mb-32">
            <Reveal direction="right">
              <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-6 block">Our Process</span>
            </Reveal>
            <StaggerText
              el="h2"
              text="FROM CONCEPT TO REALITY."
              className="text-6xl md:text-8xl font-display font-bold tracking-tighter"
              delay={0.2}
              stagger={0.08}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', text: 'We begin by understanding the site, the context, and the unique aspirations of the client.' },
              { step: '02', title: 'Ideation', text: 'A rigorous conceptual phase where we explore geometry, light, and material possibilities.' },
              { step: '03', title: 'Refinement', text: 'Translating concepts into precise technical drawings and material specifications.' },
              { step: '04', title: 'Execution', text: 'Overseeing the realization of the vision with uncompromising attention to detail.' }
            ].map((item, i) => (
              <ParallaxElement key={item.step} speed={0.02 * (i + 1)}>
                <Reveal direction="up" delay={i * 0.1}>
                  <div className="space-y-8 p-12 border border-stone/10 bg-ink/40 backdrop-blur-sm relative group hover:border-gold/30 transition-all duration-500 h-full">
                    <span className="text-5xl font-display font-bold text-gold/20 group-hover:text-gold transition-colors duration-500">{item.step}</span>
                    <h3 className="text-xl font-bold uppercase tracking-widest">{item.title}</h3>
                    <p className="text-ivory/70 font-light leading-relaxed text-sm">{item.text}</p>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-gold/20 group-hover:border-gold transition-colors" />
                  </div>
                </Reveal>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* CTA Section */}
      <CinematicSection className="py-24 md:py-48 px-8 text-center">
        <ParallaxElement speed={0.05}>
          <Reveal direction="up">
            <span className="text-xs uppercase tracking-[0.5em] text-ivory/60 mb-8 block">Ready to Begin?</span>
            <Link to="/contact" className="group inline-block">
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter group-hover:text-gold transition-colors">
                Start Your <span className="font-serif italic font-light">Project</span>
              </h2>
            </Link>
          </Reveal>
        </ParallaxElement>
      </CinematicSection>
    </div>
  );
}
