import { motion } from 'motion/react';
import { useState } from 'react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Filter } from 'lucide-react';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import CinematicSection from '../components/CinematicSection';
import SEO from '../components/SEO';
import { MANAGER_DEMO_MODE, demoItems } from '../config/siteMode';

const CATEGORIES = ['All', 'Residential', 'Hospitality', 'Commercial', 'Workplace', 'Community', 'Amenities'];
const INITIAL_PROJECT_COUNT = 11;
const CAPSULE_PROJECT_ORDER = [
  'modular-capsule-riverbend-resort',
  'modular-capsule-cloudline-observatory',
  'modular-capsule-mangrove-retreat',
  'modular-capsule-stone-spring-lodge',
  'modular-capsule-canyon-skywalk-lodge',
  'modular-capsule-meadow-studio',
  'modular-capsule-rainforest-villa',
  'modular-capsule-stargazer-lodge',
  'modular-capsule-dune-courtyard',
  'modular-apple-cabin-courtyard-village',  'modular-capsule-quarry-lake-retreat',
  'modular-capsule-mountain-panorama-suite',
  'modular-capsule-hillside-lodge',
  'modular-capsule-apple-garden-suite',
  'modular-capsule-coastal-resort',  'modular-capsule-coliving-courtyard',
  'modular-capsule-creative-studio-office',
  'modular-capsule-orchard-farmhouse',
  'modular-capsule-garden-family-residence',
  'modular-capsule-lakeside-wellness-deck',
  'modular-capsule-mountain-trail-basecamp',
  'modular-capsule-desert-adventure-lodge',
  'modular-capsule-coastal-leisure-pavilion',
  'modular-capsule-exhibition-pavilion',
  'modular-capsule-retail-kiosk',
  'modular-capsule-brand-experience-gallery',
  'modular-capsule-micro-library-hub',
  'modular-capsule-visitor-gateway',
  'modular-capsule-ev-charging-lounge',
  'modular-capsule-wellness-pavilion',
  'modular-capsule-coworking-studio',
  'modular-capsule-courtyard-residence',
  'modular-capsule-lake-retreat',
  'modular-capsule-island-retreat',
  'modular-capsule-tea-estate-retreat',
  'modular-capsule-alpine-retreat',
  'modular-capsule-desert-retreat',
  'modular-capsule-forest-retreat',
  'modular-capsule-backwater-retreat',
];

const orderProjectsForPortfolio = (projects: typeof PROJECTS) =>
  [...projects].sort((first, second) => {
    const firstOrder = CAPSULE_PROJECT_ORDER.indexOf(first.id);
    const secondOrder = CAPSULE_PROJECT_ORDER.indexOf(second.id);
    const firstIsCapsule = firstOrder !== -1;
    const secondIsCapsule = secondOrder !== -1;

    if (firstIsCapsule && secondIsCapsule) return firstOrder - secondOrder;
    if (firstIsCapsule) return -1;
    if (secondIsCapsule) return 1;
    return Number(second.year) - Number(first.year);
  });

export default function Work() {
  const [filter, setFilter] = useState(MANAGER_DEMO_MODE ? 'Residential' : 'All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECT_COUNT);
  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === filter);
  const orderedProjects = orderProjectsForPortfolio(filteredProjects);
  const visibleProjects = demoItems(orderedProjects, [orderedProjects[0]]);
  const limitedProjects = visibleProjects.slice(0, visibleCount);
  const featuredProject = limitedProjects[0];
  const gridProjects = limitedProjects.filter((project) => project.id !== featuredProject?.id);
  const hasMoreProjects = visibleCount < visibleProjects.length;
  const projectSummary = (project: typeof PROJECTS[number]) => ({
    type: project.details.find((detail) => detail.label === 'Type')?.value ?? project.category,
    system: project.technicalSpecs?.[0]?.value ?? 'Off-site Modular',
    status: project.details.find((detail) => detail.label === 'Status')?.value === 'Reference Proposal'
      ? 'Concept Study'
      : project.details.find((detail) => detail.label === 'Status')?.value ?? 'Concept Study',
  });

  return (
    <div className="bg-ink min-h-screen pt-40 pb-32 relative overflow-hidden">
      <SEO 
        title="Modular Applications" 
        description="Explore modular applications across homes, hospitality, commercial spaces, workplaces, community buildings, and amenities." 
      />
      <CinematicSection parallax={false} minHeight={false}>
        {/* Background Parallax */}
        <ParallaxElement speed={-0.1} className="absolute top-20 left-[-10%] text-[25vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
          PORTFOLIO
        </ParallaxElement>

      {/* Atmospheric Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-stone/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 relative z-10">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-12">
          <div className="max-w-4xl">
            <ParallaxElement speed={0.02}>
              <Reveal direction="right">
                <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-6 block">Primary Portfolio — Capsule Systems</span>
              </Reveal>
              <StaggerText
                el="h1"
                text="CAPSULE SYSTEMS."
                className="text-[10vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter"
                delay={0.2}
                stagger={0.08}
              />
            </ParallaxElement>
          </div>
          
        </div>

          <div className="self-start md:self-end mb-20 md:mb-32">
            <ParallaxElement speed={-0.02}>
              <Reveal direction="left" delay={0.4}>
                <div className="flex flex-col items-start md:items-end gap-6">
                  <div className="flex items-center gap-3 text-ivory/50 text-[10px] uppercase tracking-widest font-bold">
                    <Filter size={12} /> Filter by Sector
                  </div>
                  <div className="flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-4">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setFilter(category);
                          setVisibleCount(INITIAL_PROJECT_COUNT);
                        }}
                        className={`text-[10px] uppercase tracking-[0.3em] pb-1 border-b-2 transition-all duration-500 relative group ${
                          filter === category
                            ? 'border-gold text-gold'
                            : 'border-transparent text-ivory/60 hover:text-ivory'
                        }`}
                      >
                        {category}
                        <span className={`absolute -right-4 -top-1 text-[8px] opacity-40 ${filter === category ? 'text-gold' : 'text-ivory/40'}`}>
                          {category === 'All' ? PROJECTS.length : PROJECTS.filter((project) => project.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            </ParallaxElement>
          </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            key={`featured-${featuredProject.id}`}
            layout
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24 md:mb-40"
          >
            <Link to={`/work/${featuredProject.id}`} className="block group/featured">
              <div className="relative overflow-hidden border border-stone/10 p-3 bg-stone/5 transition-all duration-700 group-hover/featured:border-gold/30 group-hover/featured:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/7]">
                  <div
                    className="absolute inset-0 z-10 opacity-20 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #C6A15B 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                  />
                  <ParallaxImage
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    speed={0.08}
                    className="w-full h-full group-hover/featured:scale-105 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-30 p-8 md:p-14">
                    <div className="flex items-center justify-between gap-8 mb-5">
                      <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">
                        Featured — {featuredProject.category}
                      </span>
                      <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] text-ivory/60">
                        {featuredProject.location} — {featuredProject.year}
                      </span>
                    </div>
                    <div className="flex items-end justify-between gap-8">
                      <div>
                        <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] group-hover/featured:text-gold transition-colors duration-500">
                          {featuredProject.title}
                        </h2>
                        <p className="hidden md:block mt-7 max-w-3xl text-lg text-ivory/70 font-light leading-relaxed">
                          {featuredProject.description}
                        </p>
                      </div>
                      <ArrowUpRight size={48} className="hidden md:block shrink-0 text-ivory/30 group-hover/featured:text-gold group-hover/featured:translate-x-2 group-hover/featured:-translate-y-2 transition-all duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Consistent Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-20 md:gap-y-28">
          {gridProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, delay: Math.min(i * 0.04, 0.24), ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={`/work/${project.id}`} className="block group/card h-full">
                <div className="relative overflow-hidden mb-8 border border-stone/10 p-2 bg-stone/5 transition-all duration-700 group-hover/card:border-gold/30 group-hover/card:shadow-[0_0_40px_rgba(212,175,55,0.08)]">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <ParallaxImage
                      src={project.image}
                      alt={project.title}
                      speed={0.04}
                      className="w-full h-full group-hover/card:scale-105 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-5 right-5 z-20 px-3 py-2 bg-ink/60 backdrop-blur-sm">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-ivory/70">{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-6 px-1">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tighter leading-[0.95] group-hover/card:text-gold transition-colors duration-500">
                      {project.title}
                    </h3>
                    <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-5 border-t border-stone/15 pt-5 text-[9px] uppercase tracking-[0.16em] text-ivory/45 font-bold">
                      {[
                        ['Location', project.location],
                        ['Type', projectSummary(project).type],
                        ['System', projectSummary(project).system],
                        ['Status', projectSummary(project).status],
                      ].map(([label, value]) => (
                        <div key={label} className="min-w-0">
                          <span className="block text-gold/70 mb-2">{label}</span>
                          <span className="block text-ivory/70 normal-case tracking-normal text-[11px] font-medium truncate">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight size={28} className="mt-7 shrink-0 text-ivory/20 group-hover/card:text-gold group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="mt-24 md:mt-36 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount(visibleProjects.length)}
              className="group flex items-center gap-5 px-8 py-5 border border-stone/20 bg-stone/5 hover:border-gold/50 hover:bg-gold/5 transition-all duration-500"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-ivory group-hover:text-gold transition-colors">
                Load More Projects
              </span>
              <ArrowDown size={15} className="text-gold group-hover:translate-y-1 transition-transform duration-500" />
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-64 text-center">
          <Reveal direction="up">
            <div className="inline-block relative group cursor-pointer">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">
                HAVE A VISION?
              </h2>
              <div className="w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <p className="mt-6 text-ivory/60 uppercase tracking-[0.4em] text-[10px] font-bold">
                Plan your modular project
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      </CinematicSection>
    </div>
  );
}
