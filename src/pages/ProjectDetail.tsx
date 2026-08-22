import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, MapPin, Calendar } from 'lucide-react';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import StaggerText from '../components/StaggerText';
import ParallaxElement from '../components/ParallaxElement';
import SEO from '../components/SEO';

import CinematicSection from '../components/CinematicSection';
import { MANAGER_DEMO_MODE, demoItems } from '../config/siteMode';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return <div>Project not found</div>;
  const visibleDetails = demoItems(project.details, project.details.slice(0, 2));
  const visibleSpecs = demoItems(project.technicalSpecs ?? [], (project.technicalSpecs ?? []).slice(0, 2));
  const visibleGallery = demoItems(project.gallery, project.gallery.slice(0, 2));

  return (
    <div className="bg-ink">
      <SEO 
        title={project.title} 
        description={project.description} 
        image={project.image}
      />
      {/* Hero */}
      <CinematicSection parallax={false} className="h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-ink/40 mix-blend-multiply" />
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-10" />
        
        <div className="absolute bottom-24 left-8 md:left-24 z-20 max-w-5xl">
          <ParallaxElement speed={0.05}>
            <Reveal direction="right">
              <Link to="/work" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-12">
                <div className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all" />
                Back to Archive
              </Link>
            </Reveal>
            <StaggerText
              el="h1"
              text={project.title}
              className="text-[12vw] md:text-[10vw] font-display font-bold tracking-tighter leading-[0.8] mb-8"
              delay={0.2}
              stagger={0.08}
            />
            <div className="flex flex-wrap gap-12 items-center">
              <Reveal direction="up" delay={0.6}>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-gold" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60 font-bold">{project.location}</span>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.7}>
                <div className="flex items-center gap-3">
                  <Calendar size={14} className="text-gold" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60 font-bold">{project.year}</span>
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.8}>
                <div className="px-4 py-1 border border-gold/20 rounded-full">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-gold font-bold">{project.category}</span>
                </div>
              </Reveal>
            </div>
          </ParallaxElement>
        </div>
      </CinematicSection>

      {/* Narrative Section */}
      <CinematicSection className="py-24 md:py-48 px-8 md:px-24 bg-ivory text-ink">
        {/* Background Parallax */}
        <ParallaxElement speed={-0.08} className="absolute top-40 right-[-5%] text-[25vw] font-display font-bold text-stone/5 pointer-events-none select-none leading-none z-0">
          NARRATIVE
        </ParallaxElement>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-8">
              <ParallaxElement speed={0.02}>
                <Reveal direction="right">
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-gold font-mono text-xs">01</span>
                    <div className="h-[1px] w-12 bg-gold" />
                    <span className="text-xs uppercase tracking-[0.4em] text-stone font-bold">The Vision</span>
                  </div>
                </Reveal>
                
                <StaggerText
                  text={project.description}
                  className="text-4xl md:text-5xl font-serif italic font-light leading-tight text-stone mb-24"
                  delay={0.2}
                  stagger={0.02}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                  {project.challenge && (
                    <Reveal direction="up" delay={0.4}>
                      <div className="space-y-8">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">The Challenge</h3>
                        <p className="text-xl font-light leading-relaxed text-stone/80">{project.challenge}</p>
                      </div>
                    </Reveal>
                  )}
                  {project.solution && !MANAGER_DEMO_MODE && (
                    <Reveal direction="up" delay={0.6}>
                      <div className="space-y-8">
                        <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">The Solution</h3>
                        <p className="text-xl font-light leading-relaxed text-stone/80">{project.solution}</p>
                      </div>
                    </Reveal>
                  )}
                </div>
              </ParallaxElement>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-40">
              <ParallaxElement speed={0.04}>
                <div className="bg-stone/5 p-12 border border-stone/10 space-y-12">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-stone font-bold border-b border-stone/10 pb-6">Technical Data</h3>
                  <div className="space-y-8">
                    {visibleDetails.map((detail, i) => (
                      <Reveal key={detail.label} direction="up" delay={i * 0.1}>
                        <div className="flex justify-between items-end gap-4">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-stone/60 font-bold">{detail.label}</span>
                          <div className="flex-1 border-b border-stone/10 border-dotted mb-1" />
                          <span className="text-sm font-bold">{detail.value}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  
                  {project.technicalSpecs && (
                    <div className="pt-12 border-t border-stone/10 space-y-8">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Specifications</h4>
                      <div className="space-y-6">
                        {visibleSpecs.map((spec, i) => (
                          <Reveal key={spec.label} direction="up" delay={i * 0.1}>
                            <div className="flex justify-between items-end gap-4">
                              <span className="text-[10px] uppercase tracking-[0.2em] text-stone/60 font-bold">{spec.label}</span>
                              <div className="flex-1 border-b border-stone/10 border-dotted mb-1" />
                              <span className="text-xs font-bold">{spec.value}</span>
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </ParallaxElement>
            </div>
          </div>
        </div>
      </CinematicSection>

      {/* Materiality Section */}
      {project.materiality && (
        <CinematicSection className="py-24 md:py-48 px-8 md:px-24 bg-ink text-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <ParallaxElement speed={0.02}>
                <Reveal direction="right">
                  <div className="flex items-center gap-4 mb-12">
                    <span className="text-gold font-mono text-xs">02</span>
                    <div className="h-[1px] w-12 bg-gold" />
                    <span className="text-xs uppercase tracking-[0.4em] text-ivory/60 font-bold">Materiality</span>
                  </div>
                </Reveal>
                <StaggerText
                  text={`"${project.materiality}"`}
                  className="text-5xl md:text-6xl font-serif italic font-light leading-tight text-ivory/80"
                  delay={0.2}
                  stagger={0.03}
                />
              </ParallaxElement>
              <ParallaxElement speed={-0.02}>
                <div className="aspect-square bg-stone/5 border border-stone/10 p-4">
                  <ParallaxImage
                    src={project.gallery[0] ?? project.image}
                    alt={`${project.title} material palette`}
                    className="w-full h-full"
                  />
                </div>
              </ParallaxElement>
            </div>
          </div>
        </CinematicSection>
      )}

      {/* Gallery */}
      <CinematicSection className="py-24 md:py-48 px-8 md:px-24 bg-stone/5">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up" className="mb-16 md:mb-32 text-center">
            <span className="text-gold font-mono text-xs block mb-4">03</span>
            <h2 className="text-xs uppercase tracking-[0.6em] text-ivory/60 font-bold">VISUAL ANTHOLOGY</h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-16">
            {visibleGallery.map((img, i) => {
              const isFull = i % 3 === 0;
              const colSpan = isFull ? 'col-span-12' : 'col-span-12 md:col-span-6';
              const aspect = isFull ? 'aspect-[21/9]' : 'aspect-[4/5]';
              
              return (
                <div key={i} className={colSpan}>
                  <ParallaxElement speed={i % 2 === 0 ? 0.02 : -0.02}>
                    <Reveal direction="up" delay={i * 0.1}>
                      <div className={`relative overflow-hidden ${aspect} border border-stone/10 p-2 bg-stone/5 group`}>
                        <ParallaxImage
                          src={img}
                          alt={`${project.title} gallery ${i}`}
                          className="w-full h-full transition-all duration-1000"
                        />
                        <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <span className="text-[10px] uppercase tracking-[0.4em] text-ivory font-bold bg-ink/40 backdrop-blur-md px-4 py-2">
                            PLATE_{i + 1}
                          </span>
                        </div>
                      </div>
                    </Reveal>
                  </ParallaxElement>
                </div>
              );
            })}
          </div>
        </div>
      </CinematicSection>

      {/* Next Project CTA */}
      <CinematicSection className="py-32 md:py-64 px-8 text-center bg-ink border-t border-stone/10">
        <ParallaxElement speed={-0.05} className="absolute inset-0 flex items-center justify-center text-[30vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0">
          NEXT
        </ParallaxElement>
        
        <div className="relative z-10">
          <Reveal direction="up">
            <span className="text-gold font-mono text-xs block mb-8">04</span>
            <span className="text-xs uppercase tracking-[0.5em] text-ivory/60 font-bold mb-12 block">Continue the Journey</span>
            <Link to="/work" className="group inline-block">
              <h2 className="text-7xl md:text-[10vw] font-display font-bold tracking-tighter group-hover:text-gold transition-all duration-700 leading-none">
                EXPLORE <span className="font-serif italic font-light">ARCHIVE</span>
              </h2>
              <div className="w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left mt-8" />
            </Link>
          </Reveal>
        </div>
      </CinematicSection>
    </div>
  );
}
