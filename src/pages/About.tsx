import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import CinematicSection from '../components/CinematicSection';
import SEO from '../components/SEO';

const principles = [
  {
    title: 'What we build',
    text: 'Premium space capsules, rounded-cabin modular units, and adaptable modular spaces for hospitality, retreats, commercial uses, and private projects.',
  },
  {
    title: 'Design + engineering',
    text: 'Every model is considered as a complete spatial system: its layout, envelope, glazing, interior character, site access, and the practical conditions around installation.',
  },
  {
    title: 'Product-first thinking',
    text: 'We keep the focus on clear model information and the decisions that matter to each project, so a concept can move forward with confidence and without unnecessary complexity.',
  },
];

export default function About() {
  return (
    <div className="bg-ink min-h-screen">
      <SEO
        title="About"
        description="Dream Ventures Realty presents premium space capsules and modular living solutions for hospitality, resorts, commercial developments and private projects."
      />

      <CinematicSection parallax={false} className="h-[86svh] min-h-[620px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/modular-capsule-desert-retreat-hero.png"
            alt="Modular capsule retreat in a desert landscape"
            speed={0.2}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-ink/50 z-10" />
        </div>

        <div className="relative z-20 pt-32 md:pt-44 text-center px-6 max-w-6xl">
          <ParallaxElement speed={0.05}>
            <Reveal direction="up">
              <span className="text-xs uppercase tracking-[0.1em] text-gold font-semibold mb-7 block">About Dream Ventures Realty</span>
            </Reveal>
            <StaggerText
              el="h1"
              text="Modular spaces, made for real settings."
              className="type-display"
              delay={0.4}
              stagger={0.06}
            />
          </ParallaxElement>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </CinematicSection>

      <CinematicSection className="section-space">
        <ParallaxElement speed={-0.08} className="absolute top-40 left-[-5%] text-[20vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
          ABOUT
        </ParallaxElement>

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ParallaxElement speed={0.02}>
              <div className="space-y-12">
                <Reveal direction="right">
                  <span className="eyebrow text-gold block">Who we are</span>
                </Reveal>
                <StaggerText
                  text="Dream Ventures Realty (DVR) presents premium space capsules and modular living solutions for the places people stay, work, gather, and retreat."
                  className="text-[clamp(1.75rem,3vw,2.5rem)] font-display font-medium tracking-tight leading-[1.12] text-ivory/90"
                  delay={0.2}
                  stagger={0.02}
                />
                <StaggerText
                  text="Our collection is design-led, but never detached from real use. We use each model to start a focused conversation about programme, setting, experience, and the level of information needed to make the next decision."
                  className="text-ivory/70 text-lg leading-relaxed font-light max-w-xl"
                  delay={0.6}
                  stagger={0.01}
                />
              </div>
            </ParallaxElement>

            <ParallaxElement speed={-0.03}>
              <div className="relative">
                <div className="absolute -top-12 -right-12 z-20 hidden xl:block">
                  <div className="vertical-text text-[10px] uppercase tracking-[0.5em] text-gold font-bold bg-ink/80 backdrop-blur-md p-4 border border-gold/20">
                    DESIGN — PRODUCT — PLACE
                  </div>
                </div>
                <Reveal direction="left" delay={0.4} className="aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-sm border border-stone/10 p-2 bg-stone/5">
                  <ParallaxImage
                    src="/images/modular-home-garden-hero.jpg"
                    alt="Modern modular residence in a garden"
                    className="w-full h-full"
                  />
                </Reveal>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </CinematicSection>

      <CinematicSection className="section-space-compact bg-stone/5">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {principles.map((item, index) => (
              <ParallaxElement key={item.title} speed={0.02 * (index + 1)}>
                <Reveal direction="up" delay={index * 0.1}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-mono text-xs">0{index + 1}</span>
                      <div className="h-[1px] flex-1 bg-gold/20" />
                    </div>
                    <StaggerText
                      el="h2"
                      text={item.title}
                      className="text-2xl font-display font-semibold tracking-tight"
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

      <CinematicSection className="section-space">
        {/* Owner-provided manufacturing, capacity, certification, and delivery information belongs here once verified. */}
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Reveal direction="right">
                <div className="flex items-center gap-4 mb-10">
                  <span className="text-gold font-mono text-xs">03</span>
                  <div className="h-[1px] w-12 bg-gold" />
                  <span className="text-xs uppercase tracking-[0.1em] text-ivory/65 font-semibold">Choosing a model</span>
                </div>
              </Reveal>
              <StaggerText
                el="h2"
                text="Start with the model, then define the right information."
                className="type-section"
                delay={0.2}
                stagger={0.05}
              />
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <Reveal direction="left" delay={0.3}>
                <p className="text-lg leading-relaxed text-ivory/70 font-light">
                  Model-specific configuration, finishes, delivery scope, and commercial information should be reviewed against the selected model and project brief before a decision is made.
                </p>
                <Link to="/contact" className="group mt-10 inline-flex min-h-11 items-center gap-4 border-b border-gold/50 pb-1 text-xs uppercase tracking-[0.1em] font-semibold text-ivory hover:text-gold transition-colors">
                  Contact us
                  <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </CinematicSection>
    </div>
  );
}
