import { motion } from 'motion/react';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import CinematicSection from '../components/CinematicSection';
import { TEAM } from '../constants';
import SEO from '../components/SEO';
import { MANAGER_DEMO_MODE, demoItems } from '../config/siteMode';

export default function About() {
  return (
    <div className="bg-ink min-h-screen">
      <SEO 
        title="About Us" 
        description="Founded in 1998, AURELIAN is a global architectural practice driven by a singular vision: to strip away the superfluous and reveal the essential beauty of space." 
      />
      {/* Hero Section */}
      <CinematicSection parallax={false} className="h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
            alt="Studio Atmosphere"
            speed={0.2}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-ink/40 z-10" />
        </div>
        
        <div className="relative z-20 text-center px-4">
          <ParallaxElement speed={0.05}>
            <Reveal direction="up">
              <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-8 block">The Studio</span>
            </Reveal>
            <StaggerText
              el="h1"
              text="A LEGACY OF SILENCE."
              className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.85] tracking-tighter mt-40"
              delay={0.4}
              stagger={0.08}
            />
          </ParallaxElement>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </CinematicSection>

      {/* Narrative Section */}
      <CinematicSection className="py-24 md:py-48 px-8 md:px-24">
        {/* Background Parallax */}
        <ParallaxElement speed={-0.08} className="absolute top-40 left-[-5%] text-[20vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
          GENEVA
        </ParallaxElement>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <ParallaxElement speed={0.02}>
              <div className="space-y-12">
                <Reveal direction="right">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold block">Our Genesis</span>
                </Reveal>
                <StaggerText
                  text="Founded in 1998, AURELIAN began as a small collective of architects in Geneva, driven by a singular vision: to strip away the superfluous and reveal the essential beauty of space."
                  className="text-3xl md:text-4xl font-light leading-tight text-ivory/90"
                  delay={0.2}
                  stagger={0.02}
                />
                {!MANAGER_DEMO_MODE && <StaggerText
                  text="Today, we are a global practice, yet our core philosophy remains unchanged. We believe that architecture is not merely about building; it is about the careful orchestration of light, shadow, and material to create environments that resonate with the human spirit."
                  className="text-ivory/70 text-lg leading-relaxed font-light"
                  delay={0.8}
                  stagger={0.01}
                />}
                
                <div className="pt-12 border-t border-stone/10 grid grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-gold mb-4">Established</h4>
                    <p className="text-2xl font-display">1998</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-gold mb-4">Location</h4>
                    <p className="text-2xl font-display">Geneva, CH</p>
                  </div>
                </div>
              </div>
            </ParallaxElement>

            <ParallaxElement speed={-0.03}>
              <div className="relative">
                <div className="absolute -top-12 -right-12 z-20 hidden xl:block">
                  <div className="vertical-text text-[10px] uppercase tracking-[0.5em] text-gold font-bold bg-ink/80 backdrop-blur-md p-4 border border-gold/20">
                    PRECISION — HONESTY — POETRY
                  </div>
                </div>
                <Reveal direction="left" delay={0.4} className="aspect-[3/4] overflow-hidden rounded-sm border border-stone/10 p-2 bg-stone/5">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=2000"
                    alt="Studio Interior"
                    className="w-full h-full"
                  />
                </Reveal>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </CinematicSection>

      {/* Values Section */}
      <CinematicSection className="py-16 md:py-32 px-8 md:px-24 bg-stone/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {[
              { title: 'Vision', text: 'To redefine the boundaries of luxury through architectural innovation and material honesty.' },
              { title: 'Mission', text: 'To create spaces that inspire, endure, and harmonize with the natural and urban landscape.' },
              { title: 'Values', text: 'Precision, Integrity, Craftsmanship, and a deep respect for the environment.' }
            ].slice(0, MANAGER_DEMO_MODE ? 2 : undefined).map((item, i) => (
              <ParallaxElement key={item.title} speed={0.02 * (i + 1)}>
                <Reveal direction="up" delay={i * 0.1}>
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-mono text-xs">0{i + 1}</span>
                      <div className="h-[1px] flex-1 bg-gold/20" />
                    </div>
                    <StaggerText
                      el="h3"
                      text={item.title}
                      className="text-2xl uppercase tracking-[0.2em] font-bold"
                      delay={0.2}
                    />
                    <StaggerText
                      text={item.text}
                      className="text-ivory/70 leading-relaxed font-light"
                      delay={0.4}
                      stagger={0.02}
                    />
                  </div>
                </Reveal>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* Leadership Section */}
      <CinematicSection className="py-24 md:py-48 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-32">
            <Reveal direction="right">
              <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-6 block">Leadership</span>
            </Reveal>
            <StaggerText
              el="h2"
              text="THE MINDS BEHIND THE VISION."
              className="text-6xl md:text-8xl font-display font-bold tracking-tighter"
              delay={0.2}
              stagger={0.08}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {demoItems(TEAM, TEAM.slice(0, 2)).map((member, i) => (
              <ParallaxElement key={member.name} speed={i % 2 === 0 ? 0.02 : -0.02}>
                <Reveal direction="up" delay={i * 0.1} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 border border-stone/10 p-2 bg-stone/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-xs text-ivory/80 leading-relaxed italic">
                        "{member.bio}"
                      </p>
                    </div>
                  </div>
                  <StaggerText
                    el="h4"
                    text={member.name}
                    className="text-xl font-bold mb-2 group-hover:text-gold transition-colors"
                    delay={0.2}
                  />
                  <span className="text-[10px] uppercase tracking-widest text-ivory/60">{member.role}</span>
                </Reveal>
              </ParallaxElement>
            ))}
          </div>
        </div>
      </CinematicSection>

      {/* Milestones / Timeline */}
      <CinematicSection className="py-24 md:py-48 px-8 md:px-24 bg-stone/5">
        <ParallaxElement speed={-0.05} className="absolute bottom-20 right-[-10%] text-[25vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
          JOURNEY
        </ParallaxElement>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <ParallaxElement speed={0.03}>
                <Reveal direction="right">
                  <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-6 block">Milestones</span>
                </Reveal>
                <StaggerText
                  el="h2"
                  text="A Quarter Century of Innovation."
                  className="text-5xl font-display font-bold tracking-tighter leading-none"
                  delay={0.2}
                  stagger={0.08}
                />
              </ParallaxElement>
            </div>
            
            <div className="lg:col-span-8 space-y-24">
              {[
                { year: '1998', title: 'The Foundation', text: 'Julian Aurelian establishes the studio in a small attic in Geneva.' },
                { year: '2005', title: 'International Breakthrough', text: 'The completion of the Obsidian Villa in the Swiss Alps garners global acclaim.' },
                { year: '2012', title: 'Global Expansion', text: 'Opening of the London and Tokyo offices to serve a growing international clientele.' },
                { year: '2023', title: 'Sustainability Milestone', text: 'AURELIAN commits to carbon-neutral operations across all global projects.' }
              ].slice(0, MANAGER_DEMO_MODE ? 2 : undefined).map((milestone, i) => (
                <Reveal key={milestone.year} direction="up" delay={i * 0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 group">
                    <div className="md:col-span-1">
                      <span className="text-4xl font-display font-bold text-gold group-hover:scale-110 transition-transform inline-block">
                        {milestone.year}
                      </span>
                    </div>
                    <div className="md:col-span-3 pt-2">
                      <h3 className="text-xl font-bold mb-4 uppercase tracking-widest">{milestone.title}</h3>
                      <p className="text-ivory/70 font-light leading-relaxed">{milestone.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </CinematicSection>
    </div>
  );
}
