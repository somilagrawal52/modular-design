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

        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div>
            <Reveal direction="up">
              <span className="text-xs uppercase tracking-[0.12em] text-gold font-semibold mb-6 block">
                Our Capabilities
              </span>
            </Reveal>
            <StaggerText
              el="h1"
              text="Dream Ventures Realty (DVR) Services."
              className="type-display mt-7 max-w-5xl"
              delay={0.4}
              stagger={0.08}
            />
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-[0.1em] text-ivory/60">
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
            overlay={false}
            className="section-space-compact border-b border-stone/10 bg-light text-stone"
          >
            <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ParallaxElement speed={0.03}>
                  <Reveal direction="right">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-gold font-mono text-xs">
                        0{i + 1}
                      </span>
                      <div className="h-[1px] w-12 bg-gold" />
                      <span className="text-xs uppercase tracking-[0.1em] text-stone/65 font-semibold">
                        Service Sector
                      </span>
                    </div>
                  </Reveal>
                  <StaggerText
                    el="h2"
                    text={service.title}
                    className="type-section mb-7"
                    delay={0.2}
                  />
                  <StaggerText
                    text={service.description}
                    className="text-lg md:text-xl font-light text-stone/80 leading-relaxed mb-10"
                    delay={0.4}
                    stagger={0.02}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {demoItems(
                      service.features,
                      service.features.slice(0, 2),
                    ).map((feature, j) => (
                      <Reveal
                        key={feature}
                        direction="up"
                        delay={j * 0.1 + 0.6}
                      >
                        <div className="group flex items-start gap-4 p-5 border border-stone/10 bg-stone/5 hover:border-gold/30 transition-colors duration-500">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 group-hover:scale-150 transition-transform" />
                          <div>
                            <StaggerText
                              text={feature}
                            className="text-sm uppercase tracking-[0.06em] text-stone/80 font-semibold mb-2"
                              delay={0.2}
                            />
                            <p className="text-sm text-stone/75 font-light leading-relaxed">
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
                    className="aspect-[16/10] overflow-hidden rounded-sm shadow-sm"
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

                </div>
              </ParallaxElement>
            </div>
          </CinematicSection>
        ))}
      </div>

      {/* CTA Section */}
      <CinematicSection className="section-space-compact text-center">
        <ParallaxElement speed={0.05}>
          <Reveal direction="up">
            <span className="text-xs uppercase tracking-[0.12em] text-ivory/60 mb-6 block">
              From first idea to final installation.
            </span>
            <Link to="/contact" className="group inline-block">
              <h2 className="type-section text-balance group-hover:text-gold transition-colors">
                Discuss your{" "}
                <span className="font-sans font-medium">project.</span>
              </h2>
            </Link>
          </Reveal>
        </ParallaxElement>
      </CinematicSection>
    </div>
  );
}
