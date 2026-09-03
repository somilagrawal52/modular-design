import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Globe, Mail } from "lucide-react";
import ParallaxElement from "../components/ParallaxElement";
import ParallaxImage from "../components/ParallaxImage";
import StaggerText from "../components/StaggerText";
import Reveal from "../components/Reveal";
import CinematicSection from "../components/CinematicSection";
import SEO from "../components/SEO";
import Magnetic from "../components/Magnetic";
import { dreamRealtyEmail } from "../config/siteMode";

const inquiryTypes = [
  "Space Capsule",
  "Hotel or Retreat",
  "Private Project",
  "Commercial Space",
  "Workplace",
  "Community Amenity",
];

export default function ContactPage() {
  const [selectedInquiry, setSelectedInquiry] = useState("");

  return (
    <div className="bg-light text-stone min-h-screen pt-28 md:pt-36 relative overflow-hidden">
      <SEO
        title="Contact"
        description="Discuss premium space capsules and modular living solutions for hospitality, resorts, commercial developments and private projects."
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="site-container relative z-10">
        <div className="mb-16 md:mb-24">
          <ParallaxElement speed={0.02}>
            <Reveal direction="right">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-gold font-mono text-xs">04</span>
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.1em] text-stone/65 font-semibold">
                  Contact
                </span>
              </div>
            </Reveal>
            <StaggerText
              el="h1"
              text="Let’s discuss your expectations."
              className="type-display mb-10 max-w-5xl"
              delay={0.2}
              stagger={0.08}
            />
            <div className="max-w-3xl">
              <StaggerText
                text="Tell us what you want to create. We’ll start with the right capsule model or modular application and the information that matters for your brief."
                className="text-lg md:text-xl text-stone/75 font-light leading-relaxed"
                delay={0.8}
                stagger={0.02}
              />
            </div>
          </ParallaxElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-32">
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.4}>
              <div className="bg-light-secondary p-6 md:p-10 border border-stone/15 relative">
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/20" />
                <h2 className="text-3xl font-sans font-semibold mb-10 tracking-tight">
                  Start a conversation
                </h2>

                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-4">
                      <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        placeholder="Your name"
                        className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        placeholder={dreamRealtyEmail()}
                        className="w-full min-h-14 bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div id="contact-inquiry-label" className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                      What are you exploring?
                    </div>
                    <input type="hidden" name="inquiryType" value={selectedInquiry} />
                    <div className="flex flex-wrap gap-4" role="group" aria-labelledby="contact-inquiry-label">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedInquiry(type)}
                          aria-pressed={selectedInquiry === type}
                          className={`min-h-11 px-5 py-2 border rounded-sm text-xs uppercase tracking-[0.08em] transition-all ${
                            selectedInquiry === type
                              ? "border-gold bg-gold text-ink"
                              : "border-stone/30 hover:border-gold hover:text-gold"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="contact-brief" className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                      Your brief
                    </label>
                    <textarea
                      placeholder="Tell us about the setting, intended use, and model or application you have in mind."
                      id="contact-brief"
                      name="brief"
                      rows={4}
                      className="w-full bg-transparent border-b border-stone/35 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-stone/50 text-stone text-lg font-light resize-none"
                    />
                  </div>

                  <Magnetic strength={0.2}>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="mobile-no-hover w-full min-h-14 py-5 bg-gold text-ink uppercase tracking-[0.1em] font-semibold text-xs flex items-center justify-center gap-6 group relative overflow-hidden"
                    >
                      <span className="relative z-10">Discuss your project</span>
                      <ArrowRight
                        size={16}
                        className="relative z-10 group-hover:translate-x-2 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    </motion.button>
                  </Magnetic>
                </form>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <ParallaxElement speed={-0.05} className="h-full">
              <div className="relative h-full overflow-hidden border border-stone/10 p-4 bg-stone/5">
                <ParallaxImage
                  src="/images/capsule-riverside-resort-hero.png"
                  alt="Premium capsule accommodation in a landscape setting"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-ink/45" />
                <div className="absolute bottom-12 left-12 right-12">
                  <span className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                    Choose the right starting point
                  </span>
                  <p className="mt-5 text-2xl font-sans font-medium leading-tight text-ivory">
                    A model, an application, or a project question.
                  </p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-24 md:pb-32">
          <Reveal direction="right">
            <div className="space-y-12">
              <h2 className="text-xs uppercase tracking-[0.1em] text-gold font-semibold">
                Direct access
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[{ label: "Sales enquiries", email: dreamRealtyEmail() }].map((item) => (
                  <div key={item.label} className="group">
                    <h3 className="text-xs uppercase tracking-[0.08em] text-stone/65 mb-2">
                      {item.label}
                    </h3>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-lg font-light hover:text-gold transition-colors"
                    >
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className="bg-gold/5 p-12 border border-gold/10">
              <Globe className="text-gold mb-8" size={32} />
              <h2 className="text-2xl font-sans font-semibold mb-6 tracking-tight">
                Model-led conversations
              </h2>
              <p className="text-stone/75 font-light leading-relaxed mb-8">
                Start with a model or application. From there, the relevant
                configuration, finish, delivery, and project information can be
                considered against your requirements.
              </p>
              <a
                href={`mailto:${dreamRealtyEmail()}`}
                className="inline-flex min-h-11 items-center gap-3 text-xs uppercase tracking-[0.1em] font-semibold text-gold hover:text-stone transition-colors"
              >
                <Mail size={14} /> {dreamRealtyEmail()}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
