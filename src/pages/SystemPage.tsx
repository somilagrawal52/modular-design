import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Factory, Layers3, Truck, Wrench } from 'lucide-react';
import CinematicSection from '../components/CinematicSection';
import ParallaxImage from '../components/ParallaxImage';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import StaggerText from '../components/StaggerText';

const deliveryStages = [
  {
    number: '01',
    title: 'Factory build',
    copy: 'Structure, insulated envelope, service zones, joinery, and finishes are coordinated in a controlled production sequence before the module reaches site.',
    icon: Factory,
  },
  {
    number: '02',
    title: 'Transport-ready handover',
    copy: 'Modules are protected, weather-sealed, and prepared around the approved delivery route, lifting plan, and site access constraints.',
    icon: Truck,
  },
  {
    number: '03',
    title: 'Crane-set installation',
    copy: 'Prepared supports, finished connection points, and a precise lifting sequence help us position and align the capsule system with minimal site disruption.',
    icon: Wrench,
  },
];

const technicalSystems = [
  {
    title: 'Services that connect cleanly',
    detail: 'Electrical, water, waste, ventilation, and climate-control interfaces are coordinated around the project’s site utilities and operating needs.',
  },
  {
    title: 'Materials that perform',
    detail: 'Insulated weatherproof shells, durable frames, low-iron glazing, acoustic linings, and replaceable interior finishes are selected for the site and use case.',
  },
  {
    title: 'Expansion without starting over',
    detail: 'Standardised module dimensions and connection points allow the programme to grow with additional rooms, decks, shared spaces, or service modules.',
  },
];

const systemPromises = [
  'Site-responsive layouts and engineered foundation strategy',
  'Coordinated lifting, transport, and on-site interfaces',
  'Adaptable modules for future growth and relocation',
];

export default function SystemPage() {
  return (
    <div className="bg-ink min-h-screen pt-28 md:pt-36 text-ivory">
      <SEO
        title="How the Capsule System Works"
        description="From controlled factory build through transport, crane installation, service connections, and future expansion, explore our capsule modular delivery system."
        image="/images/modular-capsule-brand-experience-gallery-installation.png"
      />

      <CinematicSection parallax={false} className="px-6 md:px-12 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-20 items-end">
          <div className="relative z-10 pb-4 md:pb-10">
            <Reveal direction="right">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs text-gold">SYSTEM / 01</span>
                <div className="h-px w-14 bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-ivory/60 font-bold">Industrialised modular delivery</span>
              </div>
            </Reveal>
            <StaggerText
              el="h1"
              text="HOW THE CAPSULE SYSTEM WORKS."
              className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-display font-bold tracking-tighter leading-[0.82]"
              delay={0.1}
              stagger={0.045}
            />
            <Reveal direction="up" delay={0.3}>
              <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-ivory/70">
                A repeatable off-site system gives each project a more controlled route from design to operation—while the site, programme, and material expression remain uniquely yours.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.45}>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-4 border-b border-gold/50 pb-3 text-[10px] uppercase tracking-[0.35em] font-bold text-gold transition-colors hover:text-ivory hover:border-ivory">
                Discuss a capsule system <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15} className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden border border-stone/20 p-2">
            <ParallaxImage
              src="/images/modular-capsule-brand-experience-gallery-installation.png"
              alt="A capsule module being crane-set into position"
              className="w-full h-full"
            />
            <div className="absolute inset-2 bg-gradient-to-t from-ink/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-gold font-bold">Off-site precision</p>
                <p className="mt-2 text-sm text-ivory/75">A controlled module-to-site handover.</p>
              </div>
              <span className="text-[10px] text-ivory/50 font-mono">01—06</span>
            </div>
          </Reveal>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="border-y border-stone/15 bg-stone/[0.03] py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up">
            <div className="max-w-3xl mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">The delivery sequence</span>
              <h2 className="mt-6 text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">A more controlled route to site.</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 border-t border-stone/20">
            {deliveryStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.number} direction="up" delay={index * 0.12} className="border-b md:border-b-0 md:border-r border-stone/20 last:border-r-0 p-8 md:p-10 lg:p-12 min-h-[300px] flex flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs text-gold">{stage.number}</span>
                    <Icon size={22} strokeWidth={1.25} className="text-gold" />
                  </div>
                  <h3 className="mt-16 text-3xl font-display font-bold tracking-tight">{stage.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-ivory/60">{stage.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-24 items-center">
          <Reveal direction="right" className="relative aspect-[16/11] overflow-hidden border border-stone/20 p-2">
            <ParallaxImage
              src="/images/modular-capsule-creative-studio-office-installation.png"
              alt="A workplace capsule module being installed"
              className="w-full h-full"
            />
            <div className="absolute inset-2 bg-ink/15 pointer-events-none" />
          </Reveal>

          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-4">
                <Layers3 size={18} className="text-gold" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">Performance by design</span>
              </div>
              <h2 className="mt-7 text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">Built to connect, perform, and evolve.</h2>
            </Reveal>
            <div className="mt-10 space-y-7">
              {technicalSystems.map((system, index) => (
                <Reveal key={system.title} direction="left" delay={0.12 + index * 0.08}>
                  <div className="border-l border-gold/50 pl-6">
                    <h3 className="text-xl font-display font-bold tracking-tight">{system.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/60">{system.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="px-6 md:px-12 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto border border-gold/25 bg-gold/[0.04] grid lg:grid-cols-[1fr_0.85fr] gap-10 p-8 md:p-14 lg:p-20">
          <div>
            <Reveal direction="right">
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">Project-specific coordination</span>
              <h2 className="mt-6 text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">One system. Many applications.</h2>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/70">
                The capsule platform can support homes, hospitality, workplaces, public amenities, and commercial spaces. Final structure, services, delivery logistics, and code compliance are coordinated to the project’s location and use.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left" className="self-end">
            <ul className="space-y-5">
              {systemPromises.map((promise) => (
                <li key={promise} className="flex items-start gap-4 text-sm text-ivory/75">
                  <Check size={17} className="mt-0.5 shrink-0 text-gold" />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>
            <Link to="/work" className="mt-12 inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] font-bold text-gold transition-colors hover:text-ivory">
              Explore capsule works <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
