import { motion } from 'motion/react';
import { useState } from 'react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter } from 'lucide-react';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import CinematicSection from '../components/CinematicSection';
import SEO from '../components/SEO';
import { MANAGER_DEMO_MODE, demoItems } from '../config/siteMode';

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Hospitality'];

export default function Work() {
  const [filter, setFilter] = useState(MANAGER_DEMO_MODE ? 'Residential' : 'All');
  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === filter);
  const visibleProjects = demoItems(filteredProjects, [PROJECTS[5]]);

  return (
    <div className="bg-ink min-h-screen pt-40 pb-32 relative overflow-hidden">
      <SEO 
        title="Selected Works" 
        description="Explore a collection of modular residences, commercial container spaces, and hospitality concepts." 
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
                <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-6 block">Selected Works</span>
              </Reveal>
              <StaggerText
                el="h1"
                text="MODULAR WORKS."
                className="text-[10vw] md:text-[8vw] font-display font-bold leading-[0.85] tracking-tighter"
                delay={0.2}
                stagger={0.08}
              />
            </ParallaxElement>
          </div>
          
        </div>

          <div className="self-start md:self-end">
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
                        onClick={() => setFilter(category)}
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

        {/* Editorial Grid */}
        <div className="grid grid-cols-12 gap-y-32 md:gap-y-80 gap-x-8">
            {visibleProjects.map((project, i) => {
              // Create a highly dynamic editorial layout
              const isHero = i % 4 === 0;
              const isVertical = i % 4 === 1;
              const isStandard = i % 4 === 2;
              const isWide = i % 4 === 3;
              
              let colSpan = "col-span-12";
              let alignment = "lg:col-start-1";
              let aspect = "aspect-[21/9]";

              if (isVertical) {
                colSpan = "col-span-12 lg:col-span-5";
                alignment = "lg:col-start-2";
                aspect = "aspect-[3/4]";
              } else if (isStandard) {
                colSpan = "col-span-12 lg:col-span-7";
                alignment = "lg:col-start-6";
                aspect = "aspect-[4/3]";
              } else if (isWide) {
                colSpan = "col-span-12 lg:col-span-10";
                alignment = "lg:col-start-2";
                aspect = "aspect-[16/7]";
              }
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`${colSpan} ${alignment} group relative`}
                >
                  <ParallaxElement speed={i % 2 === 0 ? 0.03 : -0.03}>
                    <Link to={`/work/${project.id}`} className="block group/card">
                      <div className="relative overflow-hidden mb-12 border border-stone/10 p-3 bg-stone/5 transition-all duration-700 group-hover/card:border-gold/30 group-hover/card:shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                        <div className={`relative overflow-hidden ${aspect}`}>
                          {/* Technical Grid Overlay */}
                          <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" 
                               style={{ backgroundImage: 'radial-gradient(circle, #C6A15B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                          
                          <ParallaxImage
                            src={project.image}
                            alt={project.title}
                            speed={0.1}
                            className="w-full h-full group-hover:scale-110 transition-all duration-1000 ease-out"
                          />
                        </div>
                        
                        {/* Overlay Info */}
                        <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center z-20 backdrop-blur-sm">
                          <div className="text-center px-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4 block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                              {project.category}
                            </span>
                            <h4 className="text-3xl md:text-4xl font-display font-bold text-ivory tracking-tighter mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                              {project.title}
                            </h4>
                            <div className="inline-block px-8 py-3 border border-gold/30 hover:border-gold transition-colors duration-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">View Case Study</span>
                            </div>
                          </div>
                        </div>

                        {/* Vertical Metadata */}
                        <div className="absolute top-12 right-12 z-30 hidden lg:block">
                          <div className="vertical-text text-[10px] uppercase tracking-[0.5em] text-ivory/60 font-bold bg-ink/40 backdrop-blur-sm p-2">
                            {project.location} — {project.year}
                          </div>
                        </div>
                      </div>

                      <div className="relative px-4">
                        <div className="absolute -left-12 top-0 hidden xl:block">
                          <span className="font-mono text-[10px] text-ivory/40 rotate-90 block origin-left">
                            REF_{project.id.toUpperCase().slice(0, 8)}
                          </span>
                        </div>
                        <div className="flex justify-between items-start gap-8">
                          <div className="max-w-3xl">
                            <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-6 block">
                              {project.category}
                            </span>
                            <h3 className={`font-display font-bold tracking-tighter leading-none group-hover:text-gold transition-colors duration-500 ${
                              isHero ? 'text-7xl md:text-[10vw]' : 'text-5xl md:text-7xl'
                            }`}>
                              {project.title}
                            </h3>
                          </div>
                          <div className="hidden md:block pt-6">
                            <ArrowUpRight size={48} className="text-ivory/20 group-hover:text-gold group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-700" />
                          </div>
                        </div>
                        
                        {(isHero || isWide) && (
                          <p className="mt-12 text-ivory/60 font-light max-w-4xl text-xl leading-relaxed hidden md:block border-l border-gold/20 pl-8">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </ParallaxElement>
                </motion.div>
              );
            })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-64 text-center">
          <Reveal direction="up">
            <div className="inline-block relative group cursor-pointer">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">
                HAVE A VISION?
              </h2>
              <div className="w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <p className="mt-6 text-ivory/60 uppercase tracking-[0.4em] text-[10px] font-bold">
                Let's discuss your next masterpiece
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      </CinematicSection>
    </div>
  );
}
