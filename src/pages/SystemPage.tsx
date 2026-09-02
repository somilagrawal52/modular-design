import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Layers3, Truck, Wrench } from 'lucide-react';
import CinematicSection from '../components/CinematicSection';
import ParallaxImage from '../components/ParallaxImage';
import Reveal from '../components/Reveal';
import SEO from '../components/SEO';
import StaggerText from '../components/StaggerText';

const processStages = [
  {
    number: '01',
    title: 'Model configuration',
    copy: 'The selected model is reviewed for its layout, envelope, glazing, finished scope, and the details that are relevant to its intended use.',
    icon: Layers3,
  },
  {
    number: '02',
    title: 'Engineering coordination',
    copy: 'Support strategy, service interfaces, lifting requirements, site access, and installation sequencing are coordinated for the project setting.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Factory assembly',
    copy: 'The structural shell, envelope, and selected interior or service elements are assembled off-site according to the agreed model scope.',
    icon: Layers3,
  },
  {
    number: '04',
    title: 'Pre-dispatch review',
    copy: 'Finished scope, transport access, lifting considerations, and the relevant service interfaces are reviewed ahead of delivery.',
    icon: Check,
  },
  {
    number: '05',
    title: 'Transport + positioning',
    copy: 'The completed or substantially completed module is transported to the prepared site and positioned to the agreed installation plan.',
    icon: Truck,
  },
  {
    number: '06',
    title: 'Final connection',
    copy: 'Site connections and finishing work are completed where required, in line with the selected model, site conditions, and local requirements.',
    icon: Wrench,
  },
];

const constructionLayers = [
  {
    title: 'Structural frame',
    detail: 'The structural frame forms the primary support system of the selected capsule and is coordinated with its base and installation strategy.',
  },
  {
    title: 'Exterior shell',
    detail: 'Precision-finished enclosure elements shape the capsule while protecting the structural and insulation systems within.',
  },
  {
    title: 'Thermal layer',
    detail: 'Insulation within the envelope helps create a more controlled interior environment. Its final build-up is model-specific.',
  },
  {
    title: 'Panoramic glazing',
    detail: 'Large-format glazed openings bring daylight and landscape views into the compact plan; glazing selection is confirmed by model and project.',
  },
  {
    title: 'Interior finish',
    detail: 'Wall, ceiling, floor, and fixed interior systems can be completed within the off-site module scope, depending on configuration.',
  },
];

const integratedSystems = [
  {
    number: '01',
    title: 'Electrical + lighting',
    detail: 'Electrical routing and lighting infrastructure can be coordinated within the model and project scope before delivery.',
  },
  {
    number: '02',
    title: 'Water + waste',
    detail: 'Supply and drainage interfaces can be considered against the intended layout and the available site utilities.',
  },
  {
    number: '03',
    title: 'Ventilation + climate',
    detail: 'Ventilation and climate-control provisions are considered according to the selected model, location, and project requirements.',
  },
  {
    number: '04',
    title: 'Site connections',
    detail: 'Final connections are planned around utility access, supports, and the agreed installation sequence where required.',
  },
];

const systemPromises = [
  'Model, finish, and layout scope',
  'Service and site-interface coordination',
  'Delivery and installation planning',
];

export default function SystemPage() {
  return (
    <div className="bg-ink min-h-screen pt-28 md:pt-36 text-ivory">
      <SEO
        title="Technology Behind It"
        description="Explore the model, envelope, service, delivery, and installation considerations behind premium capsule and modular spaces."
        image="/images/modular-capsule-visitor-gateway-installation.png"
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
                text="TECHNOLOGY BEHIND IT."
              className="max-w-xl text-[clamp(2.55rem,11vw,3.75rem)] sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tighter leading-[0.86]"
              delay={0.1}
              stagger={0.045}
            />
            <Reveal direction="up" delay={0.3}>
              <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-ivory/70">
                Premium capsule models bring structure, envelope, interior systems, and services together in a compact format. Exact materials and scope depend on the selected model and configuration.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.45}>
              <Link to="/contact" className="mt-10 inline-flex min-h-11 items-center gap-4 border-b border-gold/50 pb-1 text-[10px] uppercase tracking-[0.35em] font-bold text-gold transition-colors hover:text-ivory hover:border-ivory">
                Discuss a capsule system <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15} className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden border border-stone/20 p-2">
            <ParallaxImage
              src="/images/modular-capsule-visitor-gateway-installation.png"
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
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">From factory to site</span>
              <h2 className="mt-6 text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">Built off-site. Positioned on-site.</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-stone/20">
            {processStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.number} direction="up" delay={index * 0.08} className="border-r border-b border-stone/20 p-8 md:p-10 lg:p-12 min-h-[280px] flex flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-mono text-xs text-gold">{stage.number}</span>
                    <Icon size={22} strokeWidth={1.25} className="text-gold" />
                  </div>
                  <h3 className="mt-12 text-3xl font-display font-bold tracking-tight">{stage.title}</h3>
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
              src="/images/modular-capsule-courtyard-residence-hero-v2.png"
              alt="Panoramic capsule modules arranged around a garden court"
              className="w-full h-full"
            />
            <div className="absolute inset-2 bg-ink/15 pointer-events-none" />
          </Reveal>

          <div>
            <Reveal direction="left">
              <div className="flex items-center gap-4">
                <Layers3 size={18} className="text-gold" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">Built from the outside in</span>
              </div>
              <h2 className="mt-7 text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">Engineered layer by layer.</h2>
            </Reveal>
            <div className="mt-10 space-y-6">
              {constructionLayers.map((system, index) => (
                <Reveal key={system.title} direction="left" delay={0.08 + index * 0.06}>
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

      <CinematicSection parallax={false} className="border-y border-stone/15 bg-stone/[0.03] py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up">
            <div className="max-w-3xl mb-16 md:mb-24">
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">Integrated from the start</span>
              <h2 className="mt-6 text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">Everything works as one system.</h2>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/70">
                Building services can be coordinated within the modular approach before the unit reaches site. The final scope is confirmed for the selected model and project.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-stone/20">
            {integratedSystems.map((system, index) => (
              <Reveal key={system.number} direction="up" delay={index * 0.08} className="border-r border-b border-stone/20 p-8 md:p-10 min-h-[240px]">
                <span className="font-mono text-xs text-gold">{system.number}</span>
                <h3 className="mt-12 text-2xl font-display font-bold tracking-tight">{system.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-ivory/60">{system.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </CinematicSection>

      <CinematicSection parallax={false} className="px-6 md:px-12 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto border border-gold/25 bg-gold/[0.04] grid lg:grid-cols-[1fr_0.85fr] gap-10 p-8 md:p-14 lg:p-20">
          <div>
            <Reveal direction="right">
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-bold">Configured for the project</span>
              <h2 className="mt-6 text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">One platform. Multiple possibilities.</h2>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/70">
                Capsule models can be considered for homes, hospitality, workplaces, public amenities, and commercial spaces. Finish, layout, glazing, and integration scope can be considered according to the selected model and project requirements.
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
            <Link to="/work" className="mt-12 inline-flex min-h-11 items-center gap-4 text-[10px] uppercase tracking-[0.35em] font-bold text-gold transition-colors hover:text-ivory">
              Explore models <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
