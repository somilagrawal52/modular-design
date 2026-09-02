import { SERVICES } from "../constants";
import Reveal from "../components/Reveal";
import ParallaxImage from "../components/ParallaxImage";
import StaggerText from "../components/StaggerText";
import ParallaxElement from "../components/ParallaxElement";
import CinematicSection from "../components/CinematicSection";
import ConceptToCommissioning from "../components/services/ConceptToCommissioning";
import { ArrowDown } from "lucide-react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { demoItems } from "../config/siteMode";

export default function ServicesPage() {
  const visibleServices = demoItems(SERVICES, SERVICES.slice(0, 2));
  return (
    <div className="bg-ink min-h-screen">
      <SEO
        title="Our Services"
        description="Explore modular home design, commercial container spaces, and modular amenities built for flexible modern use."
      />
      {/* Hero Section */}
      <CinematicSection
        parallax={false}
        className="h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="/images/modular-home-garden-hero.jpg"
            alt="Contemporary modular residence"
            speed={0.2}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-ink/60 z-10" />
        </div>

        <div className="relative z-20 text-center px-4">
          <ParallaxElement speed={0.05}>
            <Reveal direction="up">
              <span className="text-xs uppercase tracking-[0.5em] text-gold font-bold mb-8 block">
                Our Capabilities
              </span>
            </Reveal>
            <StaggerText
              el="h1"
              text="Dream Ventures Realty (DVR) Services."
              className="text-[clamp(2.5rem,11vw,4.5rem)] md:text-[clamp(4.5rem,8vw,6.5rem)] font-display font-bold leading-[0.88] tracking-tighter mt-40"
              delay={0.4}
              stagger={0.08}
            />
          </ParallaxElement>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">
            Explore Services
          </span>
          <ArrowDown size={16} className="text-gold animate-bounce" />
        </div>
      </CinematicSection>

      <ConceptToCommissioning />

      {/* Services Showcase */}
      <div className="relative">
        {visibleServices.map((service, i) => (
          <CinematicSection
            key={service.id}
            className="py-16 md:py-32 px-8 md:px-24 border-b border-stone/10"
          >
            {/* Background Number */}
            <ParallaxElement
              speed={-0.1}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-display font-bold text-ivory/5 pointer-events-none select-none leading-none z-0"
            >
              0{i + 1}
            </ParallaxElement>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ParallaxElement speed={0.03}>
                  <Reveal direction="right">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-gold font-mono text-xs">
                        0{i + 1}
                      </span>
                      <div className="h-[1px] w-12 bg-gold" />
                      <span className="text-xs uppercase tracking-[0.3em] text-ivory/60 font-bold">
                        Service Sector
                      </span>
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
                    {demoItems(
                      service.features,
                      service.features.slice(0, 2),
                    ).map((feature, j) => (
                      <Reveal
                        key={feature}
                        direction="up"
                        delay={j * 0.1 + 0.6}
                      >
                        <div className="group flex items-start gap-4 p-6 border border-stone/10 bg-stone/5 hover:border-gold/30 transition-colors duration-500">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 group-hover:scale-150 transition-transform" />
                          <div>
                            <StaggerText
                              text={feature}
                              className="text-[10px] uppercase tracking-widest text-ivory/60 font-bold mb-2"
                              delay={0.2}
                            />
                            <p className="text-xs text-ivory/70 font-light leading-relaxed">
                              A key consideration when reviewing this
                              application.
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </ParallaxElement>
              </div>

              <ParallaxElement speed={i % 2 === 0 ? -0.05 : 0.05}>
                <div className={`relative ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Technical Overlay */}
                  <div className="absolute -inset-4 border border-gold/10 pointer-events-none z-20" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gold/5 mix-blend-overlay z-10" />

                  <Reveal
                    direction={i % 2 === 1 ? "right" : "left"}
                    delay={0.2}
                    className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
                  >
                    <ParallaxImage
                      src={
                        [
                          "/images/modular-home-garden-hero.jpg",
                          "/images/modular-capsule-desert-retreat-hero.png",
                          "/images/modular-office-india-exterior.jpg",
                          "/images/container-cafe-rooftop.jpeg",
                          "/images/modular-capsule-micro-library-hub-hero-v2.png",
                          "/images/container-pool.jpeg",
                        ][i]
                      }
                      alt={service.title}
                      className="w-full h-full transition-all duration-1000"
                    />
                  </Reveal>

                  {/* Floating Metadata */}
                  <div
                    className={`absolute bottom-12 ${i % 2 === 1 ? "-left-12" : "-right-12"} z-30 hidden xl:block`}
                  >
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

      {/* CTA Section */}
      <CinematicSection className="py-24 md:py-48 px-8 text-center">
        <ParallaxElement speed={0.05}>
          <Reveal direction="up">
            <span className="text-xs uppercase tracking-[0.5em] text-ivory/60 mb-8 block">
              From first idea to final installation.
            </span>
            <Link to="/contact" className="group inline-block">
              <h2 className="text-balance text-6xl md:text-8xl font-display font-bold tracking-tighter group-hover:text-gold transition-colors">
                Discuss your{" "}
                <span className="font-display font-medium">project.</span>
              </h2>
            </Link>
          </Reveal>
        </ParallaxElement>
      </CinematicSection>
    </div>
  );
}
