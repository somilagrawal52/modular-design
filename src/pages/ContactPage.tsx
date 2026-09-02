import { motion } from "motion/react";
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
  return (
    <div className="bg-ink min-h-screen pt-40 relative overflow-hidden">
      <SEO
        title="Contact"
        description="Discuss premium space capsules and modular living solutions for hospitality, resorts, commercial developments and private projects."
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-gold/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 relative z-10">
        <div className="mb-32">
          <ParallaxElement speed={0.02}>
            <Reveal direction="right">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-gold font-mono text-xs">04</span>
                <div className="h-[1px] w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.4em] text-ivory/60 font-bold">
                  Contact
                </span>
              </div>
            </Reveal>
            <StaggerText
              el="h1"
              text="LET’S DISCUSS YOUR EXPECTATIONS."
              className="text-[clamp(2.5rem,11vw,4.5rem)] md:text-[clamp(4.5rem,8vw,6.5rem)] font-display font-bold tracking-tighter leading-[0.86] mb-12"
              delay={0.2}
              stagger={0.08}
            />
            <div className="max-w-3xl">
              <StaggerText
                text="Tell us what you want to create. We’ll start with the right capsule model or modular application and the information that matters for your brief."
                className="text-xl md:text-2xl text-ivory/70 font-light leading-relaxed"
                delay={0.8}
                stagger={0.02}
              />
            </div>
          </ParallaxElement>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.4}>
              <div className="bg-stone/5 p-8 md:p-16 border border-stone/10 relative backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-gold/20" />
                <h2 className="text-3xl font-display font-bold mb-16 tracking-tight">
                  Start a conversation
                </h2>

                <form className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
                        Full name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/10 text-ivory text-xl font-light"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder={dreamRealtyEmail("studio")}
                        className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/10 text-ivory text-xl font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
                      What are you exploring?
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          className="px-6 py-2 border border-stone/20 rounded-full text-[10px] uppercase tracking-widest hover:border-gold hover:text-gold transition-all"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
                      Your brief
                    </label>
                    <textarea
                      placeholder="Tell us about the setting, intended use, and model or application you have in mind."
                      rows={4}
                      className="w-full bg-transparent border-b border-stone/20 py-4 outline-none focus:border-gold transition-all duration-500 placeholder:text-ivory/10 text-ivory text-xl font-light resize-none"
                    />
                  </div>

                  <Magnetic strength={0.2}>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-8 bg-gold text-ink uppercase tracking-[0.4em] font-bold text-[10px] flex items-center justify-center gap-6 group relative overflow-hidden"
                    >
                      <span className="relative z-10">Send inquiry</span>
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
                  <span className="text-[10px] uppercase tracking-[0.45em] text-gold font-bold">
                    Choose the right starting point
                  </span>
                  <p className="mt-5 text-2xl font-display font-medium leading-tight text-ivory">
                    A model, an application, or a project question.
                  </p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 pb-32">
          <Reveal direction="right">
            <div className="space-y-12">
              <h2 className="text-xs uppercase tracking-[0.5em] text-gold font-bold">
                Direct access
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    label: "Model enquiries",
                    email: dreamRealtyEmail("models"),
                  },
                  {
                    label: "Project discussions",
                    email: dreamRealtyEmail("projects"),
                  },
                  {
                    label: "General information",
                    email: dreamRealtyEmail("studio"),
                  },
                  {
                    label: "Partnerships",
                    email: dreamRealtyEmail("partners"),
                  },
                ].map((item) => (
                  <div key={item.label} className="group">
                    <h3 className="text-[10px] uppercase tracking-widest text-ivory/40 mb-2">
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
              <h2 className="text-2xl font-display font-bold mb-6 tracking-tight">
                Model-led conversations
              </h2>
              <p className="text-ivory/75 font-light leading-relaxed mb-8">
                Start with a model or application. From there, the relevant
                configuration, finish, delivery, and project information can be
                considered against your requirements.
              </p>
              <a
                href={`mailto:${dreamRealtyEmail("studio")}`}
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-gold hover:text-ivory transition-colors"
              >
                <Mail size={14} /> {dreamRealtyEmail("studio")}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
